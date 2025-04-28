import { FacebookIcon } from '@/assets/icons/facebook-icon';
import { Container } from './container';
import { XIcon } from '@/assets/icons/x-icon';
import { LinkedinIcon } from '@/assets/icons/linkedin-icon';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className='bg-[var(--black06)]'>
      <Container className='grid grid-cols-2 gap-7.5 pt-12 pb-5 md:pt-20 md:pb-10'>
        <div className='space-y-4'>
          <h2 className='font-semibold'>Início</h2>
          <ul className='space-y-2 text-sm font-medium text-[var(--grey60)]'>
            <li>Categorias</li>
            <li>Dispositivos</li>
            <li>Preços</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Filmes</h2>
          <ul className='space-y-2 text-sm font-medium text-[var(--grey60)]'>
            <li>Generos</li>
            <li>Tendência</li>
            <li>Lançamentos</li>
            <li>Popular</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Séries</h2>
          <ul className='space-y-2 text-sm font-medium text-[var(--grey60)]'>
            <li>Generos</li>
            <li>Tendência</li>
            <li>Lançamentos</li>
            <li>Popular</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Suporte</h2>
          <ul className='space-y-2 text-sm font-medium text-[var(--grey60)]'>
            <li>Contate-nos</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Assinatura</h2>
          <ul className='space-y-2 text-sm font-medium text-[var(--grey60)]'>
            <li>Planos</li>
            <li>Benefícios</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold'>Conecte-se conosco</h2>
          <div className='flex items-center gap-2.5'>
            <Button
              size='icon'
              variant='secondary'
              className='rounded-sm p-2.5'
            >
              <FacebookIcon className='size-5' />
            </Button>
            <Button
              size='icon'
              variant='secondary'
              className='rounded-sm p-2.5'
            >
              <XIcon className='size-5 fill-white' />
            </Button>
            <Button
              size='icon'
              variant='secondary'
              className='rounded-sm p-2.5'
            >
              <LinkedinIcon className='size-5' />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
