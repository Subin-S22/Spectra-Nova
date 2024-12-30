import HeaderSubSection from "@/components/HeaderSubSection"

export default function Intro() {
  return <div className="flex gap-4 flex-col md:flex-row bg-card-bg p-8 sm:p-16 rounded-md">
    <div className="text-white text-4xl basis-2/3">
      Your <span className="text-text-color">TRUSTED</span> partner in
      innovative software solutions, We transform ideas into
      <span className="text-text-color">POWERFUL DIGITAL PRODUCTS.</span>
    </div>
    <HeaderSubSection />
  </div>
}
