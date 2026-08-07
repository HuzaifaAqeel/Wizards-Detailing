import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const bookingRequestsTable = pgTable("booking_requests", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredContactMethod: text("preferred_contact_method").notNull(),
  vehicleMake: text("vehicle_make").notNull(),
  vehicleModel: text("vehicle_model").notNull(),
  vehicleYear: integer("vehicle_year"),
  vehicleType: text("vehicle_type").notNull(),
  vehicleColor: text("vehicle_color"),
  vehicleCondition: text("vehicle_condition"),
  services: text("services").array().notNull(),
  serviceNotes: text("service_notes"),
  serviceAddress: text("service_address").notNull(),
  city: text("city").notNull(),
  postalCode: text("postal_code").notNull(),
  locationType: text("location_type"),
  accessNotes: text("access_notes"),
  preferredDate: date("preferred_date", { mode: "string" }).notNull(),
  preferredTime: text("preferred_time").notNull(),
  alternativeDate: date("alternative_date", { mode: "string" }),
  alternativeTime: text("alternative_time"),
  notes: text("notes"),
  consent: boolean("consent").notNull(),
  status: text("status").notNull().default("received"),
  submittedAt: timestamp("submitted_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertBookingRequestSchema = createInsertSchema(
  bookingRequestsTable,
).omit({
  id: true,
  submittedAt: true,
});

export type InsertBookingRequest = z.infer<typeof insertBookingRequestSchema>;
export type BookingRequest = typeof bookingRequestsTable.$inferSelect;