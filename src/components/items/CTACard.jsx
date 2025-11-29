const CTACard = ({ title, description, buttonTxt, key }) => {
  return (
    <div className="relative h-92 overflow-hidden" key={key}>
      <img
        src="/cta-image.webp"
        alt="CTA background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full text-center text-white px-6 font-tajawal">
        <section>
          <h2 className="text-4xl font-medium mb-2 text-accent">{title}</h2>
          <p className="mb-4 max-w-md text-neutral-light-gray text-lg">
            {description}
          </p>
        </section>
        <button className="bg-accent hover:bg-hover-accent cursor-pointer text-white font-medium py-2 px-6 rounded-lg shadow-md transition">
          {buttonTxt}
        </button>
      </div>
    </div>
  );
};

export default CTACard;
