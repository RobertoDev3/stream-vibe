import LogoAbstract from '@/assets/logo/logo-abstract';

export default function Loading() {
  return (
    <div className='flex h-dvh items-center justify-center bg-[var(--black08)]'>
      <LogoAbstract className='animate-flip-y repeat-infinite size-48 duration-2000' />
    </div>
  );
}
