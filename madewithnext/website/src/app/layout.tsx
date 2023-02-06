import NavBar from "@/components/NavBar";
import "./globals.css";
import localFont from '@next/font/local'

const proximaFont = localFont({
  src: '../FontsFree-Net-Proxima-Nova-Bold.otf',
  display: 'optional',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={proximaFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
