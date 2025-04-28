'use client';

import { Header } from './_components/header';
import { Devices } from './_components/devices';
import { CategoriesCarousel } from '@/components/common/categories-carousel';

export default function Home() {
  return (
    <main className='space-y-25'>
      <Header />
      <CategoriesCarousel id='categorys' />
      <Devices id='devices' />
    </main>
  );
}
