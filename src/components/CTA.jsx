import CTACard from "./items/CTACard";

const CTA = () => {
  const ctaData = [
    {
      title: "Start Learning",
      description:
        "Begin your Qur’an journey today with certified, patient teachers guiding you step by step. Perfect for beginners, kids, and adults.",
      buttonTxt: "Start Now",
      to: "contact",
    },
    {
      title: "View Courses",
      description:
        "Explore all our programs — from recitation and tajwīd to memorization and Arabic. Find the right course for your goals.",
      buttonTxt: "Browse Courses",
      to: "courses",
    },
  ];

  const ctaCards = ctaData.map((card, key) => {
    return (
      <CTACard
        title={card.title}
        description={card.description}
        buttonTxt={card.buttonTxt}
        key={key}
        to={card.to}
      />
    );
  });
  return (
    <div>
      <ul className="flex md:flex-row flex-col justify-around md:mx-30 mx-10 gap-6 md:my-20 my-10">
        {ctaCards}
      </ul>
    </div>
  );
};

export default CTA;
