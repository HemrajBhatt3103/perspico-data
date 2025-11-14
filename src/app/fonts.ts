import localFont from 'next/font/local'

export const neufile = localFont({
  src: [
    {
      path: '../fonts/NeufileGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neufile',
  display: 'swap',
})

export const symphonie = localFont({
  src: '../fonts/SymphonieGrotesque-Regular.otf',
  variable: '--font-symphonie',
  display: 'swap',
})