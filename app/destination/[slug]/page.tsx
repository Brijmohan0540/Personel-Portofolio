import PageShell from '@/components/shared/PageShell';
export default async function Destination({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <PageShell title={`Destination: ${slug}`}><div className='glass rounded-luxury p-6'>Destination highlights, temple tours, featured properties, maps, and experiences.</div></PageShell>}
