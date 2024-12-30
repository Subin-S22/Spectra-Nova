import Image from "next/image"
import Text from "./Text"

export default function HeaderSubSection() {
  return <div className={'flex justify-center items-center flex-col'}>
    <Text className={'text-center'}>
      <span className="font-semibold uppercase">Technology</span> that scales as high as your ambitions
    </Text>
    <Text className="bg-button-bg rounded-lg border border-border-color py-2 px-4 
          font-Poppins flex justify-center gap-4 w-fit">
      Let’s get connected <Image src="/images/Arrow.svg" width={12} height={12} alt="arrow" />
    </Text>
  </div>
}
