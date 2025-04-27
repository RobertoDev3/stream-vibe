'use client';

import { CategoriesCarousel } from '@/components/layout/categories-carousel';
import { Header } from './_components/header';

export default function Home() {
  return (
    <main>
      <Header />

      <section className='my-50'>
        <CategoriesCarousel />
      </section>
    </main>
  );
}
