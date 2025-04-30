import { Container } from './container';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function CardContainerMoviesSeries({ title, children }: Props) {
  return (
    <Container>
      <div className='relative rounded-lg border border-[var(--black15)] p-10'>
        <h2 className='absolute top-0 size-fit -translate-y-1/2 rounded-md bg-[var(--red45)] px-5 py-2 font-semibold'>
          {title}
        </h2>
        {children}
      </div>
    </Container>
  );
}
