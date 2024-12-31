'use client'
import Text from "./Text";
import Image from 'next/image'

const footerDetails = [{
  heading: 'company',
  sub: [{ name: 'about us', href: '/about' }, { name: 'services', href: '/services' }]
}, {
  heading: 'help',
  sub: [{ name: 'contact us', href: '/contactus' }, { name: 'FAQs', href: '/services' }]
}, {
  heading: 'info',
  sub: [{ name: 'works', href: '/works' }, { name: 'contacts', href: '/contacts' }]
}
];

const footerContact = [
  { name: 'Instagram', image: '/images/instagram.svg' },
  { name: 'Whatsapp', image: '/images/whatsapp.svg' }
]

export default function Footer() {
  const scrollToTop = () => {
    try {
      if (window) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error('error', err)
    }
  }
  return (
    <div className="border rounded-sm border-border-color p-10 mb-16">
      <div className="flex md:justify-between flex-col md:flex-row border border-white bg-card-bg rounded-2xl">
        <div className="basis-2/3 p-8 ">
          <Text className="text-2xl">Ready to Innovate with us?</Text>
          <Text className="text-sm">
            Let's bring the ideas to life Contact us for a consultation today!
          </Text>
        </div>
        <div className="text-white basis-1/3 bg-[#0012] p-8 rounded-2xl flex items-center justify-center">Get a Free Quote</div>
      </div>
      <div className="text-white font-thin flex md:justify-between flex-col md:flex-row items-center md:items-start text-sm mt-8">
        <div className="flex justify-between gap-8 basis-2/3 pb-8">
          {footerDetails.map((data, index) => {
            return <Info heading={data.heading} sub={data.sub} key={`footer-details-${index}`} />
          })}
        </div>
        <div>
          <div>+91 89784561230</div>
          <div>info@spectronova.com</div>
        </div>
      </div>
      <div className="text-white text-sm font-thin flex md:justify-between flex-col md:flex-row  gap-20 md:max-w-[70%] mt-4 md:mt-0">
        {footerContact.map((data, index) => {
          return <FooterContact name={data.name} image={data.image} key={`footer-contact-${index}`} />
        })}
      </div>
      <div className="text-white font-thin text-[10px] mt-16 flex justify-between items-end">
        <div>
          © 2024 — Copyright
        </div>
        <div>
          <Image src="/images/scrollToTop.svg" width={60} height={60} alt="scrolltotop" onClick={scrollToTop} />
        </div>
      </div>
    </div>
  );
}

/**@param {Object} param0 
* @param {string} param0.heading 
* @param {{name: string, href: string}[]} param0.sub */
function Info({ heading, sub }) {
  return <div>
    <div className="mb-4 uppercase text-[10px]">{heading}</div>
    {sub.map((data, index) => {
      return <div key={`footer-info-${index}`} className="capitalize text-xs">{data.name}</div>
    })}
  </div>
}

function FooterContact({ name, image }) {
  return <div className="flex justify-between items-center gap-16 basis-1/2 pt-8 border-t-2 border-gray-800">
    <div>{name}</div>
    <Image src={image} width={16} height={16} alt={name} />
  </div>
}
