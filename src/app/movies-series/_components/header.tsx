import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { PlayIcon } from '@heroicons/react/24/solid';

export function Header() {
  return (
    <div>
      <Container className='h-dvh'>
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
    </div>
  );
}
