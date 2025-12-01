import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Teachers = () => {
  const teachers = [
    {
      name: "Sheikh Abdullah Al-Hafiz",
      image: "/sheikh.svg",
      description:
        "Specialist in Tajweed and Qur’an memorization with 15 years of teaching experience.",
    },
    {
      name: "Ustadh Karim Al-Qari",
      image: "/sheikh.svg",
      description:
        "Renowned reciter who guides students in proper Qur’anic pronunciation and rhythm.",
    },
    {
      name: "Sheikh Musa Al-Madani",
      image: "/sheikh.svg",
      description:
        "Focuses on Qur’anic tafsir, helping students understand meanings and context.",
    },
    {
      name: "Ustadhah Fatimah Al-Hafidhah",
      image: "/sheikh.svg",
      description:
        "Dedicated to teaching young learners Qur’an memorization and Islamic etiquette.",
    },
    {
      name: "Sheikh Ibrahim Al-Qassim",
      image: "/sheikh.svg",
      description:
        "Expert in classical Arabic and Qur’an sciences, mentoring advanced students.",
    },
  ];
  return (
    <div
      id="teachers"
      className="font-tajawal   font-medium flex flex-col gap-8 w-full max-w-4xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Teachers
      </h1>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.name}>
              <div className="bg-white shadow-md overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-52 object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-600">{teacher.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Teachers;
