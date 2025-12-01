const CourseCard = ({ image, title, description }) => {
  return (
    <section
      key={title}
      className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 bg-[#DFE0D6] p-4 md:p-8"
    >
      <img
        src={image}
        alt="Mosque"
        className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg"
        loading="lazy"
      />
      <div className="flex flex-col justify-between gap-4 md:w-1/2">
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            {title}
          </h1>
          <p className="text-base md:text-lg text-neutral-dark-gray mt-2">
            {description}
          </p>
        </div>
        <p className="text-accent hover:text-hover-accent font-semibold underline cursor-pointer mt-4 md:mt-0">
          See More
        </p>
      </div>
    </section>
  );
};

export default CourseCard;
