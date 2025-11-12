import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="">
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">
              <div className="col-span-3">
                <h2 className="text-white max-w-52 text-[40px] leading-tight font-bold">
                  BIHARSHARIF OFFICE
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-white/50 font-normal max-w-64 leading-10">
                  NALANDA 803101, BIHAR, INDIA
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:dilkhushfoundation@gmail.com"
                  className="sm:text-2xl text-xl text-white font-medium underline"
                >
                  dilkhushfoundation@gmail.com
                </Link>
                <Link
                  href="tel:7678017569"
                  className="sm:text-2xl text-white/80 text-xl text-IceBlue flex items-center gap-2 hover:text-white w-fit"
                >
                  <span className="text-white/40">Call</span>7678017569
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
