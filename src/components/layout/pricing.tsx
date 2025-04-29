import { Title } from '../common/title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Container } from './container';

export function Pricing() {
  return (
    <Container>
      <Tabs defaultValue='account' className='w-full space-y-10 lg:space-y-15'>
        <div className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20'>
          <Title
            title='Escolha o plano certo para você'
            description='Junte-se a StreamVibe e selecione nas nossas opções flexíveis de assinatura adaptadas para se adequar às suas preferências de visualização. Prepare-se para entretenimento ininterrupto!'
          />
          <TabsList className='h-fit rounded-md border border-[var(--black15)] bg-[var(--black06)] p-2'>
            <TabsTrigger
              value='account'
              className='h-fit cursor-pointer px-5 py-3 text-[var(--grey60)] data-[state=active]:bg-[var(--black12)] data-[state=active]:text-white'
            >
              Mensal
            </TabsTrigger>
            <TabsTrigger
              value='password'
              className='h-fit cursor-pointer px-5 py-3 text-[var(--grey60)] data-[state=active]:bg-[var(--black12)] data-[state=active]:text-white'
            >
              Anual
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='account'>hello world 1</TabsContent>
        <TabsContent value='password'>hello world 2</TabsContent>
      </Tabs>
    </Container>
  );
}
