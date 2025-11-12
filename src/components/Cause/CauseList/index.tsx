import Link from "next/link";
import { CauseData } from "@/app/api/data";
import Image from "next/image";

const CauseList = () => {
  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      {/* Banner Text  */}

      <section className="text-center md:py-24 py-16 md:pt-44 pt-36 dark:bg-darkmode">
        {/* Heading */}
        <h2 className="dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text">
          About Us
        </h2>

        {/* Description */}
        <p className="md:text-xl text-lg text-grey dark:text-white/50 font-normal max-w-[45rem] w-full mx-auto my-7 sm:px-0 px-4">
          At Dilkhush Foundation, we believe that every act of kindness creates
          ripples of hope. Our mission is to uplift underprivileged communities
          by providing education, healthcare, and essential support, helping
          them lead lives of dignity and purpose.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-baseline flex-wrap justify-center my-4 mx-0">
          <p
            className="no-underline flex items-center  dark:text-white/70 font-normal 
                     md:text-xl text-lg hover:underline 
                     after:relative after:content-[''] after:ml-2.5 after:mr-3 after:inline-block 
                     after:top-[1px] after:w-2 after:h-2 after:border-r-2 after:border-b-2 
                     after:border-midnight_text dark:after:border-white after:-rotate-45"
          >
            Home
          </p>
          <span className="dark:text-white text-midnight_text md:text-xl text-lg mx-2.5">
            About Us
          </span>
        </div>
      </section>

      {/* Section Title */}

      <section className="bg-section" id="services">
        <div className="container mx-auto max-w-6xl px-4">
          <h2
            className="sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Together, we create opportunities that change lives
          </h2>

          {/* Services Grid */}
          <div className="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-offset="300"
              className="col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode"
            >
              <Image
                src="/images/icons/restaurant.png"
                alt="Service Box"
                width={40}
                height={40}
                className="w-10 h-10 bg-no-repeat inline-block bg-contain"
                loading="lazy"
              />
              <h3 className="mx-auto text-2xl font-bold">
                Food & Nutrition Support
              </h3>
              <p className="dark:text-white/50 text-base font-normal">
                We provide nutritious meals and ration support to families in
                need, ensuring that no one sleeps hungry and every child gets a
                healthy start to life.
              </p>
              {/* <a
                href="#"
                className="hover:text-blue-700 text-lg font-medium text-primary group flex items-center"
              >
                Join Us Today
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="m22.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                    ></path>
                  </svg>
                </span>
              </a> */}
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-offset="300"
              className="col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode"
            >
              <Image
                src="/images/icons/training.png"
                alt="Service Box"
                width={40}
                height={40}
                className="w-10 h-10 bg-no-repeat inline-block bg-contain"
                loading="lazy"
              />
              <h3 className="mx-auto text-2xl font-bold">
                Education & Skill Development
              </h3>
              <p className="dark:text-white/50 text-base font-normal">
                From school supplies to digital literacy and vocational training
                we’re helping children and youth build brighter, self-reliant
                futures.
              </p>
              {/* <a
                href="#"
                className="hover:text-blue-700 text-lg font-medium text-primary group flex items-center"
              >
                Start Contributing
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="m22.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                    ></path>
                  </svg>
                </span>
              </a> */}
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-offset="300"
              className="col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode"
            >
              <Image
                src="/images/icons/healthcare.png"
                alt="Service Box"
                width={40}
                height={40}
                className="w-10 h-10 bg-no-repeat inline-block bg-contain"
                loading="lazy"
              />
              <h3 className="mx-auto text-2xl font-bold">
                Healthcare & Wellbeing
              </h3>
              <p className="dark:text-white/50 text-base font-normal">
                Through medical camps, health awareness drives, and emergency
                aid, we make quality healthcare accessible for those who need it
                most.
              </p>
              {/* <a
                href="#"
                className="hover:text-blue-700 text-lg font-medium text-primary group flex items-center"
              >
                Support This Cause
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="m22.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                    ></path>
                  </svg>
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl leading-tight">
              We believe change begins with compassion
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Dilkhush Foundation works as a collective of people determined to
              bring lasting social change. <br /> Our volunteers and donors are
              united by one purpose, to restore hope, dignity, and opportunity
              in every life we touch.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}

      <div id="services">
        <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="col-span-6 flex justify-center">
              <div className="flex flex-col align-middle justify-center p-10">
                <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                  Our Vision
                </p>
                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                  To build a compassionate and inclusive society where everyone
                  regardless of background has access to basic human needs,
                  equal opportunities, and the dignity they deserve.
                </h4>
                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                  We envision a world where:
                </h4>
              </div>
            </div>

            <div className="lg:col-span-1"></div>

            {/* Right Section */}
            <div className="col-span-6 lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
                {/* Service Card */}
                {[
                  {
                    // src: "/images/icons/education.png",
                    title:
                      "No one sleeps hungry or suffers due to lack of resources.",
                  },
                  {
                    title:
                      "Every child receives education, care, and a fair chance at a better future.",
                  },
                  {
                    title:
                      "Communities rise above poverty with self-respect and independence.",
                  },
                  {
                    title:
                      "Social service becomes a shared responsibility and a way of life.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white text-black rounded-3xl lg:-ml-32 p-6 shadow-xl"
                  >
                    {/* <Image
                      src={item.src}
                      alt={item.title}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="mb-5"
                    /> */}
                    <h4 className="text-lg font-normal text-bluegray my-2">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Out Mission Section */}

      <div id="services">
        <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="col-span-6 flex justify-center">
              <div className="flex flex-col align-middle justify-center p-10">
                <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                  Our Mission
                </p>
                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                  At Dilkhush Foundation, our mission is to serve humanity by
                  supporting the poor, underprivileged, and marginalized through
                  sustainable and impactful programs.
                </h4>
                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                  We are committed to:
                </h4>
              </div>
            </div>

            <div className="lg:col-span-1"></div>

            {/* Right Section */}
            <div className="col-span-6 lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
                {/* Service Card */}
                {[
                  {
                    title:
                      "Providing food, clothing, education, and healthcare to those in need.",
                  },
                  {
                    title:
                      "Empowering individuals through skill development and awareness programs.",
                  },
                  {
                    title:
                      "Empowering individuals through skill development and awareness programs.",
                  },
                  {
                    title:
                      "Encouraging youth and volunteers to lead with compassion and service.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white text-black rounded-3xl lg:-ml-32 p-6 shadow-xl"
                  >
                    {/* <Image
                      src={item.src}
                      alt={item.title}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="mb-5"
                    /> */}
                    <h4 className="text-lg font-normal text-bluegray my-2">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our  */}

      <div>
        <div>
          <section>
            <div className="p-4">
              <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-[#2cdd9b] rounded-2xl">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                      <div className="max-w-md xl:max-w-none">
                        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">
                          Learn. Volunteer. Make a Difference.
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Every effort counts, whether you contribute your time,
                          skills, or resources. Together, we can build a
                          compassionate and empowered society.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CauseList;
