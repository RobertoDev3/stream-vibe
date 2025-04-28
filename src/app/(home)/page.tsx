'use client';

import { CategoriesCarousel } from '@/components/common/categories-carousel';
import { Header } from './_components/header';
import { Devices } from './_components/devices';

export default function Home() {
  return (
    <main className='space-y-25'>
      <Header />
      <CategoriesCarousel id='categorys' />
      <Devices />
    </main>
  );
}
