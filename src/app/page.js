import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="html">
      <div className="container mx-auto relative h-full flex items-center px-10">
        <div className="my-24 relative z-10 mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col justify-center items-center w-full text-white text-4xl font-bold">
              <div className="w-full text-white text-base text-left font-semibold leading-none">
                E-GMP INTERNATIONAL CORPORATION
              </div>
              <div>
                Your trusted gateway to responsible , result-driven recruitment
                in the Philippines
              </div>
            </div>
            <form className="flex justify-center items-center">
              <div className="flex w-96  p-10 bg-white rounded-lg flex-col justify-start items-start gap-10">
                <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                  Login to E-GMP
                </div>
                <div className="self-stretch justify-center items-start gap-6 inline-flex">
                  <div className="w-36 flex-col justify-start items-center gap-2 inline-flex">
                    <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                      <label className="text-stone-400 text-sm font-semibold leading-none">
                        I am a Job Seeker
                      </label>
                    </div>
                    <div className="self-stretch h-0.5 bg-stone-400" />
                  </div>
                  <div className="w-36 flex-col justify-start items-center gap-2 inline-flex">
                    <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                      <label className="text-gray-500 text-sm font-semibold leading-none">
                        I am an Employer
                      </label>
                    </div>
                    <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                  </div>
                </div>
                <div className="self-stretch h-40 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="justify-start items-center flex">
                        <label className="text-zinc-400 text-xs font-semibold leading-none">
                          Email Address
                        </label>
                      </div>
                    </div>
                    <input
                      className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                      type="text"
                      name="email"
                    />
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="justify-start items-center flex">
                        <label className="text-zinc-400 text-xs font-semibold leading-none">
                          Password
                        </label>
                      </div>
                    </div>
                    <input
                      className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                      type="password"
                    />
                    <div className="self-stretch text-right text-stone-400 text-xs font-semibold leading-none">
                      <button type="button">Forgot Password?</button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-stone-400 rounded justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch px-4 py-3 bg-stone-400 justify-center items-center rounded gap-2 flex">
                    <button
                      className="text-white text-xs font-semibold leading-none"
                      type="button"
                      // onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="self-stretch justify-center items-center inline-flex">
                  <div className="text-gray-500 text-xs font-normal leading-none">
                  {`  Don't have an account yet?`}
                  </div>
                  <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <button className="text-stone-400 text-xs font-semibold leading-none">
                      Sign Up
                    </button>
                  </div>
                  <div className="text-gray-500 text-xs font-normal leading-none">
                    now.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 z-10"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="background"
          width={1512}
          height={1008}
          className="absolute top-0 w-full h-screen object-cover"
        />
      </div>

      <div className="bg-gray-100 h-full">
        <div className="container mx-auto px-20">
          <div className="py-48 flex-col justify-center items-center gap-10 inline-flex">
            <div className="self-stretch h-11 flex-col justify-start items-center gap-1 flex">
              <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                With 20 years behind us, we have learned to keep things SIMPLE
              </div>
              <div className="w-16 h-2 bg-stone-400" />
            </div>
            <div className="self-stretch justify-center items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 p-6 bg-white rounded-2xl flex-col justify-start items-center gap-6 inline-flex">
                <div className="w-20 h-20 px-4 py-2.5 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center inline-flex">
                  <div className="w-12 h-14 relative">
                    <Image
                      src="/egmp/job-done.png"
                      alt="background"
                      width={47}
                      height={60}
                    />
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                    GETTING THE JOB DONE
                  </div>
                  <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-tight">
                    We need to have a good understanding about our client, their
                    business, their expectations from us and from there; we
                    develop our plan to meet that expectation.{" "}
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-6 bg-white rounded-2xl flex-col justify-start items-center gap-6 inline-flex">
                <div className="w-20 h-20 px-2.5 pt-3.5 pb-4 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center inline-flex">
                  <div className="w-16 h-12 relative">
                    <Image
                      src="/egmp/do-it-right.png"
                      alt="background"
                      width={60}
                      height={49}
                    />
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                    DOING IT RIGHT
                  </div>
                  <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-tight">
                    {`This simply means we employ the best practice in the
                    business, with the worker's welfare at the forefront in
                    everything we do.`}
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-6 bg-white rounded-2xl flex-col justify-start items-center gap-6 inline-flex">
                <div className="w-20 h-20 px-2.5 pt-4 pb-3.5 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center inline-flex">
                  <div className="w-16 h-12 relative">
                    <Image
                      src="/egmp/exceed.png"
                      alt="background"
                      width={60}
                      height={49}
                    />
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                    EXCEEDING EXPECTATIONS
                  </div>
                  <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-tight">
                    {`We narrow things down and pick your minds to understand your
                    expectation form us - and we'll try to exceed that
                    expectation.`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 h-full relative">
        <div className="container mx-auto relative px-20 pt-24">
          <div className="flex flex-col justify-start items-center gap-1 pb-10">
            <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
              E-GMP VIDEOS
            </div>
            <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
              View our Videos to get to know us Better
            </div>
            <div className="w-16 h-2 bg-stone-400" />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 sm:space-x-2 space-x-0 py-16 z-10 relative">
            <div className="aspect-w-16 aspect-h-9">
              <Image src="/video.png" alt="video1" width={636} height={382} />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src="/video2.png"
                alt="background"
                width={636}
                height={382}
              />
            </div>
          </div>
        </div>
        <div className="w-full bottom-0 flex justify-end items-end">
          <Image
            src="/bg-building.png"
            alt="background"
            width={1512}
            height={472}
            className="w-full bg-gradient-to-t from-gray-700 to-gray-400 object-cover absolute"
          />
        </div>
      </div>
      <div className="bg-gray-100 h-full" id="testimonials">
        <div className="container mx-auto px-20 py-24">
          <div className="justify-start items-center gap-10 inline-flex">
            <div className="bg-stone-400 rounded justify-center items-center flex">
              <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
                <div className="w-4 h-4 relative">
                  <Image
                    src="/jobseekers/icon-left.png"
                    alt="icon-left"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-10 inline-flex">
              <div className="self-stretch h-16 flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
                  CLIENT TESTIMONIALS
                </div>
                <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                  Discover why our clients love us!
                </div>
                <div className="w-16 h-2 bg-stone-400" />
              </div>
              <div className="h-96 flex-col justify-end items-center flex">
                <div className="self-stretch px-6 justify-start items-start inline-flex">
                  <div className="w-12 h-12 relative rotate-180">
                    <Image
                      src="/jobseekers/double-qoute.png"
                      alt="double-qoute"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div className="self-stretch h-96 flex-col justify-start items-center flex">
                  <div className="self-stretch h-96 p-10 bg-white rounded-2xl flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch h-36 flex-col justify-start items-center gap-1 flex">
                      <div className="w-24 h-24 justify-center items-center inline-flex">
                        <Image
                          src="/jobseekers/id-image.png"
                          alt="id-image"
                          width={720}
                          height={720}
                        />
                      </div>
                      <div className="self-stretch text-center text-stone-400 text-sm font-semibold leading-none">
                        Engr. Juan Dela Cruz
                      </div>
                      <div className="self-stretch text-center text-gray-500 text-xs font-normal leading-none">
                        CEO, J.J Building and Engineering Corporation
                      </div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2 inline-flex">
                      <div className="text-justify text-gray-500 text-xs font-normal leading-none">
                        5.0
                      </div>
                      <div className="w-4 h-4 relative" />
                      <div className="w-4 h-4 relative" />
                      <div className="w-4 h-4 relative" />
                      <div className="w-4 h-4 relative" />
                      <div className="w-4 h-4 relative" />
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Fermentum leo vel orci porta non pulvinar neque.
                      Turpis tincidunt id aliquet risus feugiat. Ut aliquam
                      purus sit amet luctus venenatis lectus. Condimentum vitae
                      sapien pellentesque habitant morbi. Risus pretium quam
                      vulputate dignissim suspendisse in est ante in. Id diam
                      vel quam elementum pulvinar. Pulvinar elementum integer
                      enim neque. Lobortis scelerisque fermentum dui faucibus in
                      ornare.
                    </div>
                  </div>
                  <div className="self-stretch px-6 justify-end items-start gap-2.5 inline-flex" />
                </div>
              </div>
            </div>
            <div className="bg-stone-400 rounded justify-center items-center flex">
              <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
                <div className="w-4 h-4 relative">
                  <Image
                    src="/jobseekers/icon-right.png"
                    alt="icon-right"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-full" id="branches">
        <div className="container mx-auto px-20 py-24">
          <div className="justify-center items-center gap-10 inline-flex">
            <div className="grow shrink basis-0 justify-end items-start gap-10 flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-10 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
                    E-GMP BRANCHES
                  </div>
                  <div className="self-stretch text-zinc-700 text-2xl font-semibold leading-loose">
                    Location and Contact Information
                  </div>
                  <div className="w-16 h-2 bg-stone-400" />
                </div>
                <div className="self-stretch justify-start items-start gap-10 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                      <div className="text-stone-400 text-sm font-semibold leading-none">
                        Makati Branch
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 bg-stone-400" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                      <div className="text-gray-500 text-sm font-semibold leading-none">
                        Cebu Branch
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                      <div className="text-gray-500 text-sm font-semibold leading-none">
                        Davao Branch
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="w-9 h-9 relative bg-gradient-to-b from-white to-orange-200 rounded-lg">
                    <div className="w-5 h-5 left-[7.20px] top-[7.20px] absolute">
                      <Image
                        src="/egmp/location-marker.png"
                        alt="location-marker"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      LOCATION
                    </div>
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                      3rd Floor, MJL Building, 1175 Chino Roces Avenue, Makati
                      City
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="w-9 h-9 relative bg-gradient-to-b from-white to-orange-200 rounded-lg">
                    <div className="w-5 h-5 left-[7.20px] top-[7.20px] absolute">
                      <Image
                        src="/egmp/mail.png"
                        alt="location-marker"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      email address
                    </div>
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                      inquire@egmpjobs.com
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="w-9 h-9 relative bg-gradient-to-b from-white to-orange-200 rounded-lg">
                    <div className="w-5 h-5 left-[7.20px] top-[7.20px] absolute">
                      <Image
                        src="/egmp/phone.png"
                        alt="location-marker"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      CONTACT NUMBER
                    </div>
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                      +63 927 802 1252
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 h-96 relative bg-white rounded-lg shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-full" id="contacts">
        <div className="container mx-auto px-20 py-24">
          <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="bg-white rounded-2xl justify-start items-center inline-flex">
              <div className="relative bg-white">
                <div className="left-[-227px] top-0 absolute bg-gradient-to-br from-stone-400 to-amber-500" />
              </div>
              <div className="grow shrink basis-0 p-6 flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-16 flex-col justify-start items-end gap-1 flex">
                  <div className="self-stretch text-zinc-700 text-2xl font-semibold leading-loose">
                    Send us a Message
                  </div>
                  <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                    {`Your search for the Philippines' leading recruitment
                    veterans ends here. To learn more about EGMP International
                    Corporation and how we empower people on both sides of the
                    recruitment table, start a conversation with our friendly
                    team today.`}
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="justify-start items-center flex">
                        <label className="text-zinc-400 text-xs font-semibold leading-none">
                          First Name
                        </label>
                        <div className="w-40 h-3 relative" />
                      </div>
                    </div>
                    <input className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex" />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="justify-start items-center flex">
                        <label className="text-zinc-400 text-xs font-semibold leading-none">
                          Last Name
                        </label>
                        <div className="w-40 h-3 relative" />
                      </div>
                    </div>
                    <input className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex" />
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="justify-start items-center flex">
                        <label className="text-zinc-400 text-xs font-semibold leading-none">
                          Email Address
                        </label>
                        <div className="w-40 h-3 relative" />
                      </div>
                    </div>
                    <input className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex" />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                      <div className="justify-start items-center flex">
                        <label className="text-zinc-400 text-xs font-semibold leading-none">
                          Mobile No.
                        </label>
                        <div className="w-40 h-3 relative" />
                      </div>
                    </div>
                    <input className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex" />
                  </div>
                </div>
                <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center flex">
                      <label className="text-zinc-400 text-xs font-semibold leading-none">
                        Subject
                      </label>
                    </div>
                  </div>
                  <input className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex" />
                </div>
                <div className="self-stretch h-48 flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center flex">
                      <label className="text-zinc-400 text-xs font-semibold leading-none">
                        Message
                      </label>
                    </div>
                  </div>
                  <textarea className="self-stretch grow shrink basis-0 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex" />
                </div>
                <div className="w-72 h-20 relative">
                  <div className="w-72 h-20 left-0 top-0 absolute bg-stone-50 rounded-sm shadow border border-neutral-300" />
                  <div className="w-16 h-16 pl-1 pr-1.5 pt-1.5 pb-px left-[229px] top-[7px] absolute flex-col justify-end items-center gap-2 inline-flex">
                    <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                    <div className="w-16 h-5 relative flex-col justify-start items-start flex">
                      <div className="w-6 h-2.5 relative" />
                      <div className="w-6 h-2.5 relative" />
                    </div>
                  </div>
                  <div className="w-32 h-7 left-[13px] top-[23px] absolute">
                    <div className="w-6 h-6 left-[2px] top-[2px] absolute bg-white" />
                  </div>
                </div>
                <div className="self-stretch h-10 flex-col justify-start items-end gap-2.5 flex">
                  <div className="bg-stone-400 rounded justify-center items-center inline-flex">
                    <button className="self-stretch px-4 py-3 bg-stone-400 rounded justify-center items-center gap-2 flex text-white text-xs font-semibold leading-none">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
