import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <section
      className={cn('mx-auto max-w-7xl px-4 md:px-20 2xl:px-0', className)}
    >
      {children}
    </section>
  );
}
