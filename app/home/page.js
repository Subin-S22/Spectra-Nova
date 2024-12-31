import TechCards from "./_components/TechCards"
import Intro from "./_components/Intro"
import OurService from "./_components/OurService"
import Link from 'next/link'

export default function Home() {
  return <div className="p-4 md:p-2">
    <section>
      <Intro />
    </section>
    <section>
      <h2 className="text-white text-3xl font-semibold text-center mt-6 ">Why to choose <span className="text-text-color">SPECTRO NOVA?</span></h2>
    </section>
    <section>
      <TechCards />
    </section>

    <section className="flex justify-center items-center">
      <Link href='/services' className="bg-button-bg rounded-3xl border border-border-color text-text-color px-12 py-2">
        Explore Now
      </Link>
    </section>

    <section>
      <OurService />
    </section>
  </div>
}
