import Image from 'next/image'

export default function LpBuilderPage() {
  return (
    <div className="flex-center container h-full">
      <div className="flex flex-col items-center">
        <Image src="/images/comming-soon.png" alt="Comming soon" width={450} height={446} />
        <h1 className="mt-5 md:text-3xl">Comming soon...</h1>
      </div>
    </div>
  )
}
