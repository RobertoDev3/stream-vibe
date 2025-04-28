type Props = {
  title: string;
  description?: string;
};
export function Title({ title, description }: Props) {
  return (
    <div className='space-y-[14px] text-center lg:text-start'>
      <h2 className='text-[28px] font-bold'>{title}</h2>
      <p className='text-[var(--grey60)]'>{description}</p>
    </div>
  );
}
