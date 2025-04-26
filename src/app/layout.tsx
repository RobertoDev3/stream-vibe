import type { Metadata } from 'next';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'Stream Vibe',
  description:
    'Descubra e aproveite os melhores filmes e séries em um só lugar. Entretenimento sem limites, na hora que você quiser!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
