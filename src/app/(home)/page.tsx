'use client';

import { CategoriesCarousel } from '@/components/common/categories-carousel';
import { Header } from './_components/header';

export default function Home() {
  return (
    <main className='space-y-25'>
      <Header />
      <CategoriesCarousel id='categorys' />
    </main>
  );
}
