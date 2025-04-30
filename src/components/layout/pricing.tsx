import { Title } from '../common/title';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Container } from './container';

type PlanType = {
  monthly: PlanProps[];
  annual: PlanProps[];
};

type PlanProps = {
  name: string;
  description: string;
  price: string;
};

const plans: PlanType = {
  monthly: [
    {
      name: 'Plano Básico',
      description:
        'Desfrute de uma extensa biblioteca de filmes e séries, apresentando uma variedade de conteúdo.',
      price: 'R$25,00',
    },
    {
      name: 'Plano Padrão',
      description:
        'Acesso a uma seleção mais ampla de filmes e séries, incluindo a maioria dos novos lançamentos e conteúdo exclusivo.',
      price: 'R$45,00',
    },
    {
      name: 'Plano Premium',
      description:
        'Acesso a uma seleção mais ampla de filmes e séries, incluindo todos os novos lançamentos e visualização offline.',
      price: 'R$75,00',
    },
  ],
  annual: [
    {
      name: 'Plano Básico',
      description:
        'Desfrute de uma extensa biblioteca de filmes e séries, apresentando uma variedade de conteúdo.',
      price: 'R$250,00',
    },
    {
      name: 'Plano Padrão',
      description:
        'Acesso a uma seleção mais ampla de filmes e séries, incluindo a maioria dos novos lançamentos e conteúdo exclusivo.',
      price: 'R$450,00',
    },
    {
      name: 'Plano Premium',
      description:
        'Acesso a uma seleção mais ampla de filmes e séries, incluindo todos os novos lançamentos e visualização offline.',
      price: 'R$750,00',
    },
  ],
};

export function Pricing({ id }: { id: string }) {
  return (
    <Container id={id}>
      <Tabs
        defaultValue='monthly'
        className='flex w-full flex-col gap-y-10 lg:gap-y-15'
      >
        <div className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20'>
          <Title
            title='Escolha o plano certo para você'
            description='Junte-se a StreamVibe e selecione nas nossas opções flexíveis de assinatura adaptadas para se adequar às suas preferências de visualização. Prepare-se para entretenimento ininterrupto!'
          />
          <TabsList className='h-fit rounded-md border border-[var(--black15)] bg-[var(--black06)] p-2'>
            <TabsTrigger
              value='monthly'
              className='h-fit cursor-pointer px-5 py-3 text-[var(--grey60)] data-[state=active]:bg-[var(--black12)] data-[state=active]:text-white'
            >
              Mensal
            </TabsTrigger>
            <TabsTrigger
              value='Annual'
              className='h-fit cursor-pointer px-5 py-3 text-[var(--grey60)] data-[state=active]:bg-[var(--black12)] data-[state=active]:text-white'
            >
              Anual
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value='monthly'
          className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'
        >
          {plans.monthly.map((plan, key) => (
            <div
              key={key}
              className='rounded-md border border-[var(--black15)] bg-[var(--black10)] p-10'
            >
              <div className='flex h-full flex-col gap-10'>
                <div className='space-y-3'>
                  <h2 className='text-xl font-bold'>{plan.name}</h2>
                  <p className='text-[var(--grey60)]'>{plan.description}</p>
                </div>
                <div className='flex flex-1 items-end'>
                  <p className='text-3xl font-semibold'>
                    {plan.price}
                    <span className='text-[16px] font-medium text-[var(--grey60)]'>
                      /mês
                    </span>
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <Button variant='secondary'>Teste Grátis</Button>
                  <Button>Escolher Plano</Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value='Annual'
          className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'
        >
          {plans.annual.map((plan, key) => (
            <div
              key={key}
              className='rounded-md border border-[var(--black15)] bg-[var(--black10)] p-10'
            >
              <div className='flex h-full flex-col gap-10'>
                <div className='space-y-3'>
                  <h2 className='text-xl font-bold'>{plan.name}</h2>
                  <p className='text-[var(--grey60)]'>{plan.description}</p>
                </div>
                <div className='flex flex-1 items-end'>
                  <p className='text-3xl font-semibold'>
                    {plan.price}
                    <span className='text-[16px] font-medium text-[var(--grey60)]'>
                      /ano
                    </span>
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <Button variant='secondary'>Teste Grátis</Button>
                  <Button>Escolher Plano</Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Container>
  );
}
