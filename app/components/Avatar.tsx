import Image from 'next/image'
import k from '/public/k-alpha.png'


export default function Avatar() {
  return (
    <>
    <Image
        src={ k }
        alt='mountains'
        width={1000}
        height={1000}
      />
    </>
  )
}
