
export const phone = '438-872-0884';
export const instagram = 'https://www.instagram.com/wizards.detailing/';
export const images = {
  hero: 'https://images.pexels.com/photos/6872160/pexels-photo-6872160.jpeg?auto=compress&cs=tinysrgb&w=2200',
  blackCar: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1800',
  interior: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1400',
  exterior: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400',
  polish: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1400',
  ceramic: 'https://images.pexels.com/photos/6872161/pexels-photo-6872161.jpeg?auto=compress&cs=tinysrgb&w=1400',
  work: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1400',
  foam: 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1400',
  detail: 'https://images.pexels.com/photos/6872165/pexels-photo-6872165.jpeg?auto=compress&cs=tinysrgb&w=1400',
};
export const services = [
  { slug: 'interior-detailing', number: '01', title: 'Interior Detailing', description: 'Deep interior cleaning focused on restoring a fresh, clean and refined cabin.', image: images.interior, tags: ['Vacuuming', 'Surface cleaning', 'Seats', 'Carpets', 'Mats', 'Console & trims'], ideal: 'For cabins that need a reset, refresh, or more careful attention to the surfaces you live with every day.' },
  { slug: 'exterior-detailing', number: '02', title: 'Exterior Detailing', description: 'A careful exterior detail designed to remove contamination and restore a clean, polished appearance.', image: images.exterior, tags: ['Exterior wash', 'Wheels', 'Tires', 'Bodywork', 'Exterior finishing'], ideal: 'For daily drivers, weekend cars, and anyone ready to bring back a composed exterior finish.' },
  { slug: 'polishing', number: '03', title: 'Paint Polishing', description: 'Machine polishing designed to improve gloss, clarity and overall paint appearance.', image: images.polish, tags: ['Paint inspection', 'Surface preparation', 'Machine polishing', 'Final inspection'], ideal: 'For paint that looks flat, hazy, or needs a more deliberate finish before protection.' },
  { slug: 'ceramic-coating', number: '04', title: 'Ceramic Coating', description: 'Premium paint protection designed to enhance gloss, water behavior and ease of maintenance.', image: images.ceramic, tags: ['Preparation', 'Decontamination', 'Polishing as needed', 'Coating application'], ideal: 'For owners who want careful preparation and a lasting, high-gloss protection system discussed around their vehicle.' },
];
export const galleryItems = [
  { id: 'g1', category: 'Exterior', title: 'Exterior finish', image: images.exterior },
  { id: 'g2', category: 'Interior', title: 'Cabin reset', image: images.interior },
  { id: 'g3', category: 'Ceramic', title: 'Reflective protection', image: images.ceramic },
  { id: 'g4', category: 'Polishing', title: 'Paint clarity', image: images.polish },
  { id: 'g5', category: 'Exterior', title: 'Work-site detail', image: images.work },
  { id: 'g6', category: 'Interior', title: 'Finish work', image: images.detail },
  { id: 'g7', category: 'Exterior', title: 'Foam wash', image: images.foam },
];
