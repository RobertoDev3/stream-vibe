import LogoAbstract from '@/assets/logo-abstract';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className='relative overflow-hidden'>
        <section className='absolute left-1/2 h-[calc(100dvh-200px)] w-[1785px] -translate-x-1/2 overflow-hidden md:h-[calc(100dvh-300px)]'>
          <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[var(--black08)] to-transparent' />
          <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[var(--black08)] to-transparent' />

          <div className='flex flex-wrap justify-center gap-3'>
            {Array.from({ length: 44 }, (_, i) => (
              <div
                key={i}
                className='h-[190px] w-[140px] shrink-0 rounded-md bg-gray-700 bg-cover bg-center'
                style={{
                  backgroundImage: `url(https://picsum.photos/id/${i}/200/300)`,
                }}
              />
            ))}
          </div>
        </section>

        <section className='relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center space-y-10 px-4 pt-30 text-center md:px-20 xl:px-[162px]'>
          <LogoAbstract className='size-[300px]' />
          <h1 className='text-5xl font-bold'>
            A melhor experiência de streaming
          </h1>
          <p className='text-sm text-[var(--grey60)]'>
            StreamVibe é a melhor experiência de streaming para assistir seus
            filmes e series, a qualquer hora, em qualquer lugar. Com o
            StreamVibe, você pode desfrutar de uma ampla variedade de conteúdo,
            incluindo filmes clássicos, series populares e muito mais. Você
            também pode criar suas próprias listas de observação, para encontrar
            facilmente o conteúdo que deseja assistir.
          </p>
          <Link
            href='/'
            className={cn('-space-x-1', buttonVariants({ variant: 'default' }))}
          >
            <PlayIcon className='size-6' />
            <span>Comece a Assistir Agora</span>
          </Link>
        </section>
      </header>

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
