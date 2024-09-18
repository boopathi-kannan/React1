import { UserCircle } from "lucide-react";

const App=()=>{
  return (
    <>
      <div className="h-screen w-screen ">
        <div className="h-[12%] flex flex-row p-4 w-full bg-slate-500">
          <div className="p-4 w-1/2 ">
            <h1 className="text-white font-bold font-sans text-2xl ">BOOPATHI</h1>

          </div>
          <div className="flex flex-row justify-end w-1/2">
              <h2 className="rounded-md border-spacing-3 border-black border-2 p-2 text-center m-3 h-10 bg-black  text-white">
                <a href="#">Profile</a>
              </h2>
              <h2 className="rounded-md border-spacing-3 border-black border-2 p-2 text-center h-10 m-3">
                <a href="#">Project</a>
              </h2>
              <h2 className="rounded-md border-spacing-3 border-black border-2 p-2 text-center h-10 m-3">
                <a href="#">Contact</a>
              </h2>
              {/* <img src="https://res.cloudinary.com/da2chknoz/image/upload/v1725948631/images_13_kxbda9.jpg" className="h-10 w-10 rounded-full m-3"/> */}
              
              <UserCircle className="h-10 w-10 m-3"/>

          </div>
        </div>
        <div className="bg-gray-400 h-[95%]">
           <div className="flex flex-row w-full ">
            <div className="flex flex-col p-10">
              <div className="p-8 ">
                <h1 className="text-white font-bold text-4xl w-1/2 text-center">Hii I am Boopathi...</h1>
                </div>
                <div className="p-10 ">
                <h1 className="text-white font-bold text-1xl w-1/2 ">Passionate and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies, including JavaScript, React, Node.js, and databases like MongoDB and SQL. Seeking to leverage my skills in designing, developing, and deploying web applications in a dynamic and innovative software development environment. Eager to contribute to building efficient and scalable solutions while continuously learning and growing as part of a collaborative team.</h1>
                </div>
            </div>
            <div className="w-1/2 p-50 m-20">
            <img src="https://res.cloudinary.com/da2chknoz/image/upload/v1725948631/images_13_kxbda9.jpg" className="rounded-full h-[75%] w-[250%]"/>
            </div>
           </div>
           <div className="flex flex-row justify-center">
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726569019/atom_wcytoz.png" className="h-10 w-10 m-2"/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568558/developer_g80rja.png" className="h-10 w-10 m-3 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568811/browser_v8rncb.png" className="h-10 w-10 m-3"/>

        </div>
        </div>
        

      </div>
    </>
  )
}
export default App;
