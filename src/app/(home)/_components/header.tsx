import LogoAbstract from '@/assets/logo/logo-abstract';
import { Container } from '@/components/layout/container';
import { buttonVariants } from '@/components/ui/button';
import { useMoviesHeader } from '@/hooks/use-movies';
import { cn } from '@/lib/utils';
import { MovieProps } from '@/types/movies';
import { PlayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Header() {
  const { movies }: { movies?: MovieProps[] } = useMoviesHeader();

  return (
    <header className='relative overflow-hidden'>
      <section className='absolute left-1/2 h-[calc(100dvh-200px)] w-[1785px] -translate-x-1/2 md:h-[calc(100dvh-300px)]'>
        <div className='flex flex-wrap justify-center gap-3'>
          {movies?.map(({ poster_path }, key: number) => (
            <div
              key={key}
              className='h-[190px] w-[140px] shrink-0 rounded-md bg-gray-700 bg-cover bg-center'
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Shadows effect */}
      <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[var(--black08)] to-transparent to-60%' />
      <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[var(--black08)] to-transparent' />

      <Container className='relative z-10 flex flex-col items-center justify-center space-y-10 pt-30 text-center'>
        <LogoAbstract className='size-[300px]' />

        <h1 className='text-5xl font-bold'>
          A melhor experiência de streaming
        </h1>
        <p className='text-sm text-[var(--grey60)]'>
          StreamVibe é a melhor experiência de streaming para assistir seus
          filmes e series, a qualquer hora, em qualquer lugar. Com o StreamVibe,
          você pode desfrutar de uma ampla variedade de conteúdo, incluindo
          filmes clássicos, series populares e muito mais. Você também pode
          criar suas próprias listas de observação, para encontrar facilmente o
          conteúdo que deseja assistir.
        </p>
        <Link
          href='/'
          className={cn('-space-x-1', buttonVariants({ variant: 'default' }))}
        >
          <PlayIcon className='size-6' />
          <span>Comece a Assistir Agora</span>
        </Link>
      </Container>
    </header>
  );
}
