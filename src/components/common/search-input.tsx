import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '../ui/input';

export function SearchInput() {
  return (
    <div className='relative flex items-center'>
      <Input placeholder='Pesquisar...' className='pl-10' />
      <MagnifyingGlassIcon className='absolute left-2.5 size-6' />
    </div>
  );
}
