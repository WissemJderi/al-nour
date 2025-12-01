import CTACard from "./items/CTACard";

const CTA = () => {
  const ctaData = [
    {
      title: "Start Learning",
      description:
        "Begin your Qur’an journey today with certified, patient teachers guiding you step by step. Perfect for beginners, kids, and adults.",
      buttonTxt: "Start Now",
      to: "#contact",
    },
    {
      title: "View Courses",
      description:
        "Explore all our programs — from recitation and tajwīd to memorization and Arabic. Find the right course for your goals.",
      buttonTxt: "Browse Courses",
      to: "#courses",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <ul className="flex flex-col md:flex-row justify-around gap-6 mx-6 md:mx-20 lg:mx-30 my-10 md:my-20">
        {ctaData.map(({ title, description, buttonTxt, to }) => (
          <CTACard
            key={title}
            title={title}
            description={description}
            buttonTxt={buttonTxt}
            to={to}
          />
        ))}
      </ul>
    </section>
  );
};

export default CTA;
