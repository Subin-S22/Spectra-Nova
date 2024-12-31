
export default function ContactUs() {
  return <div className="p-4">
    <h1 className="text-text-color uppercase text-2xl font-semibold">get in touch</h1>
    <p className="text-white text-2xl font-semibold">Ready to elevate your business with cutting-edge technology?</p>
    <p className="text-text-color text-base">Contact us today.</p>

    <div className="text-white text-base mt-4">
      <div>
        Email: info@spectronova.com
      </div>
      <div>
        Phone: +91 89784561230
      </div>
      <div>
        Address: Tech park Bangalore
      </div>
    </div>

    <section className="border border-white rounded-2xl bg-button-bg p-4 md:p-8 mt-4 mb-20">
      <h2 className="text-text-color text-xl font-semibold">Ready to Innovate with Us?</h2>
      <p className="text-text-color text-base font-thin">Let's bring your ideas to life. Contact us for a consultation today!</p>

      <form className="flex flex-col gap-2 mt-10">
        <FormContainer>
          <label className="text-white font-semibold text-base min-w-20">Name:</label>
          <input type="text" name="name" className="w-full p-2 border focus:outline-border-color focus:outline-none rounded-sm" />
        </FormContainer>
        <FormContainer>
          <label className="text-white font-semibold text-base min-w-20">Email:</label>
          <input type="email" name="name" className="w-full p-2 border focus:outline-border-color focus:outline-none rounded-sm" />
        </FormContainer>
        <FormContainer>
          <label className="text-white font-semibold text-base min-w-20">Message:</label>
          <textarea type="text" name="name" className="w-full p-2 border focus:outline-border-color focus:outline-none rounded-sm" />
        </FormContainer>
        <button className="border border-text-color text-card-bg rounded-[48px] w-fit px-8  mx-auto mt-2
          py-2 font-semibold bg-text-color">Submit</button>
      </form>
    </section>
  </div>
}

function FormContainer({ children }) {
  return <div className="flex justify-center flex-col md:grow md:flex-row md:gap-2 md:min-w-32">
    {children}
  </div>
}
