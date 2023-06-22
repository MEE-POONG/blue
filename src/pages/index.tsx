import Image from 'next/image'
import { AiOutlineCheck } from "react-icons/ai"; 

export default function Home() {
  return (
    <>
    <div className=''>
      <img className='float-left mr-4 ' src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.6435-9/82608695_884365055332186_739996416692191232_n.jpg?stp=dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFIbBLIxgqrX0cERm223ub_ItdMAbzENvsi10wBvMQ2-06ZsvqXQcDlIzogRJ_MUHW817iJ4dwjrSeq-o7gE6Jq&_nc_ohc=nPy_RTXwRigAX_ixQSb&_nc_ht=scontent.fnak3-1.fna&oh=00_AfD2MX_5dB_tTGQh60bQEF54eH2maQgRAnPaVgbl5Zqeog&oe=64BB6FF8"  />
    </div>
    <div className='bg-white border-e-4  border-gray-200 float-left ml-2 max-w-5xl mx-auto px-4 py-3 text-left s'>
    <p className=' ml-7  text-4xl text-indigo-500 leading-relaxed font-medium title-font '>CHANUWAT SRIAPHHAI</p>
    <ul>
    <li className='mt-2 text-zinc-500 leading-relaxed'>ชือเล่น : ไนท์  </li> 
    <li className='text-zinc-500 mt-3 leading-relaxed'>อายุ : 21</li>
    <li className='text-zinc-500 mt-3 leading-relaxed'>สถานะ : โสด</li>
    <li className='text-zinc-500 mt-3 leading-relaxed'>ที่อยู่ : นครราชสีมา,ประเทศไทย</li>
    <li className='text-zinc-500 mt-3 leading-relaxed'>ระดับ : นักศึกษาชั้นปี 4</li>
    <li className='text-zinc-500 mt-3 leading-relaxed mb-2'>สถานศึกษา : มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน</li>
    </ul>
    </div>

    <div className='bg-white border-e-4  border-gray-200 float-left ml-2 max-w-5xl mx-auto px-4 py-3 text-center'>
    <p className=' ml-7  text-4xl text-indigo-500 leading-relaxed font-medium title-font '>PERSONALITY</p>
    
    <li className='mt-2 text-zinc-500 leading-relaxed'> Extrovert :Introvert  </li>
    <li className='text-zinc-500 mt-3 leading-relaxed'> Sensing   :Intuition </li>
    <li className='text-zinc-500 mt-3 leading-relaxed'> Thinking  :Feeling </li>
    <li className='text-zinc-500 mt-3 leading-relaxed'> Judging   :Perceiving </li>
    </div>

    <div className="float-left flex-col  bg-white text-left px-3 ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500 mt-4">ความคาดหวังจากการออกสหกิจ</h1>
      <p className=" mx-auto leading-relaxed text-base text-zinc-500">-พัฒนาสกิลที่มีอยู่ให้ดียิ่ง</p><br />
      <p className=" mx-auto leading-relaxed text-base text-zinc-500">-เพิ่มสกิลที่ยังมีให้ใช้ได้</p><br /> 
      <p className=" mx-auto leading-relaxed text-base text-zinc-500">-เรียนรู้การเข้าสังคมขององค์กร</p>
    </div>
    
    

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto bg-white">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10  text-indigo-500">SKILL</h1>
      
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">7/10</h2>
          <p className="leading-relaxed mt-1">IT / INTERNET</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">7/10</h2>
          <p className="leading-relaxed mt-1">SOFTWARE</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">6/10</h2>
          <p className="leading-relaxed mt-1">MOBILE APP</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">5/10</h2>
          <p className="leading-relaxed mt-1">SOCIAL NETWORKS</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
