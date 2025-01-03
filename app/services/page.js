import HeaderSubSection from "@/components/HeaderSubSection";
import Image from 'next/image'

const ourSerices = [
  {
    image: '/images/WebDevelopment.png',
    heading: 'Web Development',
    paragraph: 'We design responsive, user-friendly, and SEO-optimized websites to enhance digital visibility and functionality for businesses of all sizes.',
    sub: [
      'Create fast, responsive websites optimized for user engagement.',
      'Build SEO-friendly designs to boost online presence.', 'Ensure seamless cross-platform functionality.'
    ]
  },

  {
    image: '/images/MobileDevelopment.png',
    heading: 'Mobile App Development',
    paragraph: 'Our mobile apps are scalable, user-friendly, and designed for multi-platform performance, ensuring innovation and engagement at every stage.',
    sub: [
      'Develop scalable mobile apps with innovative features',
      'Enhance user experiences with intuitive design.', 'Deliver cross-platform compatibility for wider reach.'
    ]
  },
  {
    image: '/images/CloudDevelopment.png',
    heading: 'Cloud Solutions',
    paragraph: "Our cloud solutions enhance business efficiency with secure, scalable, and integrated systems designed for seamless data management.",
    sub: [
      'Provide secure and efficient cloud integration.',
      'Enable scalable resources for growing businesses.', 'Enhance data storage with robust security protocols.'
    ]
  },
  {
    image: '/images/AIDevelopment.png',
    heading: 'AI & Machine Learning',
    paragraph: 'Leverage AI and ML for smarter workflows, actionable insights, and innovative tools to drive business growth and efficiency.',
    sub: [
      'Implement AI to simplify complex workflows.',
      'Provide actionable insights through predictive analytics.', 'Develop intelligent tools to enhance decision-making.'
    ]
  },
  {
    image: '/images/CRMDevelopment.png',
    heading: 'CRM Development and Management',
    paragraph: 'Our CRM solutions help businesses manage customer relationships efficiently by offering tailored, integrated, and scalable systems that improve interactions and boost customer loyalty.',
    sub: [
      'Design tailored CRM systems for better customer relationship management.',
      'Streamline processes to improve customer interactions and retention.', 'Provide integration with existing systems for a seamless experience.'
    ]
  }
]

/**@param {Object} param0
 * @param {{image:string, heading:string, paragraph:string, sub:string[]}} param0.serviceData
 * @param {number} param0.index
 * */
function ServiceCard({ serviceData, index }) {
  return <div className={"text-white flex  justify-between items-center md:items-stretch gap-4 p-8 md:py-16" + ` ${index % 2 !== 0 ? 'md:flex-row-reverse flex-col' : 'flex-col md:flex-row'}`}>
    <div className="relative w-[300px] h-[250px] sm:w-[350px] sm:h-[250px] md:w-[635px] md:h-[385px] md:basis-[60%]">
      <Image fill={true} src={serviceData.image} alt={serviceData.heading} />
      <div className="rounded-3xl bg-blur-card backdrop-blur-md absolute bottom-1 m-2 md:m-8 p-6 
        flex justify-between items-end gap-4">
        <div>
          <h1 className="text-xl md:text-2xl text-text-color font-semibold">{serviceData.heading}</h1>
          <p className="text-white font-semibold text-sm md:text-base text-ellipsis whitespace-nowrap overflow-hidden w-[200px] md:w-full md:whitespace-normal">{serviceData.paragraph}</p>
        </div>
        <Image src="/images/RightArrow.svg" width={20} height={20} alt="arrow" />
      </div>
    </div>
    <div className="md:basis-[35%] flex justify-between flex-col gap-8">
      {serviceData.sub.map((content, index) => (
        <div key={'serviceDataContent' + index} className={`border-l-4  px-6 basis-1/4
          flex items-center ${index === 1 ? 'border-gray-500' : 'border-card-bg'}`}>{content}</div>
      ))}
    </div>
  </div>
}

export default function Services() {
  return <div className="p-4 md:p-8">
    <div className="flex md:justify-between flex-col md:flex-row gap-8">
      <div className="text-center md:text-start">
        <h1 className="uppercase text-3xl font-semibold text-text-color">Our Services</h1>
        <p className="text-base font-semibold text-white">Discover our expertise in delivering tailored solutions for your business.</p>
      </div>
      <HeaderSubSection />
    </div>

    <section>
      {ourSerices.map((data, index) => (
        <ServiceCard serviceData={data} key={data.heading} index={index} />
      ))}
    </section>
  </div>
}
