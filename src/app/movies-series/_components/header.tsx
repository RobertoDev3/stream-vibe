'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { useAllCategorysMovies } from '@/hooks/use-movies';
import { MovieProps } from '@/types/movies';
import { PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function Header() {
  const { allMovieList } = useAllCategorysMovies();

  return (
    <div>
      <Container>
        <div className='max-w-[500px] space-y-10 pt-[210px]'>
          <div className='space-y-4'>
            <h2 className='text-7xl font-semibold'>Titulo do filme</h2>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, cumque, voluptates, quia voluptas sit aspernatur aut
              odit aut fugit. Sed est eveniet architecto culpa mollitia neque
              consequatur? Sed vitae libero.
            </p>
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
      <div>carrossel aqui</div>
      <div className='flex flex-wrap gap-4'>
        {allMovieList?.map((movie: MovieProps) => (
          <div key={movie.id} className='flex flex-col items-center'>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt='a'
              width={200}
              height={300}
              className='h-auto w-auto'
              priority
            />
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt='a'
              width={200}
              height={300}
              className='h-auto w-auto'
              priority
            />
            <h3 className='text-xl font-semibold'>{movie.title}</h3>
            <p className='text-gray-500'>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
