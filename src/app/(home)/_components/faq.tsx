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
    question: 'Quanto custa o StreamVibe?',
    answer:
      'O StreamVibe oferece planos acessíveis para atender às suas necessidades. Consulte nossa página de preços para mais detalhes.',
  },
  {
    question: 'Que tipo de conteúdo está disponível no StreamVibe?',
    answer:
      'O StreamVibe oferece uma ampla variedade de filmes, séries, documentários e muito mais para todos os gostos.',
  },
  {
    question: 'Como posso assistir ao StreamVibe?',
    answer:
      'Você pode assistir ao StreamVibe em qualquer dispositivo com acesso à internet, como smartphones, tablets, smart TVs e computadores.',
  },
  {
    question: 'Como faço para me inscrever no StreamVibe?',
    answer:
      'Inscrever-se no StreamVibe é fácil! Basta acessar nosso site, escolher um plano e criar sua conta.',
  },
  {
    question: 'O que é o teste gratuito do StreamVibe?',
    answer:
      'O teste gratuito do StreamVibe permite que você experimente nosso serviço por um período limitado sem custo.',
  },
  {
    question: 'Como entro em contato com o suporte ao cliente do StreamVibe?',
    answer:
      'Você pode entrar em contato com nosso suporte ao cliente através da nossa página de contato ou pelo e-mail suporte@streamvibe.com.',
  },
  {
    question: 'Quais são os métodos de pagamento do StreamVibe?',
    answer:
      'Aceitamos diversos métodos de pagamento, incluindo cartões de crédito, débito e outras opções digitais.',
  },
];

export function FAQ({ id }: { id: string }) {
  return (
    <Container id={id} className='space-y-[24px] lg:space-y-[44px]'>
      <Title
        title='Perguntas frequentes'
        description='Tem perguntas? Temos respostas! Confira nossa seção de perguntas frequentes para encontrar respostas para as perguntas mais comuns sobre StreamVibe.'
      />

      <div className='grid w-full grid-cols-1 gap-x-20 min-[1095px]:grid-cols-2'>
        {/* Lado esquerdo */}
        <Accordion type='multiple'>
          {faqData
            .slice(0, Math.ceil(faqData.length / 2))
            .map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger number={maskTwoDigits(String(index + 1))}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>

        {/* Lado direito */}
        <Accordion type='multiple'>
          {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
            <AccordionItem
              key={index + Math.ceil(faqData.length / 2)}
              value={`item-${index + Math.ceil(faqData.length / 2)}`}
            >
              <AccordionTrigger
                number={maskTwoDigits(
                  String(index + Math.ceil(faqData.length / 2) + 1),
                )}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
