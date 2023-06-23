import Image from 'next/image'
import { AiOutlineCheck } from "react-icons/ai"; 
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function Home() {
  return (
    <>
    <div className=''>
      <img className='float-left mx-auto mr-4 border-4 rounded-sm border-white' src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.6435-9/82608695_884365055332186_739996416692191232_n.jpg?stp=dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFIbBLIxgqrX0cERm223ub_ItdMAbzENvsi10wBvMQ2-06ZsvqXQcDlIzogRJ_MUHW817iJ4dwjrSeq-o7gE6Jq&_nc_ohc=nPy_RTXwRigAX_ixQSb&_nc_ht=scontent.fnak3-1.fna&oh=00_AfD2MX_5dB_tTGQh60bQEF54eH2maQgRAnPaVgbl5Zqeog&oe=64BB6FF8"  />
    </div>
    <div className=' border-e-2  border-gray-200 float-left ml-2 max-w-5xl mx-auto px-4 py-3 text-left s'>
    <p className='night ml-7  text-4xl text-white leading-relaxed font-medium title-font '>CHANUWAT SRIAPHHAI</p>
    <ul className='text-[22px]'>
    <li className='text mt-2 text-white leading-relaxed'>ชือเล่น : <a className='text-zinc-500 text-[25px]'>ไนท์</a>   </li> 
    <li className='text-white  mt-3 leading-relaxed'>อายุ : <a className='text-zinc-500'>21</a></li>
    <li className='text-white  mt-3 leading-relaxed'>สถานะ : <a className='text-zinc-500'>โสด</a></li>
    <li className='text-white  mt-3 leading-relaxed'>ที่อยู่ : <a className='text-zinc-500'>นครราชสีมา,ประเทศไทย</a></li>
    <li className='text-white  mt-3 leading-relaxed'>ระดับ : <a className='text-zinc-500'>ไนักศึกษาชั้นปี 4</a></li>
    <li className='text-white  mt-3 leading-relaxed mb-2'>สถานศึกษา : <a className='text-zinc-500'>มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน</a></li>
    </ul>
    </div>

    <div className=' border-e-2  border-gray-200 float-left ml-2 max-w-5xl mx-auto px-3 py-3 text-center'>
    <p className=' ml-7  text-4xl text-white leading-relaxed font-medium title-font '>PERSONALITY</p>
   <ul className='text-[22px]'> 
    <li className='mt-2 text-zinc-500 leading-relaxed'> Extrovert : <a className='underline text-indigo-500'>Introvert</a>  </li>
    <li className='text-indigo-500 mt-3 leading-relaxed underline'> Sensing <a > : </a>  <a className='underline text-indigo-500'>Intuition </a></li>
    <li className='text-zinc-500 mt-3 leading-relaxed'> Thinking  : <a className='underline text-indigo-500'>Feeling</a>  </li>
    <li className='text-zinc-500 mt-3 leading-relaxed'> Judging   : <a className='underline text-indigo-500'>Perceiving</a> </li>
    </ul>

    </div>

    <div className="text-left py-5 ">
      <h1 className="sm:text-4xl text-center font-medium  mb-4 text-white ">Expectionn</h1>
      <ul className='text-[25px] p-5'>
        <li className="px-2 mx-auto leading-relaxed  text-zinc-500">-เรียนรู้การเข้าสังคมของการทำงานในองค์กร</li>
        <li className="px-2 mx-auto leading-relaxed  text-zinc-500">-พัฒนาสกิลที่มีอยู่ให้ดียิ่ง</li>
        <li className="px-2 mx-auto leading-relaxed  text-zinc-500">-เพิ่มสกิลที่จำเป็น</li>
        
      </ul>
    </div>
    


    
  

    <section className=" body-font">
  <div className="container px-5 py-24 mx-auto mt-15 ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10  text-white">SKILL</h1>
      
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 bg-gradient-to-br from-[#ff9018] to-[#FF5555] px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-white">7/10</h2>
          <p className="leading-relaxed mt-1 text-white">IT / INTERNET</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 bg-gradient-to-br from-[#ff9018] to-[#FF5555] border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-white">7/10</h2>
          <p className="leading-relaxed mt-1 text-white">SOFTWARE</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 bg-gradient-to-br from-[#ff9018] to-[#FF5555] px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-white">6/10</h2>
          <p className="leading-relaxed mt-1 text-white">MOBILE APP</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 bg-gradient-to-br from-[#ff9018] to-[#FF5555] px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-white">5/10</h2>
          <p className="leading-relaxed mt-1 text-white">SOCIAL NETWORKS</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    <div className="flex flex-col text-center w-full mb-20 ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 mb-10 text-white">Social Media</h1>
      

    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="http://www.facebook.com/15chanuwat.siapai51/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Facebook
                <svg aria-hidden="true" className ="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://www.instagram.com/bule_eyes0/?hl=en" 
            
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 bg-gradient-to-br from-[#6025F5] to-[#FF5555]">
                Instagram
                <svg aria-hidden="true" className ="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://www.tiktok.com/@bule_eyes0" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-950 hover:bg-blue-950 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Tiktok
                <svg aria-hidden="true" className ="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>

    </div>



    </>
  )
}
