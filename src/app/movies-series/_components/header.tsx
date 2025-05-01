'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useTrendingMoviesWeek } from '@/hooks/use-movies';
import { MovieProps } from '@/types/movies';
import { PlayIcon, StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { maskTime, maskTwoDecimalPlaces, maskYear } from '@/lib/masks';

export function Header() {
  const { trendingMoviesWeek, isLoading } = useTrendingMoviesWeek();

  const [isSelectedMovie, setIsSelectedMovie] = useState<MovieProps>(
    trendingMoviesWeek?.[2],
  );

  useEffect(() => {
    setIsSelectedMovie(trendingMoviesWeek?.[2]);
  }, [trendingMoviesWeek]);

  if (isLoading) {
    return (
      <div className='flex h-dvh items-center justify-center'>
        <p className='text-2xl font-semibold'>Carregando...</p>
      </div>
    );
  }

  return (
    <div className='relative flex h-[730px] flex-col space-y-10 overflow-hidden xl:h-dvh'>
      <div
        className='absolute top-0 left-0 h-full w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${isSelectedMovie?.backdrop_path})`,
        }}
      />

      <div className='absolute h-full w-full bg-gradient-to-r from-black from-30% to-transparent to-160% opacity-80' />

      <Container className='relative z-10 flex-1 space-y-10 pb-5 xl:pt-[130px] 2xl:pb-20'>
        <div className='flex h-full max-w-[600px] flex-col justify-end space-y-10'>
          <div className='space-y-4'>
            <h2 className='text-4xl font-semibold md:text-6xl'>
              {isSelectedMovie?.title || isSelectedMovie?.name}
            </h2>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-2'>
                <StarIcon className='size-4' />
                <p>
                  {maskTwoDecimalPlaces(isSelectedMovie?.vote_average)}{' '}
                  <span className='text-[var(--grey60)]'>
                    &#40;{isSelectedMovie?.vote_count}&#41;
                  </span>
                </p>
              </div>
              <p>&#8226;</p>
              <p>
                {maskYear(
                  isSelectedMovie?.release_date ||
                    isSelectedMovie?.first_air_date ||
                    '',
                )}
              </p>

              {isSelectedMovie?.media_type !== 'tv' && (
                <p>
                  <span className='pr-1'>|</span>{' '}
                  {maskTime(isSelectedMovie?.runtime)}
                </p>
              )}
            </div>
            <p className='line-clamp-3'>{isSelectedMovie?.overview}</p>
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='outline'>Assistir ao Trailer</Button>
            <Button>
              <PlayIcon />
              Assistir Agora
            </Button>
          </div>
        </div>
      </Container>

      <Carousel
        className='relative mx-auto mb-4 w-full max-w-[1920px] overflow-hidden'
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className='flex h-[260px] items-end gap-3'>
          {trendingMoviesWeek?.map((movie: MovieProps) => (
            <CarouselItem key={movie.id} className='flex-none p-0'>
              <Card
                className={cn(
                  'transition-all duration-300 ease-in-out',
                  isSelectedMovie === movie
                    ? 'h-[260px] w-[176px]'
                    : 'h-[208px] w-[140px]',
                  'rounded-lg border-none bg-cover bg-center p-0 text-center text-white',
                )}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                }}
              >
                <button
                  className='h-full w-full cursor-pointer'
                  onClick={() => setIsSelectedMovie(movie)}
                >
                  <p className='hidden'>{movie.title || movie.name}</p>
                </button>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
