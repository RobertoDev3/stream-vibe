import { Title } from '@/components/common/title';
import { Container } from '@/components/layout/container';

export function FAQ() {
  return (
    <Container className='space-y-10 lg:space-y-15'>
      <Title
        title='Perguntas frequentes'
        description='Tem perguntas? Temos respostas! Confira nossa seção de perguntas frequentes para encontrar respostas para as perguntas mais comuns sobre StreamVibe.'
      />
      <p>Hello world</p>
    </Container>
  );
}
