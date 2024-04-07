import { useNavigate } from "react-router-dom"


export default function CourseCard({img , title, description}){

  const navigate = useNavigate();

  function handleClick(){
      navigate('/videoPlayer')
  }

    return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={img} alt={title} className="w-full h-56 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-700">{description}</p>
              <button onClick={handleClick} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Enroll Now
              </button>
            </div>
          </div>
    )
}