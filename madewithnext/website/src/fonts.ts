import localFont from '@next/font/local'
import { Roboto_Mono } from '@next/font/google'

export const proximaFont = localFont({
  src: './FontsFree-Net-Proxima-Nova-Bold.otf',
  display: 'optional',
})

export const roboto_mono = Roboto_Mono({
  display: 'optional',
  subsets: ['latin'],
});