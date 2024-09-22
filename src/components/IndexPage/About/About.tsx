import React from "react";
const About = () => {
  return (
    <div className="w-full px-20 mt-10 mb-20 hidden lg:block">
      <div className="lg:flex gap-x-5">
        <div className="w-full lg:w-1/2 lg">
          <p className="text-rose-500 mb-2">
            <span className="border-b-rose-500 border-b-2 pb-1 ">
              {" "}
              محصولات خاص{" "}
            </span>
            <span className="text-black border-none">برای پوست شما</span>
          </p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-2xl text-xs mt-2">
              از ما بیشتر بدانید
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg mt-2">
          <img src="aboutposter.jpg" className="rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
