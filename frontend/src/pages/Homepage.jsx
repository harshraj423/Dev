import { useNavigate } from  "react-router-dom"
import NavBar from "./NavBar"
import CourseCard from "../components/courseCard"

export default function Homepage(){
    return (<div>
<div className="bg-gray-200 min-h-screen py-3 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
       <CourseCard className="col-span-1" title="course title" img="card2.jpg" description="Logic and numeric general calculations"></CourseCard>
      </div>
    </div>
    </div>)
}