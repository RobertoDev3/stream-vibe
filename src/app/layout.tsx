import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Nav } from '@/components/layout/nav';
import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/context/providers';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Stream Vibe',
  description:
    'Descubra e aproveite os melhores filmes e séries em um só lugar. Entretenimento sem limites, na hora que você quiser!',
};

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={cn('bg-[var(--black08)] text-white', manrope.className)}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
