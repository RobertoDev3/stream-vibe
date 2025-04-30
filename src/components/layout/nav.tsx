'use client';

import { Logo } from '@/assets/logo/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { SearchInput } from '../common/search-input';
import { Container } from './container';

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: 'Início', path: '/' },
  { name: 'Filmes & Séries', path: '/movies-series' },
  { name: 'Suporte', path: '/support' },
  { name: 'Assinaturas', path: '/subscriptions' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <section>
      {/* Desktop Nav */}
      <Container className='absolute left-1/2 z-20 my-4 hidden w-full -translate-x-1/2 items-center justify-between lg:flex'>
        <Link href='/'>
          <Logo />
        </Link>

        <nav className='rounded-lg border-3 border-[var(--black12)] bg-[var(--black06)]'>
          <ul className='flex h-full items-center gap-4 px-4 py-2'>
            {navItems.map(({ name, path }, key) => (
              <li key={key} className='py-3'>
                <Link
                  href={path}
                  className={cn(
                    'py-3 text-sm text-[var(--grey75)] transition-all',
                    'hover:rounded-md hover:bg-[var(--black10)] hover:px-5 hover:font-medium hover:text-white',
                    pathname === path &&
                      'rounded-md bg-[var(--black10)] px-5 py-3 font-medium text-white',
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='icon' title='Pesquisar'>
            <MagnifyingGlassIcon className='size-6' />
          </Button>
          <Button variant='secondary'>Entrar</Button>
        </div>
      </Container>

      {/* Mobile Nav */}
      <Container className='absolute left-1/2 z-20 my-4 flex w-full -translate-x-1/2 items-center justify-between lg:hidden'>
        <Link href='/'>
          <Logo />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' title='Menu'>
              <Bars3Icon className='size-6' />
            </Button>
          </SheetTrigger>
          <SheetContent className='border-[var(--black12)] bg-[var(--black15)] px-4 py-20'>
            <SheetHeader className='hidden'>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navegue pelas páginas disponíveis no site.
              </SheetDescription>
            </SheetHeader>
            <div className='flex flex-col gap-10'>
              <nav>
                <ul className='flex flex-col gap-4'>
                  {navItems.map(({ name, path }, key) => (
                    <SheetClose asChild key={key}>
                      <Link href={path}>
                        <li
                          className={cn(
                            'cursor-pointer py-3 text-sm text-[var(--grey75)] transition-all',
                            'hover:rounded-md hover:bg-[var(--black10)] hover:px-5 hover:font-medium hover:text-white',
                            pathname === path &&
                              'rounded-md bg-[var(--black10)] px-5 py-3 font-medium text-white',
                          )}
                        >
                          {name}
                        </li>
                      </Link>
                    </SheetClose>
                  ))}
                </ul>
              </nav>

              <SearchInput placeholder='Pesquisar Filmes ou Séries' />

              <Button>Entrar</Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </section>
  );
}
