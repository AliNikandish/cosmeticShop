import Sliders from './Sliders'

const Banners = () => {
  return (
    <div className='w-full h-[370px] md:h-[600px] bg-pink-100 px-2 md:px-20 pt-10 relative '>
      <div className='lg:flex items-center justify-between gap-x-3'>
        <div className='w-full lg:w-8/12  h-[215px] md:h-[512px]  rounded-md relative '>
        <Sliders/>
        </div>
        <div className='w-4/12  flex-col gap-y-3 hidden lg:flex '>
        <div className='w-[250px] h-[250px] bg-blue-400 relative rounded-md'>
        <div className='w-full h-full relative overflow-hidden'>
        <div className='absolute top-[-105px] right-[-110px]'>
            <div className='w-56 h-56 rounded-full border-[90px] border-blue-300 '></div>
          </div>
        </div>
          <img className='absolute left-[-35px] bottom-[75px] w-16 rotate-[-25deg]' src="perfume.png" alt="" />
          <div className='absolute bottom-16 mr-2'>
          <p className='font-bold text-xl'>عطر و ادکلن</p>
          <p  className='text-sm bg-yellow-400 p-2 w-40 text-center mt-2 rounded-md'>تا 20% تخقیق ویژه</p>
          </div>
        </div>
        <div className='w-[250px] h-[250px] bg-emerald-400 relative rounded-md'>
        <div className='w-full h-full relative overflow-hidden'>
          <div className='absolute bottom-[-46px] right-[-50px]'>
            <div className='w-56 h-56 rounded-full bg-emerald-300/60 '></div>
          </div>
          </div>

          <img className='absolute left-[-35px] bottom-[60px] w-16 rotate-[-25deg]' src="mask.png" alt="" />
          <div className='absolute bottom-16 mr-2'>
          <p className='font-bold text-xl'>ماسک صورت</p>
          <p  className='text-sm bg-yellow-400 p-2 w-40 text-center mt-2 rounded-md'>تا 20% تخقیق ویژه</p>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute w-full right-0 bottom-[-25px] md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,128C480,128,549,160,617,176C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,144C1097.1,139,1166,149,1234,170.7C1302.9,192,1371,224,1406,240L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Banners