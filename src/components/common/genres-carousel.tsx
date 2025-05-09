'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { GenresMoviesProps } from '@/types/movies';
import { Progress } from '../ui/progress';
import { Title } from './title';
import { ApiProps } from '@/types/globals';

type Props = {
  id?: string;
  genresMovies: GenresMoviesProps[] | undefined;
  title: string;
  description?: string;
};

export function GenresCarousel({
  id,
  genresMovies,
  title,
  description,
}: Props) {
  const [api, setApi] = useState<ApiProps>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const onReInit = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    api.on('select', onSelect);
    api.on('reInit', onReInit);
    onReInit();

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onReInit);
    };
  }, [api]);

  return (
    <div id={id} className='space-y-10 lg:space-y-15'>
      <div className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-end lg:gap-20'>
        <Title title={title} description={description} />

        <div className='hidden items-center gap-4 rounded-lg border border-[var(--black12)] bg-[var(--black06)] p-4 lg:flex'>
          <button
            onClick={() => api?.scrollPrev()}
            className='flex cursor-pointer items-center justify-center rounded-sm border border-[var(--black12)] bg-[var(--black10)] p-3.5 text-white hover:bg-[var(--black10)]/80 active:scale-95'
            disabled={!api}
          >
            <ArrowLeftIcon className='size-6' />
          </button>

          {count > 0 && (
            <div className='hidden gap-1 sm:flex'>
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-6 bg-[var(--red45)]' : 'w-4 bg-[var(--black20)]'}`}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => api?.scrollNext()}
            className='flex cursor-pointer items-center justify-center rounded-sm border border-[var(--black12)] bg-[var(--black10)] p-3.5 text-white hover:bg-[var(--black10)]/80 active:scale-95'
            disabled={!api}
          >
            <ArrowRightIcon className='size-6' />
          </button>
        </div>
      </div>

      <div className='flex flex-col items-center gap-10 lg:gap-20'>
        <Carousel
          className='w-full'
          setApi={api => setApi(api as unknown as ApiProps)}
          opts={{
            align: 'start',
            slidesToScroll: 'auto',
          }}
        >
          <CarouselContent>
            {genresMovies?.map((genre, index) => (
              <CarouselItem
                key={index}
                className='w-full sm:basis-1/2 md:basis-1/3 xl:basis-1/5'
              >
                <Card className='rounded-lg border border-[var(--black15)] bg-[var(--black10)] p-[30px]'>
                  <CardContent className='space-y-1 p-0'>
                    <div className='relative grid grid-cols-2 gap-1'>
                      {genre.movies
                        .slice(0, 4)
                        .map(({ poster_path }, key: number) => (
                          <div
                            key={key}
                            className='aspect-square w-full rounded-sm bg-[var(--black15)] bg-cover bg-center'
                            style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
                            }}
                          />
                        ))}
                      <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[var(--black10)] to-transparent to-50%' />
                    </div>
                    <div className='flex items-center justify-between text-white'>
                      <h3 className='truncate text-[16px] font-semibold md:text-sm'>
                        {genre.nameCategory}
                      </h3>
                      <ArrowRightIcon className='size-6' />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className='flex items-center gap-4 rounded-lg border border-[var(--black12)] bg-[var(--black06)] p-4 lg:hidden'>
          <button
            onClick={() => api?.scrollPrev()}
            className='flex cursor-pointer items-center justify-center rounded-sm border border-[var(--black12)] bg-[var(--black10)] p-3.5 text-white hover:bg-[var(--black10)]/80 active:scale-95'
            disabled={!api}
          >
            <ArrowLeftIcon className='size-6' />
          </button>

          {count > 0 && (
            <div className='hidden gap-1 sm:flex'>
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-6 bg-[var(--red45)]' : 'w-4 bg-[var(--black20)]'}`}
                />
              ))}
            </div>
          )}

          <Progress
            value={((current + 1) / count) * 100 || 0}
            className='w-28 sm:hidden'
          />

          <button
            onClick={() => api?.scrollNext()}
            className='flex cursor-pointer items-center justify-center rounded-sm border border-[var(--black12)] bg-[var(--black10)] p-3.5 text-white hover:bg-[var(--black10)]/80 active:scale-95'
            disabled={!api}
          >
            <ArrowRightIcon className='size-6' />
          </button>
        </div>
      </div>
    </div>
  );
}
