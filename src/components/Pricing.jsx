const Pricing = () => {
  const plans = [
    {
      name: "Beginner",
      price: "$29/mo",
      description: "For new students starting their Qur’an journey.",
      features: [
        "2 classes per week",
        "Basic Tajweed rules",
        "Access to recordings",
      ],
    },
    {
      name: "Intermediate",
      price: "$49/mo",
      description: "For students with some memorization experience.",
      features: [
        "4 classes per week",
        "Advanced Tajweed practice",
        "Monthly progress reports",
      ],
    },
    {
      name: "Advanced",
      price: "$79/mo",
      description: "For dedicated students aiming for full Hifz.",
      features: [
        "Daily classes",
        "One-on-one mentorship",
        "Certification upon completion",
      ],
    },
  ];
  return (
    <section id="pricing" className="bg-gray-50 py-16 font-tajawal">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Pricing Plans
        </h2>

        <p className="text-gray-600 mb-12">
          Choose the plan that best fits your Qur’an learning journey.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-accent mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="text-gray-700 flex-1 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-accent hover:bg-hover-accent cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
