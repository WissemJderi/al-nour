import React from "react";
const Hero = () => {
  return (
    <React.Fragment>
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden md:my-20">
        <img
          src="/hero-mosque.webp"
          alt="Mosque"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 text-center font-tajawal">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold flex flex-col gap-4 md:gap-6 leading-relaxed">
            وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
            <br />
            <span className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-200 mt-2 block">
              "And We have certainly made the Quran easy for remembrance, so is
              there any who will remember?" (Quran 54:17)
            </span>
          </h2>
        </div>
      </section>
      <div className="bg-gray-50 py-12 md:py-16 font-medium text-center flex flex-col gap-6 px-6 md:px-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Learn the Qur’an with certified teachers — anytime, anywhere.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-dark-gray max-w-2xl mx-auto">
          An online Islamic education center offering Qur’an recitation, tajwīd,
          memorization, and Arabic classes for all ages.
        </p>
      </div>
      <hr className="text-neutral-dark-gray/20 mx-6 md:mx-20 lg:mx-40" />
    </React.Fragment>
  );
};

export default Hero;
