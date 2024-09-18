
import Navbar from '../Components1/Navbar'

const profile = () => {
  return (
     <>
     <Navbar/>
     <div className="bg-gray-400 h-[95%]">
           <div className="flex flex-row w-full ">
            <div className="flex flex-col p-10">
              <div className="p-8 ">
                <h1 className="text-white font-bold text-4xl w-1/2 text-center">Hii I am Boopathi...</h1>
                </div>
                <div className="p-10 ">
                <h1 className="text-white font-bold text-1xl w-1.5/2 ">Passionate and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies, including JavaScript, React, Node.js, and databases like MongoDB and SQL. Seeking to leverage my skills in designing, developing, and deploying web applications in a dynamic and innovative software development environment. Eager to contribute to building efficient and scalable solutions while continuously learning and growing as part of a collaborative team.</h1>
                </div>
            </div>
            <div className="w-0.5/2 p-50 flex flex-row justify-center">
            <img src="https://res.cloudinary.com/da2chknoz/image/upload/v1725948631/images_13_kxbda9.jpg" className="rounded-full h-[75%] w-[250%]"/>
            </div>
           </div>
           <div className="flex flex-row justify-center">
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726569019/atom_wcytoz.png" className="h-10 w-10 m-2"/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568558/developer_g80rja.png" className="h-10 w-10 m-3 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568811/browser_v8rncb.png" className="h-10 w-10 m-3"/>

        </div>
        </div>
        

     </>
  )
}


export default profile

