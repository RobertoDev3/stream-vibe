'use client';

import { useTrendingMoviesWeekForHeader } from '@/hooks/use-movies';
import { Title } from '../common/title';
import { Button } from '../ui/button';
import { Container } from './container';
import { MovieProps } from '@/types/movies';

export function FreeTrial() {
  const { movies }: { movies?: MovieProps[] } =
    useTrendingMoviesWeekForHeader();

  return (
    <Container className='my-25'>
      <div className='relative flex items-center justify-center overflow-hidden rounded-lg border border-[var(--black15)] bg-[var(--black06)] px-15 py-20'>
        <div className='relative z-20 flex flex-col items-center gap-10 lg:flex-row lg:gap-20'>
          <Title
            title='Comece sua avaliação gratuita hoje!'
            description='Esta é uma chamada clara e concisa que incentiva os usuários a se inscreverem em uma avaliação gratuita do StreamVibe.'
          />
          <Button>Teste Grátis</Button>
        </div>

        <div className='absolute top-0 left-0 z-10 size-full bg-gradient-to-b from-[var(--black06)]/98 from-10% to-[var(--red45)]/35 lg:bg-gradient-to-r lg:from-[var(--black06)] lg:via-[var(--black08)]/95 lg:via-40%' />

        <div className='absolute h-full w-[1500px] opacity-60 md:w-[1785px]'>
          <div className='flex flex-wrap justify-center gap-5'>
            {movies?.map(({ poster_path }, key: number) => (
              <div
                key={key}
                className='h-[100px] w-[125px] shrink-0 bg-gray-700 bg-cover bg-center md:h-[75px]'
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
