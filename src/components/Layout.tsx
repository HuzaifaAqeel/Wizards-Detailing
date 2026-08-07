import { useState, useEffect, ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { Instagram, ArrowRight, Menu, X, Phone } from 'lucide-react';
import { phone, instagram, services, images } from '@/lib/constants';
import { ArrowDownRight } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);
  const nav = [['Services', '/services'], ['Gallery', '/gallery'], ['About', '/about'], ['Contact', '/contact']];
  return <>
    <header className={`header ${scrolled ? 'scrolled' : ''}`} data-testid="header-site">
      <div className="container-wide nav-inner">
        <Link href="/" className="wordmark" data-testid="link-logo">
          <img src="/logo.png" alt="Wizard's Auto Detailing" className="h-12 md:h-16 w-auto object-contain" />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href} className="nav-link" data-testid={`link-nav-${label.toLowerCase()}`}>{label}</Link>)}</nav>
        <div className="header-actions">
          <a className="instagram-link" href={instagram} target="_blank" rel="noreferrer" aria-label="Open Instagram" data-testid="link-instagram-header"><Instagram size={16} /></a>
          <Link href="/book" className="button-gold" data-testid="link-book-header">Book now <ArrowRight size={14} /></Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} data-testid="button-mobile-menu">{open ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
    </header>
    <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <nav className="mobile-nav" aria-label="Mobile navigation">{[...nav, ['Book appointment', '/book']].map(([label, href]) => <Link key={href} href={href} data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</Link>)}</nav>
      <div className="mobile-meta"><a href={`tel:${phone}`} data-testid="link-mobile-phone"><Phone size={13} /> {phone}</a><a href={instagram} target="_blank" rel="noreferrer" data-testid="link-mobile-instagram"><Instagram size={13} /> @wizards.detailing</a></div>
    </div>
  </>;
}

function Footer() {
  return <footer className="footer">
    <div className="container-wide">
      <div className="footer-top"><div><div className="eyebrow">Make the appointment worth it</div><h2>Keep it looking its best.</h2></div><Link href="/book" className="button-gold" data-testid="link-footer-book">Book an appointment <ArrowRight size={14} /></Link></div>
      <div className="gold-line" />
      <div className="footer-cols">
        <div className="footer-col"><h3>Navigation</h3>{[['Home', '/'], ['Services', '/services'], ['Gallery', '/gallery'], ['About', '/about'], ['Book', '/book'], ['Contact', '/contact']].map(([x, y]) => <Link href={y} key={y} data-testid={`link-footer-${x.toLowerCase()}`}>{x}</Link>)}</div>
        <div className="footer-col"><h3>Services</h3>{services.map((s) => <Link href={`/services/${s.slug}`} key={s.slug} data-testid={`link-footer-service-${s.slug}`}>{s.title.replace('Paint ', '')}</Link>)}</div>
        <div className="footer-col"><h3>Contact</h3><a href={`tel:${phone}`} data-testid="link-footer-phone">{phone}</a><span>[CLIENT EMAIL TO BE PROVIDED]</span><span>Montreal & surrounding areas</span></div>
        <div className="footer-col"><h3>Social</h3><a href={instagram} target="_blank" rel="noreferrer" data-testid="link-footer-instagram">@wizards.detailing <Instagram size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /></a></div>
      </div>
      <div className="rule" /><div className="footer-bottom"><span>© {new Date().getFullYear()} Wizard’s Auto Detailing</span><span>Information shown is subject to client confirmation</span></div>
    </div>
  </footer>;
}

export default function Layout({ children }: { children: ReactNode }) { return <div className="site-shell"><Header />{children}<Footer /></div>; }

function Hero() {
  return <section className="hero">
    <div className="hero-media" style={{ backgroundImage: `url(${images.hero})` }} />
    <div className="container-wide hero-content"><div className="hero-kicker eyebrow">Montreal <span>•</span> Mobile auto detailing</div><h1>Precision in <em>every</em> detail.</h1><p className="hero-copy">Premium mobile interior, exterior, polishing and ceramic coating services — delivered to your location across Montreal and surrounding areas.</p><div className="hero-cta"><Link href="/book" className="button-gold" data-testid="link-hero-book">Book your detail <ArrowRight size={15} /></Link><Link href="/services" className="button-ghost" data-testid="link-hero-services">Explore services <ArrowDownRight size={15} /></Link></div><div className="credibility"><span>Mobile service</span><span>Professional detailing</span><span>Montreal & surrounding areas</span></div></div><div className="scroll-cue"><i /> Scroll to explore</div>
  </section>;
}
