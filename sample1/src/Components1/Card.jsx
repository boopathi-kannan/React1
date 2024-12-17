import { Check, MessageCircleWarning, Plus } from 'lucide-react'
import { useRef, useState } from 'react'
import { addProject } from '../Service/api'
import { Toaster, toast } from 'sonner'


const Card = ({fetchProject}) => {
  const titleref = useRef(null)
  const Descriptionref = useRef(null)
  const [visible, setVisible] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic form validation to ensure fields are not empty
    if (!titleref.current.value || !Descriptionref.current.value) {
      toast('Please fill out all fields', {
        className: 'bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleWarning />,
      })
      return
    }

    const projectData = {
      title: titleref.current.value,
      Description: Descriptionref.current.value
    }

    try {
      const response = await addProject(projectData)
      if (response.status === 201) {
        toast('Project added!', {
          className: 'bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Check />,
        })

        // Clear input fields after successful submission
        titleref.current.value = ''
        Descriptionref.current.value = ' '
        fetchProject() // Refresh project data

        setVisible(false) // Close form after submission
      }
    } catch (error) {
      console.error(error)
      toast('Error adding project', {
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleWarning />,
      })
    }
  }

  return (
    <>
      {/* Button to trigger form visibility */}
      <button 
        onClick={() => setVisible(true)} 
        className='h-12 w-32 flex justify-center text-[#efebeb] p-4 items-center bg-[#343434] text-lg rounded-lg fixed z-10 bottom-12 right-12 hover:border-2 border-[#343434] hover:bg-[#efebeb] font-bold hover:text-[#343434]'
      >
        Add Project
        <Plus className='ml-2' />
      </button>

      {/* Form for adding project */}
      {visible && (
        <div className="h-screen w-screen flex justify-center items-center bg-[#efebeb]">
          <div className="h-[50%] w-[35%] flex justify-center items-center bg-[#f8f8f8] rounded-md shadow-md">
            <form className='h-[90%] w-[80%] flex flex-col' onSubmit={handleSubmit}>
              <div className='h-full w-full bg-[#343434] flex flex-col justify-center items-center rounded-md shadow-md'>
                <div className='h-[70%] w-[80%]'>
                  <input 
                    type="text" 
                    ref={titleref} 
                    className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' 
                    placeholder='Title' 
                  />
                  <input 
                    type="text" 
                    ref={Descriptionref} 
                    className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' 
                    placeholder='Description' 
                  />
                  <div className='h-[20%] w-full flex justify-center items-center mt-7'>
                    <button 
                      type='submit' 
                      className='h-full w-1/2 bg-[#f8f8f8] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-[#b3afaf] hover:text-black'
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Toaster richColors />
    </>
  )
}

export default Card
