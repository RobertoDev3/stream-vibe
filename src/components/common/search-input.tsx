import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '../ui/input';

type Props = {
  placeholder?: string;
};

export function SearchInput(Props: Props) {
  return (
    <div className='relative flex items-center'>
      <Input
        placeholder={Props.placeholder || 'Pesquisar...'}
        className='pl-10 text-xs md:text-sm'
      />
      <MagnifyingGlassIcon className='absolute left-2.5 size-6' />
    </div>
  );
}
