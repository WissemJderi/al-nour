import { coursesData } from "../data/courses";
import CourseCard from "./items/CourseCard";

const Courses = () => {
  const courseList = coursesData.map((course) => {
    return (
      <CourseCard
        image={course.image}
        title={course.title}
        description={course.description}
      />
    );
  });
  return (
    <div
      id="courses"
      className="font-tajawal bg-gray-50 py-16 font-medium flex flex-col gap-4 md:px-40 px-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Courses
      </h1>
      <ul className="grid md:grid-cols-2 gap-6">{courseList}</ul>
    </div>
  );
};

export default Courses;
