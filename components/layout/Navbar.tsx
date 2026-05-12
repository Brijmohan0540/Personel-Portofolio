'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-luxury glass px-6 py-4'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='text-2xl font-semibold text-gold'>IndiMitr</Link>
        <div className='hidden md:flex gap-6 text-sm'>
          <Link href='/explore'>Explore</Link><Link href='/host-dashboard'>Become Host</Link><Link href='/blog'>Blog</Link><Link href='/contact'>Contact</Link>
        </div>
        <Link href='/auth' className='rounded-full bg-gradient-to-r from-saffron to-gold px-4 py-2 text-deep font-medium'>Login</Link>
      </div>
    </motion.nav>
  );
}
