"use client";

import DonationFormContext from "@/app/context/donationContext";
import Link from "next/link";
import { useContext } from "react";

const UrgentDonation = () => {
  const donationInfo = useContext(DonationFormContext);
  return (
    <section className=" bg-[url('https://res.cloudinary.com/do8ljuuo1/image/upload/v1762710864/cb4_gm2byr.webp')] bg-cover sm:py-52 lg:py-28 py-16 bg-no-repeat">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div
          className="bg-white dark:bg-dark max-w-29 w-full px-10 py-14 rounded-lg text-center mx-auto"
          data-aos="fade-right"
        >
          <h3 className="sm:text-2xl text-lg font-bold mb-5">
            Every child deserves a chance to learn.
          </h3>
          <p className="text-muted dark:text-white/60 sm:text-base text-sm mb-7">
            Your support can help provide books, school supplies, and quality
            education for underprivileged children. Let’s build their future
            together.
          </p>
          {/* <button
            onClick={() => donationInfo?.setIsDonationOpen(true)}
            className="bg-linear-to-r from-primary to-secondary px-7 border text-sm font-semibold text-white border-transparent py-4 rounded-sm hover:from-transparent hover:to-transparent  hover:border-primary hover:text-primary"
          >
            Urgent donate
          </button> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://wa.me/917678017569?text=Hi%20Dilkhush%20Foundation%2C%20I%20want%20to%20donate%20and%20know%20more%20about%20your%20work.",
                "_blank"
              );
            }}
            className="bg-linear-to-r from-primary to-secondary px-7 border text-sm font-semibold text-white border-transparent py-4 rounded-sm hover:from-transparent hover:to-transparent  hover:border-primary hover:text-primary"
          >
            Sponsor Education
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrgentDonation;
