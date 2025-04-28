import { GamingConsoleIcon } from '@/assets/icons/gaming-console-icon';
import { LaptopIcon } from '@/assets/icons/laptop-icon';
import { SmartTvIcon } from '@/assets/icons/smart-tv-icon';
import { SmartphoneIcon } from '@/assets/icons/smartphone-icon';
import { TabletIcon } from '@/assets/icons/tablet-icon';
import { VrHeadsetIcon } from '@/assets/icons/vr-headset-icon';
import { Title } from '@/components/common/title';
import { Container } from '@/components/layout/container';

type DeviceProps = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const devices: DeviceProps[] = [
  {
    name: 'Celulares',
    description:
      'StreamVibe é otimizado para os smartphones Android e iOS. Baixe nosso aplicativo na Google Play Store ou na Apple App Store.',
    icon: SmartphoneIcon,
  },
  {
    name: 'Tablets',
    description:
      'Aproveite a experiência de streaming em tablets Android e iPad. Baixe nosso aplicativo na Google Play Store ou na Apple App Store.',
    icon: TabletIcon,
  },
  {
    name: 'Smart TVs',
    description:
      'StreamVibe é compatível com Smart TVs Android, LG e Samsung. Baixe nosso aplicativo na loja de aplicativos da sua TV.',
    icon: SmartTvIcon,
  },
  {
    name: 'Notebooks e Computadores',
    description:
      'Assista a filmes e séries no seu notebooks e computadores com Windows ou Mac. Acesse nosso site e faça login na sua conta.',
    icon: LaptopIcon,
  },
  {
    name: 'Console de Videogame',
    description:
      'StreamVibe é compatível com consoles como PlayStation e Xbox. Baixe nosso aplicativo na loja de aplicativos do seu console.',
    icon: GamingConsoleIcon,
  },
  {
    name: 'Realidade Virtual',
    description:
      'Mergulhe em uma experiência imersiva com dispositivos de Realidade Virtual como Oculus e HTC Vive. Baixe nosso aplicativo na loja de aplicativos do seu dispositivo VR.',
    icon: VrHeadsetIcon,
  },
];

export function Devices({ id }: { id?: string }) {
  return (
    <Container id={id} className='space-y-10 lg:space-y-20'>
      <Title
        title='Nós fornecemos experiência de streaming em vários dispositivos.'
        description='Com o StreamVibe, você pode apreciar seus filmes e Séries favoritas a
        qualquer hora, em qualquer lugar. Nossa plataforma foi projetada para
        ser compatível com uma ampla gama de dispositivos, garantindo que você
        nunca perca um momento de entretenimento.'
      />

      <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {devices.map(({ name, description, icon: DeviceIcon }, key) => (
          <div
            key={key}
            className='flex flex-col gap-6 rounded-md border border-[var(--black15)] bg-gradient-to-tr from-[var(--black06)] from-50% to-[var(--red45)]/5 p-10'
          >
            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center rounded-md border border-[var(--black12)] bg-[var(--black08)] p-3'>
                <DeviceIcon className='size-7.5 text-[var(--red45)]' />
              </div>
              <h2 className='text-xl font-semibold'>{name}</h2>
            </div>
            <p className='text-[var(--grey60)]'>{description}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
