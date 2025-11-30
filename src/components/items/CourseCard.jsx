const CourseCard = ({ image, title, description }) => {
  return (
    <section className="flex flex-col gap-6 bg-[#DFE0D6]">
      <img
        src={image}
        alt="Mosque"
        className="w-full h-75 object-cover"
        loading="lazy"
      />
      <div className="flex flex-col justify-between gap-2 px-8 py-4">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-lg text-neutral-dark-gray">{description}</p>
        </div>
        <p className="text-accent hover:text-hover-accent font-semibold underline cursor-pointer">
          See More
        </p>
      </div>
    </section>
  );
};

export default CourseCard;
