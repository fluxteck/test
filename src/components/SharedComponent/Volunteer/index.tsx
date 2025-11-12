"use client";

import DonationFormContext from "@/app/context/donationContext";
import { useContext } from "react";

const Volunteer = () => {
  const donationInfo = useContext(DonationFormContext);
  return (
    <section className="lg:py-28 py-16 bg-[url('https://res.cloudinary.com/do8ljuuo1/image/upload/v1762710864/cb5_ocjyp2.webp')] bg-no-repeat bg-cover overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-white mb-6">
            Become a volunteer
          </h2>
          <p className="text-base text-white lg:max-w-60% mx-auto mb-6">
            Join our mission to make a positive impact! As a volunteer, you’ll
            work directly with communities, bring hope, and help create lasting
            change.
          </p>
          <div className="flex justify-center ">
            {/* <button onClick={() => donationInfo?.setIsDonationOpen(true)} className="text-white rounded-md bg-linear-to-r text-sm font-semibold from-error to-warning px-7 py-4 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error">
                            Donate now
                        </button> */}
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://wa.me/917678017569?text=Hi%20Dilkhush%20Foundation%2C%20I%20want%20to%20donate%20and%20know%20more%20about%20your%20work.",
                  "_blank"
                );
              }}
              className="text-white rounded-md bg-linear-to-r text-sm font-semibold from-error to-warning px-7 py-4 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error"
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
