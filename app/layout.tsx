
import '@/app/ui/global.css'
import { funnel } from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${funnel.className} antialiased`}>{children}</body>
    </html>
  );
}
