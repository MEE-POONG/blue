import Link from "next/link";

export default function Skill(){
    return(
        <>
        <div>
            
<section className="flex flex-col lg:flex-row m-5 p-2 md:p-5">
      <div className="w-full p-2 md:p-6 bg-white rounded-lg shadow-md ">
       <Link href={'/'}> <h4 className="text-xl">This is My SkillS</h4></Link>

        <div className="flex flex-wrap gap-5 md:gap-10 m-3 mt-10 text-4xl">
          <div className="text-sm">
            <span
              className="bg-orange-500 align-middle w-4 h-4 inline-block mr-1 -mt-1"
            ></span>
            ดีเยี่ยม
          </div>

          <div className="text-sm">
            <span
              className="bg-orange-300 align-middle w-4 h-4 inline-block mr-1 -mt-1"
            ></span>
            ดี
          </div>

          <div className="text-sm">
            <span
              className="bg-gray-300 align-middle w-4 h-4 inline-block mr-1 -mt-1"
            ></span>
            พอใช้ได้
          </div>

          <div className="text-sm">
            <span
              className="bg-gray-400 align-middle w-4 h-4 inline-block mr-1 -mt-1"
            ></span>
            แย่

          </div>

          <div className="text-sm">
            <span
              className="bg-gray-500 align-middle w-4 h-4 inline-block mr-1 -mt-1"
            ></span>
            โคตรแย่
          </div>
        </div>

        <div className="space-y-10 mt-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 p-3 text-justify">DESIGN <span> 
              <p>การดีไซน์ของผมยังอยู่ในขั้นท่ยังต้องเรียนรู้อยยู่มาก แต่เป็นงานที่ตัวผมนั้นชอบ จึงทำให้สามารถพัฒนาได้ดี</p></span>
            </div>
            <div className="flex w-full md:w-2/3 min-h-[60px]">
              <span
                className="rounded-l p-3 text-center leading-10 mr-1 bg-orange-500 w-[50%] text-white"
                >50%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-orange-300 w-[30%] text-black"
                >30%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[10%] text-black"
                >20%</span
              >
              <span
                className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[2%] text-white"
              ></span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 p-3 text-juttify">CODE <span>
              <p>งานโค้ดเป็นงานที่ตัวผมเองนั้นไม่ค่อยชอบ แต่สามารถเรียนรู้ได้ แต่จะสามารถเรียนรู้ได้ช้า</p></span>
            </div>
            <div className="flex w-full md:w-2/3 min-h-[60px]">
              <span
                className="rounded-l p-3 text-center leading-10 mr-1 bg-orange-500 w-[60%] text-white"
                >40%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-orange-300 w-[25%] text-black"
                >35%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[10%] text-black"
                >25%</span
              >
             
              <span
                className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[2%] text-white"
              ></span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 p-3">DATA 
            <span>
              <p>งานข้อมูลเป็นงานที่ตัวผมเองไม่ถนัด และไม่ชอบในตัวงานเอาเป็นมากๆ ดังนั้นงานที่เป็นสกิลที่ตัวผมเองนั้นอ่อนมากที่สุด</p></span>
              
            </div>
            <div className="flex w-full md:w-2/3 min-h-[60px]">
              <span
                className="rounded-l p-3 text-center leading-10 mr-1 bg-gray-300 w-[40%] text-black"
                >40%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-gray-400 w-[35%] text-white"
                >35%</span
              >
              <span
                className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[25%] text-white"
                >25%</span
              >
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 p-3 text-justify">IT SUPPORT <span> 
              <p>ด้าน it ผม พอจะมีีความรู้อยู่บ้างแต่ก็ยังไม่ถึงขั้นที่สามารถแก้ปัญหายากๆได้ๆ</p></span>
            </div>
            <div className="flex w-full md:w-2/3 min-h-[60px]">
              <span
                className="rounded-l p-3 text-center leading-10 mr-1 bg-orange-300 w-[50%] text-black"
                >40%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[30%] text-black"
                >30%</span
              >
              <span
                className="text-center p-3 leading-10 mr-1 bg-gray-400 w-[10%] text-white"
                >30%</span
              >
              <span
                className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[2%] text-white"
              ></span>
            </div>
          </div>
        </div>
        
        

        <p className="text-sm text-gray-400 my-10 px-3">
          ข้อมูลข้างต้นข้าพเจ้าสมมุติฐานขึ้น อาจเป็นตามจริงหรือแต่งขึ้น!
        </p>
      </div>
    </section>
        </div>
        </>
    )
}
