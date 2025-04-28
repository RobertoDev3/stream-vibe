import { Title } from '@/components/common/title';
import { Container } from '@/components/layout/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  return (
    <Container className='space-y-10 lg:space-y-15'>
      <Title
        title='Perguntas frequentes'
        description='Tem perguntas? Temos respostas! Confira nossa seção de perguntas frequentes para encontrar respostas para as perguntas mais comuns sobre StreamVibe.'
      />

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1' className='flex gap-4'>
          <div className='h-fit w-fit rounded-md border border-[var(--black15)] bg-[var(--black12)] px-4 py-3 font-semibold'>
            01
          </div>
          <div className='flex w-full flex-col gap-2'>
            <AccordionTrigger className='p-0 text-xl font-medium'>
              O que é StreamVibe?
            </AccordionTrigger>
            <AccordionContent className='text-[var(--grey60)]'>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </AccordionContent>
          </div>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
