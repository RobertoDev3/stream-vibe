import { Title } from '@/components/common/title';
import { Container } from '@/components/layout/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { maskTwoDigits } from '@/lib/masks';

const faqData = [
  {
    question: 'O que é StreamVibe?',
    answer:
      'StreamVibe é um serviço de streaming que permite assistir a filmes e programas sob demanda.',
  },
  {
    question: 'É estilizado?',
    answer:
      'Sim. Ele vem com estilos padrão que combinam com a estética dos outros componentes.',
  },
  {
    question: 'É animado?',
    answer: 'Sim. É animado por padrão, mas você pode desativá-lo se preferir.',
  },
];

export function FAQ() {
  return (
    <Container className='space-y-10 lg:space-y-15'>
      <Title
        title='Perguntas frequentes'
        description='Tem perguntas? Temos respostas! Confira nossa seção de perguntas frequentes para encontrar respostas para as perguntas mais comuns sobre StreamVibe.'
      />

      <Accordion type='single' collapsible className='w-full'>
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger number={maskTwoDigits(String(index + 1))}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
