import React from "react";
const Hero = () => {
  return (
    <React.Fragment>
      <section className="relative mx-auto md:my-30 max-w-5xl h-[500px] overflow-hidden">
        <img
          src="/hero-mosque.webp"
          alt="Mosque"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Quran Verse Text */}
        <div className="absolute inset-0 flex items-center justify-center md:px-30 px-10 text-center font-tajawal ">
          <h2 className="text-white text-2xl md:text-4xl font-semibold flex flex-col gap-6">
            وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
            <br />
            <span className="text-lg md:text-2xl text-gray-200 mt-2 block">
              "And We have certainly made the Quran easy for remembrance, so is
              there any who will remember?" (Quran 54:17)
            </span>
          </h2>
        </div>
      </section>
      <div className="my-10 font-medium text-center flex flex-col gap-6">
        <h1 className="text-4xl">
          Learn the Qur’an with certified teachers — anytime, anywhere.
        </h1>
        <p className="text-lg text-neutral-dark-gray">
          An online Islamic education center offering Qur’an recitation, tajwīd,
          memorization, and Arabic classes for all ages.
        </p>
      </div>
      <hr className="text-neutral-dark-gray/20 mx-10 md:mx-120" />
    </React.Fragment>
  );
};

export default Hero;
