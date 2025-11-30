const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Ali",
      role: "Student, Beginner Level",
      feedback:
        "AL-NOUR has helped me start my Qur’an journey with confidence. The teachers are patient and supportive.",
      image: "/sheikh.svg",
    },
    {
      name: "Fatimah Zahra",
      role: "Parent of Student",
      feedback:
        "My son enjoys every class. The institute makes learning Qur’an engaging and accessible from home.",
      image: "/woman.svg",
    },
    {
      name: "Omar Khalid",
      role: "Advanced Student",
      feedback:
        "I was able to complete my Hifz with guidance from AL-NOUR. Their dedication is unmatched.",
      image: "/sheikh.svg",
    },
  ];
  return (
    <div>
      {" "}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from students and parents who have experienced the journey of
            Qur’an learning with AL-NOUR.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-accent mb-3 font-semibold">
                  {t.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{t.feedback}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
