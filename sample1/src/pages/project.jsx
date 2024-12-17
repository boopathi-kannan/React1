import { useEffect, useState } from "react"
import Card from "../Components1/card"
import { getProject } from "../Service/api"
import { toast, Toaster } from "sonner"
import Slice from "../Components1/Slice"
import {MessageCircleWarning} from 'lucide-react'

const Project = () => {
const [projectData, setProjectData] = useState(null)
const fetchProject = async () => {
    try {
      const { data } = await getProject()
      setProjectData(data)
    } catch (error) {
        console.log(error)
        toast('Error fetching projects', {
          className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <MessageCircleWarning />,
        });
    }
}


console.log(projectData)
useEffect(() => {
  fetchProject()
}, [])

if(!projectData || projectData.length === 0) {
  return (
    <div className="w-full h-[10%] flex justify-center items-center">
      <Card/>
    </div>
  )
}

  return (
    <>
      <div className="h-screen w-screen bg-[#efebeb] flex justify-center items-center">
        <div className="h-full w-[90%] flex flex-row flex-wrap justify-center items-center gap-8">
          <Card fetchProject = { fetchProject }/>
          {
            projectData.map((data, index) => (
                <Slice title={ data.title } Description={ data. Description }  key={ index } id={ data.id } fetchProject = { fetchProject }/>
              ))}
        </div>
      </div>
      <Toaster richColors />
    </>
  )
}

export default Project