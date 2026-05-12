import PageShell from '@/components/shared/PageShell';
export default async function Property({params}:{params:Promise<{id:string}>}){const {id}=await params;return <PageShell title={`Property ${id}`}><div className='glass rounded-luxury p-6'>Gallery, booking calendar, map embed, reviews, amenities, temple distance, similar stays, spiritual guide nearby, WhatsApp inquiry.</div></PageShell>}
