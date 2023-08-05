const HeroSection = () => {
  return (<>
    <div className="heroImg relative px-10 py-24 text-white">
      <div className=" ">
      <h1 className='text-[44px] font-bold z-20 relative'>إسم الشركة</h1>
      <p className="text-[20px] relative z-20 sm:w-[40%] w-[90%]">نساعدك في العثور على الإطارات المناسبة لسياراتك بجانب اتخاذ الترتيبات اللازمة مع مراكز  التركيب المعتمدة لدينا بسعر تنافسي و
شراء وتركيب  إطارات سيارتك الآن أصبح أسهل وأسرع وأقرب.</p>        
      </div>    
    </div>
      <div className="mt-10 pb-20">
        <h1 className="text-[40px] font-bold text-center mb-8">تركيب أطار جديد</h1>
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="w-[300px]">
          <label htmlFor="list" className="block font-bold text-[18px]">قائمة الاطارات المركبة على السيارات</label>
          <select id="list" className="border focus:outline-0 p-2 mt-3">
            <option >إطار 1</option>
            <option >إطار 2 </option>
            <option >إطار 3</option>
          </select>            
          </div>
          <div className="w-[300px]">
          <label htmlFor="list" className="block font-bold text-[18px]">تسجيل قراءة لعداد السيارة</label>
          <input type="number" id="list" className=" border border-black focus:outline-none p-2 mt-3"/>
          </div>
          <div className="w-[300px]">
          <label htmlFor="list" className="block font-bold text-[18px]">موضع الاطار على السيارة</label>
          <select id="list" className="border focus:outline-0 p-2 mt-3">
            <option > R1</option>
            <option > R2 </option>
            <option > R3</option>
            <option > L1</option>
            <option > L2 </option>
            <option > L3</option>
          </select>            
          </div>
          <div className="w-[300px]">
          <label htmlFor="list" className="block font-bold text-[18px]">حالة الاطار</label>
          <select id="list" className="border focus:outline-0 p-2 mt-3">
            <option >جديد</option>
            <option > مستعمل </option>
          </select>            
          </div>
          <div className="w-[300px]">
          <label htmlFor="list" className="block font-bold text-[18px]">تاريخ تركيب الاطار</label>
          <input type="date" id="list" />
          </div>
          <div className="w-[300px]">
          <label htmlFor="list" className="block font-bold text-[18px]">الشركة المالكة للسيارة</label>
          <select id="list" className="border focus:outline-0 p-2 mt-3">
            <option > الشركة 1</option>
            <option > الشركة 2 </option>
            <option >الشركة 3</option>
            <option >الشركة 4</option>

          </select>            
          </div>
        </div>
      </div>
</>
  )
}
export default HeroSection