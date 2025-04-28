import { Title } from '@/components/common/title';
import { Container } from '@/components/layout/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';

export function FAQ() {
  return (
    <Container className='space-y-10 lg:space-y-15'>
      <Title
        title='Perguntas frequentes'
        description='Tem perguntas? Temos respostas! Confira nossa seção de perguntas frequentes para encontrar respostas para as perguntas mais comuns sobre StreamVibe.'
      />
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
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
