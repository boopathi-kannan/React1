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
          <ul className='w-full list-none flex flex-row justify-center gap-10 p-2 '>
                            {
                                NavLinks.map((navdata,index) => (
                                    <NavLink key={index} to={navdata.path}>
                                        <li className='font-bold text-xl text-white p-3  gap-4 capitalize inline-block relative cursor-pointer transition-all duration-50:0  before:absolute
                                                before:-bottom-0 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-slate-300
                                                hover:before:w-full hover:before:opacity-100 '>{navdata.title} </li>
                                        

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


// <div className="w-full flex flex-row justify-center h-screen bg-slate-200 pt-10">\
// <div className="w-2/6 flex flex-col border-black border-3 m-10 rounded-lg bg-slate-50 h-[70%] max-w-80 shadow-2xl shadow-black hover:shadow-2xl hover:shadow-white  hover:bg-slate-600 hover:text-slate-100 cursor-pointer hover:list-image-col ">
// <Slice/>
//  <div className=" max-w-80  ">
//   <div className="p-4 h-[40%] w-[40%]">
//   <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726900212/chemical_lkpkkr.png" 
//   className="text-center"/>
//   </div>

//  <h1 className="font-bold p-3">Description</h1>
//  <p className="p-3">tkldjfeiosjf ewiofjioewjfioewjfio ewjiofjfioejfijw fjwiojwiofjwiofj wiofjiewjfiwjf iwjfiowjfiojfoi jwofijoifjw jiojfwjffj</p>
// </div>
// </div>
// <div className="w-2/6 flex flex-col border-black border-3 m-10 rounded-md bg-slate-50 h-[70%] max-w-80">
//  <div className=" max-w-80">
//   <div className="text-center p-5 h-[40%] w-[40%]">
//   <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726900306/online-voting_1_hrfqff.png" className=""/>
//   </div>
//  <h1 className="font-bold p-3">Description</h1>
//  <p className="p-3">tkldjfeiosjf ewiofjioewjfioewjfio ewjiofjfioejfijw fjwiojwiofjwiofj wiofjiewjfiwjf iwjfiowjfiojfoi jwofijoifjw jiojfwjffj</p>
// </div>
// </div>
// <div className="w-2/6 flex flex-col border-black border-3 m-10 rounded-md bg-slate-50 h-[70%] max-w-80">
//  <div className=" max-w-80">
//   <div className="text-center p-5 h-[40%] w-[40%]" >
//   <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726900389/pet-care_bjcudu.png" className=""/>
//   </div>
//  <h1 className="font-bold p-3">Description</h1>
//  <p className="p-3">tkldjfeiosjf ewiofjioewjfioewjfio ewjiofjfioejfijw fjwiojwiofjwiofj wiofjiewjfiwjf iwjfiowjfiojfoi jwofijoifjw jiojfwjffj</p>
// </div>
// </div>

// </div>

