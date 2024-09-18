import React from 'react'
import {User2} from 'lucide-react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="h-[12%] flex flex-row p-4 w-full bg-slate-500">
          <div className="p-4 w-1/2 ">
            <h1 className="text-white font-bold font-sans text-2xl ">BOOPATHI</h1>

          </div>
          <div className="flex flex-row justify-end w-1/2">
              <h2 className="rounded-md border-spacing-3 border-black border-2 p-2 text-center m-3 h-10 bg-black  text-white">
               <Link to={'/'}>
                <p>Profile</p>
                </Link>
              </h2>
              <h2 className="rounded-md border-spacing-3 border-black border-2 p-2 text-center h-10 m-3">
              <Link to={'/project'}>
                Profile
                </Link>
              </h2>
              <h2 className="rounded-md border-spacing-3 border-black border-2 p-2 text-center h-10 m-3">
              <Link to={'/contact'}>
                Profile
                </Link>
              </h2>
        
              
              <User2 className="h-10 w-10 m-3 rounded-full"/>

          </div>
        </div>
    </>
  )
}

export default Navbar