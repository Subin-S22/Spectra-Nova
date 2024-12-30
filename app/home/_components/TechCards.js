import Image from "next/image";

export default function TechCards() {
  return (
    <div className="flex flex-col md:grid grid-rows-8-150 md:grid-cols-10-30-md lg:grid-cols-10-30 place-content-center gap-5 text-white max-w-screen-lg lg:m-10 m-2">
      <div
        className="row-start-2 row-end-5 col-start-1 col-span-3 flex flex-col gap-2 justify-center items-center
        bg-card-bg rounded-3xl p-4"
      >
        <Image src="/images/Future.svg" width={60} height={60} alt="Future" />
        <div className="text-white text-center text-xl">
          Future-Ready Technology
        </div>
      </div>
      <div
        className="row-start-2 row-end-6 col-start-4 col-span-3 flex flex-col gap-2 justify-center items-center
        bg-card-bg rounded-3xl"
      >
        <Image
          src="/images/Industry-lead.svg"
          width={60}
          height={60}
          alt="Industry lead"
        />
        <div className="text-sm text-center">
          <span className="text-xl font-medium block">
            Industry-leading expertise{" "}
          </span>
          in software development.
        </div>
      </div>
      <div
        className="col-start-7 col-end-9 row-span-4 row-start-1 bg-card-bg rounded-3xl p-4 flex justify-center 
        items-center flex-col"
      >
        <Image src="/images/Secure.svg" width={60} height={60} alt="Secure" />
        <div className="text-base text-center">
          Secure, Scalable & adaptive solutions
        </div>
      </div>
      <div
        className="row-start-5 row-span-2 col-start-2 col-span-2 bg-card-bg rounded-3xl flex justify-center 
        items-center flex-col p-4 gap-2"
      >
        <Image
          src="/images/End-to-End.svg"
          width={30}
          height={30}
          alt="End to end"
        />
        <div className="text-xs text-center">
          {" "}
          End-to-End Project Management
        </div>
      </div>
      <div className="row-start-6 col-start-5 col-end-7 row-end-8 bg-card-bg rounded-3xl flex justify-center items-start p-4">
        <Image
          src="/images/Soft-tech.svg"
          width={20}
          height={20}
          alt="software tech"
        />
        <div className="text-xs ">
          Software technology solutions provide a wide range of features to
          enhance security and protect digital assets.
        </div>
      </div>
      <div
        className="row-start-5 col-start-7 col-end-10 col-span-3 row-span-3 bg-card-bg rounded-3xl 
        flex justify-center items-center flex-col gap-2"
      >
        <Image
          src="/images/Cost.svg"
          width={60}
          height={60}
          alt="Cost effective"
        />
        <div className="text-xl">Cost-Effective</div>
      </div>
    </div>
  );
}
