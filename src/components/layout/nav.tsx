'use client';

import { Logo } from '@/assets/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Movies & Series', path: '/movies-series' },
  { name: 'Support', path: '/support' },
  { name: 'Subscriptions', path: '/subscriptions' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <div className='absolute left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-4 md:px-20 2xl:px-0'>
      <Logo />

      <nav className='my-4 rounded-lg border-3 border-[var(--black12)] bg-[var(--black06)]'>
        <ul className='flex h-full items-center gap-4 px-4 py-2'>
          {navItems.map(({ name, path }, key) => (
            <li
              key={key}
              className={cn(
                'py-3 text-sm text-[var(--grey75)] transition-all',
                'hover:rounded-md hover:bg-[var(--black10)] hover:px-5 hover:font-medium hover:text-white',
                pathname === path &&
                  'rounded-md bg-[var(--black10)] px-5 py-3 font-medium text-white',
              )}
            >
              <Link href={path}>{name}</Link>
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
    </div>
  );
}
