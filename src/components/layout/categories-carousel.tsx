'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

type ApiProps = {
  scrollPrev: () => void;
  scrollNext: () => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
};

export function CategoriesCarousel() {
  const [api, setApi] = useState<ApiProps>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const categories = [
    {
      name: 'Action',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Adventure',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Comedy',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Drama',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Horror',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Documentary',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Sci-Fi',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Romance',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Animation',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
    {
      name: 'Thriller',
      items: [
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
        '/placeholder.svg?height=150&width=120',
      ],
    },
  ];

  return (
    <section className='px-4 md:px-20 lg:flex 2xl:px-0'>
      <div className='mx-auto max-w-7xl space-y-20'>
        <div className='flex flex-col items-center justify-between gap-20 md:items-center lg:flex-row'>
          <div className='space-y-[14px] text-center lg:text-start'>
            <h2 className='text-[38px] font-bold'>
              Explore nossa grande variedade de categorias
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

            <div className='flex gap-1'>
              {Array.from({ length: count || 0 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-4 rounded-full transition-all duration-500 ${i === current ? 'w-6 bg-[var(--red45)]' : 'bg-[var(--black20)]'}`}
                />
              ))}
            </div>

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
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem key={index} className='md:basis-1/4'>
                <Card className='w-[295.4px] rounded-lg border border-[var(--black15)] bg-[var(--black10)] p-[30px]'>
                  <CardContent className='space-y-1 p-0'>
                    <div className='relative grid grid-cols-2 gap-1'>
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className='h-[123.5px] w-full rounded-sm bg-[var(--black15)]'
                          style={{ backgroundImage: `url(${item})` }}
                        />
                      ))}
                      <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[var(--black10)] to-transparent to-25%' />
                    </div>
                    <div className='flex items-center justify-between text-white'>
                      <h3 className='font-semibold'>{category.name}</h3>
                      <ArrowRightIcon className='size-6' />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
