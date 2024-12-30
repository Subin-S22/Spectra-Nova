import HeaderSubSection from "@/components/HeaderSubSection";
import Image from "next/image";

const aboutCardDetails = [
  {
    heading: 'our mission',
    image: 'image',
    paragraph: 'To deliver high-quality, scalable, and secure software solutions that drive success and growth for our clients.'
  },
  {
    heading: 'our vission',
    image: 'image',
    paragraph: 'To be a global leader in software innovation, fostering a future of technology-driven possibilities.'
  }
]

const coreValues = [
  {
    heading: 'Innovation',
    paragraph: 'new ideas and leveraging the latest technologies to create impactful solutions.',
    image: '/images/core1.svg'
  },
  {
    heading: 'Excellence',
    paragraph: 'Striving for the highest standards in every project and delivering exceptional results.',
    image: '/images/core2.svg'
  },
  {
    heading: 'customer centricity',
    paragraph: "Prioritizing our clients' needs and building solutions that drive their success.",
    image: '/images/core3.svg'
  },
  {
    heading: ' Integrity',
    paragraph: "Integrity Conducting business with honesty, transparency, and a commitment to ethical practices",
    image: '/images/core4.svg'
  },
]


/**@param {Object} param0
 * @param {{heading: string, image: string, paragraph: string}} param0.cardDetails
 * */
const AboutCard = ({ cardDetails }) => {
  return <div className="text-white flex justify-center items-center gap-4 
    p-8 border border-card-bg rounded-xl">
    <Image src="/images/mission.svg" width={80} height={80} alt="mission" />
    <div>
      <h2 className="text-2xl text-text-color font-semibold uppercase">{cardDetails.heading}</h2>
      <p className="font-semibold text-base">{cardDetails.paragraph}</p>
    </div>
  </div>
}

/**@param {Object} param0
 * @param {{heading:string, paragraph:string, image:string}} param0.coreValue
 * */
const CoreOne = ({ coreValue }) => {
  return <div className="text-white bg-text-color p-8 rounded-[40px] basis-[40%] 
    flex justify-center items-center flex-col">
    <Image src={coreValue.image} width={80} height={80} alt={coreValue.heading} className="mb-4" />
    <h1 className="uppercase text-xl">
      {coreValue.heading}
    </h1>
    <p className="text-sm text-center">
      {coreValue.paragraph}
    </p>
  </div>
}

/**@param {Object} param0
 * @param {{heading:string, paragraph:string, image:string}} param0.coreValue
 * */
const CoreTwo = ({ coreValue }) => {
  return <div className="text-white bg-[rgba(255, 255, 255, 0.06)] border border-gray-700  
    p-8 rounded-[40px] basis-[60%] flex justify-center items-center flex-col">
    <Image src={coreValue.image} width={80} height={80} alt={coreValue.heading} className="mb-4" />
    <h1 className="uppercase text-xl">
      {coreValue.heading}
    </h1>
    <p className="text-sm text-center">
      {coreValue.paragraph}
    </p>
  </div>
}

const CoreValues = () => {
  return <div>
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-10">
      <CoreOne coreValue={coreValues[0]} />
      <CoreTwo coreValue={coreValues[1]} />
    </div>
    <div className="flex justify-center gap-8 flex-col md:flex-row">
      <CoreTwo coreValue={coreValues[2]} />
      <CoreOne coreValue={coreValues[3]} />
    </div>
  </div>
}

export default function About() {
  return <div className="p-4">
    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-10">
      <div className="basis-2/3">
        <h1 className="text-text-color uppercase font-semibold text-3xl">Spectro Nova Software Technologies</h1>
        <p className="text-white text-base font-semibold">is a dynamic software development company driven by innovation and customer satisfaction. With years of expertise, we bridge the gap between technology and business needs, empowering our clients to achieve their goals.</p>
      </div>
      <HeaderSubSection />
    </div>
    <section className="flex flex-col md:flex-row md:justify-between gap-10 my-10">
      {aboutCardDetails.map((data, index) => {
        return <AboutCard cardDetails={data} key={`about-card-${index}`} />
      })}
    </section>
    <section className="mb-16">
      <h1 className="text-center text-2xl text-white font-Poppins p-4">Core Values</h1>
      <CoreValues />
    </section>
  </div>
}
