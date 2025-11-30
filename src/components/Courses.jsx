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
      className="font-tajawal font-medium flex flex-col gap-4 md:px-40 px-10"
    >
      <h1 className="text-4xl">Our Courses</h1>
      <ul className="grid md:grid-cols-2 gap-6">{courseList}</ul>
    </div>
  );
};

export default Courses;
