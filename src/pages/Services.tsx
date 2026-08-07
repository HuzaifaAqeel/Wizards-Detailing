import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { services } from '@/lib/constants';

function ServicesPage() {
  return <Layout><main><section className="page-hero"><div className="container-wide"><div className="eyebrow">The service menu</div><h1>Detailing<br /><em>services.</em></h1><p>Professional mobile auto detailing for vehicles across Montreal and surrounding areas.</p></div></section><section className="section"><div className="container-wide service-list">{services.map((s) => <article className="service-row" key={s.slug}><div className="service-row-media" style={{ backgroundImage: `url(${s.image})` }} /><div className="service-row-copy"><div className="eyebrow">{s.number} / Wizard’s service</div><h2>{s.title}</h2><p>{s.description}</p><div className="included">{s.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href={`/services/${s.slug}`} className="button-gold" style={{ width: 'fit-content' }} data-testid={`link-services-detail-${s.slug}`}>Explore service <ArrowRight size={14} /></Link></div></article>)}</div></section><section className="cta-band"><div className="container-wide"><div className="eyebrow">Not sure where to start?</div><h2>Tell us what you want improved.</h2><Link href="/book" className="button-gold" data-testid="link-services-book">Request a recommendation <ArrowRight size={14} /></Link></div></section></main></Layout>;
}
export default ServicesPage;
