'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { useCategoriesWithMovies } from '@/hooks/use-movies';
import { MoviesCategorysProps } from '@/types/movies';

type ApiProps = {
  scrollPrev: () => void;
  scrollNext: () => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
};

type Props = {
  id?: string;
};

export function CategoriesCarousel({ id }: Props) {
  const [api, setApi] = useState<ApiProps>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const {
    categoriesWithMovies,
  }: { categoriesWithMovies?: MoviesCategorysProps[] } =
    useCategoriesWithMovies();

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
    <div id={id} className='px-4 md:px-20 2xl:px-0'>
      <div className='mx-auto max-w-7xl space-y-10 lg:space-y-20'>
        <div className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-end lg:gap-20'>
          <div className='space-y-[14px] text-center lg:text-start'>
            <h2 className='text-[38px] font-bold'>
              Explore nossa grande variedade de filmes
            </h2>
            <p className='text-[var(--grey60)]'>
              Se você está procurando uma comédia para fazer você rir, um drama
              para fazer você pensar ou um documentário para aprender algo novo.
            </p>
          </div>

          <div className='flex items-center gap-4 rounded-lg border border-[var(--black12)] bg-[var(--black06)] p-4'>
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

        <Carousel
          className='w-full'
          setApi={api => setApi(api as unknown as ApiProps)}
          opts={{
            align: 'start',
            slidesToScroll: 'auto',
          }}
        >
          <CarouselContent>
            {categoriesWithMovies?.map((category, index) => (
              <CarouselItem
                key={index}
                className='w-full sm:basis-1/2 md:basis-1/3 xl:basis-1/5'
              >
                <Card className='rounded-lg border border-[var(--black15)] bg-[var(--black10)] p-[30px]'>
                  <CardContent className='space-y-1 p-0'>
                    <div className='relative grid grid-cols-2 gap-1'>
                      {category.movies
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
                      <h3 className='font-semibold'>{category.nameCategory}</h3>
                      <ArrowRightIcon className='size-6' />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
