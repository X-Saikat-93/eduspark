import AddCourse from "./_components/AddCourse";
import UserCourseList from "./_components/UserCourseList";
export const runtime = "edge";


const page = () => {
  return (
    <div>
      <AddCourse />
      <UserCourseList />
    </div>
  );
};

export default page;
