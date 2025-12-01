import { coursesData } from "../data/courses";
import CourseCard from "./items/CourseCard";

const Courses = () => {
  const courseList = coursesData.map((course) => {
    return (
      <CourseCard
        key={course.title}
        image={course.image}
        title={course.title}
        description={course.description}
      />
    );
  });
  return (
    <section
      id="courses"
      className="font-tajawal bg-gray-50 py-16 font-medium flex flex-col gap-4 px-10 lg:px-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Courses
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {coursesData.map(({ title, image, description }) => (
          <CourseCard
            key={title}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Courses;
