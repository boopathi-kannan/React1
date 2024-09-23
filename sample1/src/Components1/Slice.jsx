
import image1 from '../assets/img/chemical.png';
import image2 from '../assets/img/online-voting (1).png';
import image3 from '../assets/img/pet-care.png';

const Slice=()=>
{
  const slicelist=[
    {
      image:image1,
      title:'Agri Assist',
      description:"It provides tools and information related to farming practices, weather forecasts, crop health monitoring, soil analysis, and market prices. By using mobile or web platforms, farmers can receive real-time updates, expert advice, and data analytics to make informed decisions, ultimately boosting yield and income.",
    },
    {
      image:image2,
      title:'Online Voting',
      description:"The system ensures voter authentication, confidentiality, and tamper-proof results using encryption and secure authentication methods. It provides a user-friendly interface where voters can register, log in, and select their preferred candidates or options.",
    },
    {
      image:image3,
      title:'Rescue',
      description:"The system can send alerts if the pet leaves a designated safe zone and provide a map for easy navigation. Additional features might include health monitoring and historical movement data. ",
    },
  ]
  return (
    <>
      {slicelist.map((slice,index)=>(
        <div key={index} className='flex flex-col cursor-pointer bg-white justify-center py-4  text-center items-center rounded-xl 
         shadow-2xl md:min-h-[340px] w-screen max-w-screen-md min-h-[260px] hover:bg-slate-500 hover:text-white hover:shadow-2xl hover:shadow-slate-500 '>
          <img src={slice.image} className='p-4 h-[30%] w-[30%]'/>
          <p className='p-3 font-bold'>{slice.title}</p>
          <p className='p-3'>{slice.description}</p>
        </div>
      ))
    }
    </>
  )
}
export default Slice;