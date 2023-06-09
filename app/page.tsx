import Image from 'next/image'
import mountains from '/public/mountain-bridge.jpeg'
import { Noto_Sans_JP } from 'next/font/google'
import Avatar from './components/Avatar'

const noto = Noto_Sans_JP({
  weight: '700',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <main className='flex min-h-screen max-h-screen flex-col items-center justify-between drop-shadow-lg relative bg-black pt-24'>
        <h1 className="absolute top-[20%] left-[20%] text-[72px] text-fuchsia-500 drop-shadow-sm bg-black px-4 { noto.className }">
          Kamikoshi studio coucou
        </h1>
      {/* <Avatar /> */}
      <Image
        src={ mountains }
        alt='mountains'
        width={1000}
        height={1000}
      />

    </main>
  )
}
