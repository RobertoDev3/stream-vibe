import Link from 'next/link';

export function Nav() {
  return (
    <div className='absolute top-0 left-0 mx-auto flex w-full max-w-7xl items-center justify-between bg-red-300 px-20'>
      <p>logo</p>

      <nav>
        <ul className='flex gap-4 bg-black stroke-white stroke-2 p-2 text-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/movies-series'>Movies & Series</Link>
          </li>
          <li>
            <Link href='/support'>Support</Link>
          </li>
          <li>
            <Link href='/subscriptions'>Subscriptions</Link>
          </li>
        </ul>
      </nav>

      <div>
        <p>icons</p>
      </div>
    </div>
  );
}
