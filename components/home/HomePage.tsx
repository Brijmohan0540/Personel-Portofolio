'use client';
import { destinations } from '@/lib/data';
import Navbar from '../layout/Navbar';
import { motion } from 'framer-motion';
import { MapPin, Star, MessageCircle, Phone } from 'lucide-react';

const props = Array.from({ length: 6 }).map((_,i)=>({id:i+1,name:`Temple View Retreat ${i+1}`,price:4500+i*700,rating:4.7}));

export default function HomePage() {
  return <main>
    <Navbar />
    <section className='relative min-h-screen overflow-hidden'>
      <video autoPlay loop muted className='absolute inset-0 h-full w-full object-cover opacity-40'><source src='/videos/hero.mp4'/></video>
      <div className='section relative pt-36'>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className='max-w-4xl text-4xl md:text-7xl font-semibold'>Experience Divine India with Premium Spiritual Stays</motion.h1>
        <div className='glass mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 rounded-luxury p-4'>
          {['Destination','Check-in','Check-out','Guests'].map(x=><input key={x} placeholder={x} className='rounded-2xl bg-white/10 p-3' />)}
          <button className='rounded-2xl bg-gradient-to-r from-saffron to-gold px-4 py-3 text-deep font-semibold'>Explore Stays</button>
        </div>
      </div>
    </section>

    <section className='section'>
      <h2 className='text-3xl font-semibold mb-8'>Trending Spiritual Destinations</h2>
      <div className='grid md:grid-cols-4 gap-5'>{destinations.map(d=><motion.div whileHover={{scale:1.03}} key={d} className='glass rounded-luxury p-5'><p className='text-xl'>{d}</p><p className='text-sm text-beige'>Temple vibe · 120+ properties</p><button className='mt-4 text-gold'>Explore →</button></motion.div>)}</div>
    </section>

    <section className='section'> <h2 className='text-3xl font-semibold mb-8'>Featured Stays</h2>
      <div className='grid md:grid-cols-3 gap-6'>{props.map(p=><article key={p.id} className='glass rounded-luxury p-4'><div className='h-44 rounded-2xl bg-gradient-to-br from-beige/40 to-transparent'/><h3 className='mt-3 text-xl'>{p.name}</h3><p className='flex items-center gap-2'><Star size={16} className='text-gold'/> {p.rating}</p><p>₹{p.price}/night</p><p className='text-sm mt-2'>AC · Near Temple · Meals</p><div className='mt-3 flex gap-2 text-xs'><button className='rounded-full bg-white/10 px-3 py-2'><Phone size={14}/></button><button className='rounded-full bg-white/10 px-3 py-2'><MessageCircle size={14}/></button><button className='rounded-full bg-gold px-3 py-2 text-deep'>Instant Book</button></div></article>)}</div>
    </section>

    <section className='section grid md:grid-cols-3 gap-5'>
      {['Verified Properties','Secure Payments','24x7 Support'].map(t=><div key={t} className='glass rounded-luxury p-6'><h3 className='text-xl'>{t}</h3><p className='text-sm text-beige mt-2'>Trusted hosts and spiritual tourism experts.</p></div>)}
    </section>

    <footer className='section border-t border-white/10 text-sm text-beige'>© 2026 IndiMitr · About · Become Host · Privacy · Terms</footer>
  </main>;
}
