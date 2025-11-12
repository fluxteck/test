import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="lg:py-28 py-16 dark:bg-dark">
        {/* Banner Text  */}

        <section className="text-center md:py-24 py-16 md:pt-44 pt-36 dark:bg-darkmode">
          {/* Heading */}
          <h2 className="dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text">
            We’d Love to Hear From You
          </h2>

          {/* Description */}
          <p className="md:text-xl text-lg text-grey dark:text-white/50 font-normal max-w-[45rem] w-full mx-auto my-7 sm:px-0 px-4">
            If you wish to donate, volunteer, or simply learn more about our
            initiatives, we’re here to connect. Every message, every gesture,
            every helping hand makes a difference.
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
              Contact Us
            </span>
          </div>
        </section>
      </section>

      <section className="dark:bg-dark pt-8 lg:pb-24 pb-16">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-grey dark:bg-midnight_text w-3.75 h-3.75 flex items-center justify-center rounded-full p-[15px]">
                <i className="bg-[url('/images/contact-page/email.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Email us
                  </span>
                  <p className="text-DeepOcean font-normal max-w-80 pt-3 pb-7 dark:text-white/50 text-base">
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white"
                  >
                    Leave a message
                    <svg
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="#2CDD9B"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-midnight_text dark:group-hover:fill-white"
                    >
                      <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-grey dark:bg-midnight_text w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className="bg-[url('/images/contact-page/career.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Careers
                  </span>
                  <p className="text-DeepOcean font-normal max-w-80 pt-3 pb-7 dark:text-white/50 text-base">
                    We're always looking for talented individuals to join our
                    team.
                  </p>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white"
                  >
                    Send an application
                    <svg
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="#2CDD9B"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-midnight_text dark:group-hover:fill-white"
                    >
                      <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-32 pt-11 md:pb-28 pb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9026326221387!2d90.3918818753102!3d23.750903394634736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0876f5f6b%3A0x8fae6d5e2f4b5e0!2sDILKHUSH%20FOUNDATION!5e0!3m2!1sen!2sbd!4v1695765254865!5m2!1sen!2sbd"
              width="1114"
              height="477"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-border dark:border-dark_border"></div>
      </section>
    </>
  );
};

export default ContactInfo;
