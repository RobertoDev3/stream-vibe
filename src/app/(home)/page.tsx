import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='mx-auto max-w-7xl px-4 md:px-20 xl:px-[162px]'>
      <header className='space-y-10 pt-40 text-center'>
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
      </header>
    </main>
  );
}
