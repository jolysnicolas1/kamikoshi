import Image from 'next/image'
import { Inter } from 'next/font/google'
import mountains from '/public/mountain-bridge.jpeg'
import { Roboto } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

const noto = Noto_Sans_JP({
  weight: '700',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <main className='flex min-h-screen max-h-screen flex-col items-center justify-between drop-shadow-lg relative'>
      <h1 className="absolute top-[20%] left-[20%] text-[72px] text-red-100 drop-shadow-md { noto.className }">
        Kamikoshi studio
      </h1>
      <Image
        src={ mountains }
        className='rounded-md'
        layout='responsive'
      />
    </main>
  )
}
