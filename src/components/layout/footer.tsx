'use client';

import { FacebookIcon } from '@/assets/icons/facebook-icon';
import { Container } from './container';
import { XIcon } from '@/assets/icons/x-icon';
import { LinkedinIcon } from '@/assets/icons/linkedin-icon';
import { Button } from '../ui/button';
import Link from 'next/link';

type SiteMapProps = {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
};

const siteMap: SiteMapProps[] = [
  {
    title: 'Início',
    links: [
      { name: 'Categorias', href: '#categorys' },
      { name: 'Dispositivos', href: '#devices' },
      { name: 'Preços', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Filmes',
    links: [
      { name: 'Gêneros', href: '/' },
      { name: 'Tendência', href: '/' },
      { name: 'Lançamentos', href: '/' },
      { name: 'Popular', href: '/' },
    ],
  },
  {
    title: 'Séries',
    links: [
      { name: 'Gêneros', href: '/' },
      { name: 'Tendência', href: '/' },
      { name: 'Lançamentos', href: '/' },
      { name: 'Popular', href: '/' },
    ],
  },
  {
    title: 'Suporte',
    links: [{ name: 'Contate-nos', href: '/' }],
  },
  {
    title: 'Assinatura',
    links: [
      { name: 'Planos', href: '/' },
      { name: 'Benefícios', href: '/' },
    ],
  },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='mt-25 bg-[var(--black06)]'>
      <Container className='space-y-12.5 pt-12 pb-5 md:space-y-20 md:pt-20 md:pb-10'>
        <div className='grid grid-cols-2 gap-7.5 md:grid-cols-3 lg:grid-cols-6'>
          {siteMap.map((item, key) => (
            <div key={key} className='space-y-4'>
              <h2 className='font-semibold'>{item.title}</h2>
              <ul className='space-y-2 text-sm font-medium text-[var(--grey60)]'>
                {item.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='border-[var(--black15)] transition-all hover:text-white'
                      onClick={e => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='space-y-4'>
            <h2 className='font-semibold'>Conecte-se conosco</h2>
            <div className='flex items-center gap-2.5'>
              <Button
                size='icon'
                variant='secondary'
                title='Facebook'
                className='rounded-sm p-2.5'
              >
                <FacebookIcon className='size-5' />
              </Button>
              <Button
                size='icon'
                variant='secondary'
                title='X'
                className='rounded-sm p-2.5'
              >
                <XIcon className='size-5 fill-white' />
              </Button>
              <Button
                size='icon'
                variant='secondary'
                title='Linkedin'
                className='rounded-sm p-2.5'
              >
                <LinkedinIcon className='size-5' />
              </Button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 border-t border-[var(--black15)] pt-5 text-sm text-[var(--grey60)] lg:flex-row lg:justify-between'>
          <p className=''>©2025 StreamVibe. Todos os direitos reservados.</p>
          <div className='flex'>
            <Link
              href='/'
              className='pr-4 text-center transition-all hover:text-white'
            >
              Termos de uso
            </Link>
            <Link
              href='/'
              className='border-x border-[var(--black15)] px-4 text-center transition-all hover:text-white'
            >
              Política de Privacidade
            </Link>
            <Link
              href='/'
              className='pl-4 text-center transition-all hover:text-white'
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
