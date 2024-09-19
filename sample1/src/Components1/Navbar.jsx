import {UserCircle,Cross} from 'lucide-react'
import {NavLink} from 'react-router-dom'
import {useRef,useState} from 'react'


const Navbar = () => {
  const NavLinks= [{
    title:"Profile",
    path:"/"
  },
  {
    title:"Project",
    path:"/project"
  },
  {
    title:"Contact",
    path:"/contact"
  }
]
const emailref=useRef(null)
const passwordref=useRef(null)
const handleLogin=(e)=>
{
  e.preventDefault()
  console.log(emailref.current.value,passwordref.current.value)
}
const[visible,setvisible]=useState(false)
  return (
    <>
    <div className="h-[10%] flex flex-row p-4 w-full bg-slate-500">
          <div className="p-4 w-1/2 ">
            <h1 className="text-white font-bold font-sans text-2xl ">BOOPATHI</h1>

          </div>
          <div className="flex flex-row justify-end w-1/2">
          <ul className='w-full list-none flex flex-row justify-center gap-6'>
                            {
                                NavLinks.map((navdata,index) => (
                                    <NavLink key={index} to={navdata.path}>
                                        <li className='font-bold text-xl text-white p-5'>{navdata.title}</li>

                                    </NavLink>
                                ))
                            }
                            </ul>
              
              <UserCircle className="h-10 w-10 m-3 rounded-full bg-white " onClick={()=> setvisible(true)}/>

          </div>
        </div>
        

        {
           visible && (
            <>
                <div className="h-full w-full absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                    <div className=" h-[40%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                        <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-slate-500 text-xl  ">
                            <div className="w-5/6 text-center text-center">
                                Login
                            </div>
                            <div className=" w-1/6 flex justify-end ">
                                <Cross onClick={() => setvisible(!visible)} />
                            </div>
                        </div>
                        <div className="w-full h-[85%] flex flex-row justify-center items-center">
                            <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                <input type="email" ref={emailref} name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-slate-500" required />
                                <input type="password" ref={passwordref} name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-slate-500" required />
                                {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                                <button type="submit" className="bg-slate-700  p-3 text-white w-full rounded-sm text-lg font-bold">   Login</button>
                            </form>
                        </div>
                        {/* <div className="w-full h-[15%] flex flex-row justify-center items-center">
                            <button onClick={() => setvisible(!visible)} className="bg-red-500 p-3 text-white w-full h-full rounded-sm text-lg font-bold"> Cancel </button>
                        </div> */}
                    </div>
                </div>

            </>
        )
        }
    </>
  )
}

export default Navbar

