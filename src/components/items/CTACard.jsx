const CTACard = ({ title, description, buttonTxt, to }) => {
  return (
    <div className="relative h-96 md:h-128 lg:h-160 overflow-hidden">
      <img
        src="/cta-image.webp"
        alt="CTA background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 items-center justify-center h-full text-center text-white px-4 md:px-8 font-tajawal">
        <section>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-2 text-accent">
            {title}
          </h2>
          <p className="mb-4 max-w-sm md:max-w-md text-sm md:text-lg text-neutral-light-gray">
            {description}
          </p>
        </section>
        <a
          href={to}
          className="bg-accent hover:bg-hover-accent cursor-pointer text-white font-medium py-2 px-4 md:px-6 rounded-lg shadow-md transition"
        >
          {buttonTxt}
        </a>
      </div>
    </div>
  );
};

export default CTACard;
