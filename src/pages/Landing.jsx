import React from "react";
import FooterBand from "@/components/FooterBand";

const OFFER_LINK = "https://1f72626hkdl6k9vc2cph7kdx7r.hop.clickbank.net/?&traffic_source=meta_ads&traffic_type=social&campaign=afai0001&creative=0001&ad=0001&extclid=0001";
const HERO_IMAGE = "https://base44.app/api/apps/6ac3caa0249e56da2658eace/files/mp/public/6ac3caa0249e56da2658eace/b537265e7_landing-image.png";

function CTAButton() {
  return (
    <a
      href={OFFER_LINK}
      className="flex items-center justify-center md:w-[584px] md:h-[62px] w-[calc(100vw_-_56px)] h-[54px] mx-auto bg-[#2C97FF] rounded-[10px] border-[3px] border-[rgba(1,70,149,0.81)] shadow-[10px_10px_5px_0_rgba(104,99,99,0.63)] hover:shadow-[10px_10px_5px_0_rgba(104,99,99,0.63)] font-['Lato',sans-serif] font-bold text-white no-underline text-center cursor-pointer md:text-[34px] text-[24px]"
    >
      Watch The Short Video Now
    </a>
  );
}

export default function Landing() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HEADLINE */}
      <h1 className="font-['Roboto',sans-serif] font-bold text-black text-center md:text-[48px] md:leading-[60px] text-[26px] leading-[35px] flex flex-col items-center gap-[12px] mt-[20px] px-[28px] md:px-0">
        <span className="block">Texas Electrician Reveals: The One Afternoon Garage Power Hack For High Power Bills</span>
        <span className="block">
          <span className="text-[#0061FF]">(Watch Video)</span>
        </span>
      </h1>

      {/* HERO MEDIA */}
      <div className="w-full flex flex-col items-center md:mt-[8px] mt-[8px]">
        <a
          href={OFFER_LINK}
          className="block relative md:w-[818px] md:h-[460px] w-screen h-[56.25vw] overflow-hidden"
        >
          <img
            src={HERO_IMAGE}
            alt="Texas Electrician reveals the one afternoon garage power hack for high power bills"
            className="w-full h-full object-cover block"
          />
        </a>
        <p className="font-['Roboto',sans-serif] font-normal text-[14px] text-black text-center mt-[8px]">
          Make sure your sound is turned on and wait a few seconds for the video to load.
        </p>
      </div>

      {/* PRIMARY CTA */}
      <div className="mt-[20px] w-full flex justify-center">
        <CTAButton />
      </div>

      {/* BODY COPY */}
      <div className="md:max-w-[788px] w-full font-['Roboto',sans-serif] font-normal text-black text-justify md:text-[22px] md:leading-[24px] text-[22px] leading-[25px] px-[28px] md:px-0">
        <p className="md:my-[44px] my-[40px] mt-[28px]">
          A Texas electrician dug up a forgotten design now called the{" "}
          <span className="font-bold">"Ancient Energy Blueprint"</span>. It's a simple build
          homeowners put together at home using step-by-step plans, aimed at generating usable
          electricity on demand. The goal is cutting reliance on the power company and chipping away
          at that monthly bill.
        </p>
        <p className="md:my-[44px] my-[40px]">
          Thousands of homeowners tired of rising power costs are already following these plans in
          their own garages and workshops. They're building the device piece by piece, using parts
          most hardware stores carry nearby. Word has spread quickly among folks hunting real
          independence from the grid.
        </p>
        <p className="md:my-[44px] my-[40px]">
          A short video walks through where this old design came from and how it works. It shows the
          exact build in plain terms, no technical background needed.{" "}
          <span className="font-bold">Click the button below to watch it</span> before you decide
          what your own garage could do.
        </p>
      </div>

      {/* SECONDARY CTA */}
      <div className="mt-[22px] w-full flex justify-center">
        <CTAButton />
      </div>

      <FooterBand />
    </div>
  );
}