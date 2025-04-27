'use client';

import { Header } from './_components/header';

export default function Home() {
  return (
    <main>
      <Header />

      <section className='flex h-dvh items-center justify-center text-center'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          perferendis beatae. Sint magni officiis voluptatibus omnis, facilis
          est quo et ullam repudiandae eveniet sit reprehenderit expedita rerum
          dolor possimus ex.
        </p>
      </section>
    </main>
  );
}
