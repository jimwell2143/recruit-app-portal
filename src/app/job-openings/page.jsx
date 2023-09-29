import React from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const JobOpenings = () => {
  const jobs = [
    {
      job: "Cook",
      employer: "Baratie Restaurant",
      address: "123 Faraway Street, Al Olaya, Riyadh, Saudi Arabia",
      salary: "PHP 25K - 35K Monthly",
      detail:
        "We are seeking a skilled and passionate Cook to join our vibrant Baratie Restaurant team. As a Cook at Baratie Restaurant, you will play a crucial role in delivering exceptional dining experiences to our valued guests.",
    },
    {
      job: "Nurse",
      employer: "Beacon Hill Healthcare",
      address: "456 Oak Avenue, Springfield, Illinois 67890, USA",
      salary: "PHP 25K - 35K Monthly",
      detail:
        "We are seeking a dedicated and compassionate Registered Nurse to join our healthcare team. The ideal candidate will be responsible for providing high-quality patient care, administering medications, and monitoring vital signs. Strong communication and interpersonal skills are essential to collaborate effectively with the medical team and patients families. A valid nursing license and a genuine commitment to patient well-being are required.",
    },
  ];

  return (
    <div>
      <div>
        <div className="w-full">
          <div className="inset-0 z-0">
            <Image
              src="/egmp/jobopening-header.png"
              alt="jobopening-header"
              width={1512}
              height={280}
              className="top-0 w-full object-cover"
            />
            <div className="bg-gray-100">
              <div className="container mx-auto p-10">
                <div className="flex p-6 bg-white rounded-lg flex-col justify-center items-center gap-6 ">
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                      <input
                        className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                        placeholder="Search Job Position..."
                      />
                    </div>
                    <div className="w-[250px] flex-col justify-start items-start gap-1.5 inline-flex">
                      <input
                        className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                        placeholder="Search by Country"
                      />
                    </div>
                    <div className="bg-stone-400 rounded justify-center items-center flex">
                      <button className="px-4 py-3 bg-stone-400 rounded justify-start items-center gap-2 flex text-white text-xs font-semibold leading-none">
                        Search
                      </button>
                    </div>
                    <button className="px-4 py-3 bg-neutral-50 rounded border border-neutral-200 justify-center items-center gap-2 flex text-zinc-800 text-xs font-semibold leading-none">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="container mx-auto px-10 pb-10">
                <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                  (16) jobs available
                </div>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="container mx-auto px-10 pb-10">
                <div className="w-[1312px] h-[404px] justify-start items-start gap-6 inline-flex">
                  <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 sm:space-x-2 space-x-0 z-10 relative">
                    {jobs.map((item) => {
                      console.log(item);
                      return (
                        <>
                          <div className="grow shrink basis-0 p-6 bg-white rounded-lg flex-col justify-start items-start gap-6 inline-flex">
                            <div className="self-stretch justify-start items-center gap-6 inline-flex">
                              <div className="w-[100px] h-[100px] justify-center items-center flex">
                                <img
                                  className="w-[100px] h-[100px] relative rounded-[100px]"
                                  src="https://via.placeholder.com/100x100"
                                />
                              </div>
                              <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
                                <div className="self-stretch text-zinc-700 text-2xl font-semibold leading-loose">
                                  {item.job}
                                </div>
                                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                  <div className="grow shrink basis-0 text-justify text-gray-500 text-xs font-normal leading-none">
                                    {item.employer}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                              <div className="w-4 h-4 relative">
                                <img
                                  className="w-[11.20px] h-[13.52px] left-[2.40px] top-[1.60px] absolute"
                                  src="https://via.placeholder.com/11x14"
                                />
                              </div>
                              <div className="grow shrink basis-0 text-justify text-gray-500 text-sm font-normal leading-normal">
                                {item.address}
                              </div>
                            </div>
                            <div className="text-justify text-gray-500 text-xl font-semibold leading-normal">
                              {item.salary}
                            </div>
                            <div className="self-stretch h-[72px] text-justify text-zinc-700 text-sm font-normal leading-normal">
                              {item.detail}
                            </div>
                            <div className="self-stretch justify-end items-start gap-2 inline-flex">
                              <button className="px-4 py-3 bg-neutral-50 rounded border border-neutral-200 justify-center items-center gap-2 flex text-zinc-800 text-xs font-semibold leading-none">
                                View More Details
                              </button>
                              <div className="bg-stone-400 rounded justify-center items-center flex">
                                <button className="self-stretch px-4 py-3 bg-stone-400 justify-center items-center gap-2 flex text-white text-xs font-semibold leading-none">
                                  Sign Up to Apply for this Job
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
