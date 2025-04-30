import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto w-full max-w-7xl px-4 md:px-20 2xl:px-0',
        className,
      )}
    >
      {children}
    </section>
  );
}
