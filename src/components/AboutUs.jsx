const AboutUs = () => {
  const features = [
    {
      title: "Accessible",
      description:
        "Learn from anywhere in the world with flexible online classes.",
    },
    {
      title: "Authentic",
      description:
        "Guided by trusted teachers using authentic Islamic methodology.",
    },
    {
      title: "Excellence",
      description: "Focused on quality teaching with sincerity and dedication.",
    },
  ];
  return (
    <section className="bg-gray-50 py-16 font-tajawal" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About AL-NOUR Quran Institute
        </h2>
        <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          AL-NOUR is an online Qur’an institute dedicated to making Qur’an
          learning accessible to everyone. Our mission is to teach with
          excellence, sincerity, and authentic Islamic methodology from trusted
          teachers.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-accent mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-800">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
