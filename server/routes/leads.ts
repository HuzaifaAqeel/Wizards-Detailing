import { Router, type IRouter } from "express";
import { db, bookingRequestsTable, contactInquiriesTable } from "../db";
import {
  CreateBookingRequestBody,
  CreateBookingRequestResponse,
  CreateContactInquiryBody,
  CreateContactInquiryResponse,
} from "../../shared/api-zod";

const router: IRouter = Router();
const recentRequests = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const previous = recentRequests.get(ip);
  if (previous && now - previous < RATE_LIMIT_WINDOW_MS) return true;
  recentRequests.set(ip, now);
  for (const [key, timestamp] of recentRequests) {
    if (now - timestamp > RATE_LIMIT_WINDOW_MS) recentRequests.delete(key);
  }
  return false;
}

router.post("/bookings", async (req, res): Promise<void> => {
  const ip = req.ip ?? "unknown";
  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Please wait a moment before sending another request." });
    return;
  }

  const parsed = CreateBookingRequestBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.flatten() }, "Invalid booking request");
    res.status(400).json({ error: "Please review the highlighted booking details and try again." });
    return;
  }
  if (parsed.data.website?.trim()) {
    res.status(400).json({ error: "We couldn’t submit your request. Please try again." });
    return;
  }
  if (!parsed.data.consent) {
    res.status(400).json({ error: "Please agree to be contacted about this appointment request." });
    return;
  }

  const { website: _website, ...bookingData } = parsed.data;
  const [booking] = await db
    .insert(bookingRequestsTable)
    .values({
      ...bookingData,
      vehicleYear: bookingData.vehicleYear ?? null,
      vehicleColor: bookingData.vehicleColor ?? null,
      vehicleCondition: bookingData.vehicleCondition ?? null,
      serviceNotes: bookingData.serviceNotes ?? null,
      locationType: bookingData.locationType ?? null,
      accessNotes: bookingData.accessNotes ?? null,
      preferredDate: bookingData.preferredDate.toISOString().slice(0, 10),
      alternativeDate: bookingData.alternativeDate
        ? bookingData.alternativeDate.toISOString().slice(0, 10)
        : null,
      alternativeTime: bookingData.alternativeTime ?? null,
      notes: bookingData.notes ?? null,
    })
    .returning();

  const response = CreateBookingRequestResponse.parse({ ...booking, website: null });
  res.status(201).json(response);
});

router.post("/contact-inquiries", async (req, res): Promise<void> => {
  const ip = req.ip ?? "unknown";
  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Please wait a moment before sending another message." });
    return;
  }

  const parsed = CreateContactInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.flatten() }, "Invalid contact inquiry");
    res.status(400).json({ error: "Please complete the required contact fields and try again." });
    return;
  }
  if (parsed.data.website?.trim()) {
    res.status(400).json({ error: "We couldn’t submit your message. Please try again." });
    return;
  }

  const [inquiry] = await db
    .insert(contactInquiriesTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      subject: parsed.data.subject,
      message: parsed.data.message,
    })
    .returning();

  res.status(201).json(CreateContactInquiryResponse.parse(inquiry));
});

export default router;
