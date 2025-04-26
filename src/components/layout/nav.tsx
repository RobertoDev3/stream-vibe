'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <div className='absolute top-0 left-0 mx-auto flex w-full max-w-7xl items-center justify-between px-20'>
      <p>logo</p>

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

      <div>
        <p>icons</p>
      </div>
    </div>
  );
}
