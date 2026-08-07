import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import { galleryItems } from '@/lib/constants';

function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<string | null>(null);
  const categories = ['All', 'Exterior', 'Interior', 'Ceramic', 'Polishing'];
  const shown = useMemo(() => filter === 'All' ? galleryItems : galleryItems.filter((x) => x.category === filter), [filter]);
  const current = galleryItems.findIndex((x) => x.id === selected);
  const openAt = (index: number) => setSelected(galleryItems[index]?.id ?? null);
  return <Layout><main><section className="page-hero"><div className="container-wide"><div className="eyebrow">Our work</div><h1>Recent<br /><em>details.</em></h1><p>A manually maintainable gallery ready for verified Wizard’s project photography.</p></div></section><section className="section"><div className="container-wide"><div className="filter-row" role="tablist">{categories.map((x) => <button className={`filter-button ${filter === x ? 'active' : ''}`} key={x} onClick={() => setFilter(x)} role="tab" aria-selected={filter === x} data-testid={`button-gallery-filter-${x.toLowerCase()}`}>{x}</button>)}</div><div className="gallery-grid">{shown.map((x) => <button className="gallery-tile" key={x.id} onClick={() => setSelected(x.id)} aria-label={`View ${x.title}`} data-testid={`button-gallery-item-${x.id}`}><img src={x.image} alt={`${x.category} detailing project placeholder`} /><div className="gallery-caption"><span>{x.title}</span><span>{x.category}</span></div></button>)}</div>{shown.length === 0 && <div className="form-success"><Sparkles className="mx-auto mb-4" color="#c7a44a" /><h2>No work in this filter yet.</h2><p>Verified project imagery can be added here when supplied.</p></div>}</div></section></main>{selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setSelected(null)}><div className="lightbox-inner" onClick={(e) => e.stopPropagation()}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close gallery" data-testid="button-lightbox-close"><X size={18} /></button><button className="lightbox-nav prev" onClick={() => openAt((current - 1 + galleryItems.length) % galleryItems.length)} aria-label="Previous image" data-testid="button-lightbox-previous"><ChevronLeft size={19} /></button><img src={galleryItems[current].image} alt={galleryItems[current].title} /><button className="lightbox-nav next" onClick={() => openAt((current + 1) % galleryItems.length)} aria-label="Next image" data-testid="button-lightbox-next"><ChevronRight size={19} /></button><div className="lightbox-meta"><span>{galleryItems[current].title}</span><span>{galleryItems[current].category} · Wizard’s project imagery placeholder</span></div></div></div>}</Layout>;
}
export default GalleryPage;
