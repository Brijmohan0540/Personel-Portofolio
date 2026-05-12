import Navbar from '../layout/Navbar';

export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return <main><Navbar /><section className='section pt-36'><h1 className='text-4xl font-semibold'>{title}</h1><div className='mt-8'>{children}</div></section></main>;
}
