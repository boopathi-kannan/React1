
import image1 from '../assets/img/chemical.png';
import image2 from '../assets/img/online-voting (1).png';
import image3 from '../assets/img/pet-care.png';

const Slice=()=>
{
  const slicelist=[
    {
      image:image1,
      title:'Agri Assist',
      description:"fhwofhewoifg hewiofgewiofieowf ioewfio ewfjioewfjioewj",
    },
    {
      image:image2,
      title:'Online Voting',
      description:"fhwofhewoifg hewiofgewiofieowf ioewfio ewfjioewfjioewj",
    },
    {
      image:image3,
      title:'Rescue',
      description:"fhwofhewoifg hewiofgewiofieowf ioewfio ewfjioewfjioewj",
    },
  ]
  return (
    <>
      {slicelist.map((slice,index)=>(
        <div key={index} className='w-2/6 flex flex-col border-black border-3 m-10 rounded-lg bg-slate-50 h-[70%] max-w-80 shadow-2xl shadow-black hover:shadow-2xl hover:shadow-white  hover:bg-slate-600 hover:text-slate-100 cursor-pointer hover:list-image-col'>
          <img src={slice.image}/>
          <p>{slice.title}</p>
          <p>{slice.description}</p>
        </div>
      ))
    }
    </>
  )
}
export default Slice;