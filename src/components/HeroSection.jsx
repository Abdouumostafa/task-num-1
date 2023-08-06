const HeroSection = () => {
  return (
    <div className="mt-10 pb-20 text-center">
        <h1 className="title relative text-[40px] font-bold text-center mb-8">تركيب أطار جديد</h1>
          <label htmlFor="list" className="block font-bold text-[18px]">تاريخ تركيب الاطار</label>
          <input type="date" id="list" />
          <h2 className="mt-12 relative text-[40px] font-bold text-center mb-8">معلومات السيارة</h2>
          <div className="flex flex-wrap justify-center items-center gap-14">
            <div className="w-[300px]">
              <label className="block mb-3 text-[20px]">رقم السيارة</label>
              <input type="text" className="p-3 text-center border border-black focus:outline-none" placeholder="أ ب ج 000"/>
            </div>
            <div className="w-[300px]">
              <label className="block mb-3 text-[20px]">عداد السيارة</label>
              <input type="number" className="p-3 text-center border border-black focus:outline-none" placeholder="123456"/>
            </div>
            <div className="w-[300px]">
              <label className="block mb-3 text-[20px]"> الإطار المراد تغييره</label>
              <select className="p-2 focus:outline-none">
                <option>الإطار 1 </option>
                <option>الإطار 2</option>
                <option>الإطار 3</option>
              </select>
            </div>
            <div className="w-[300px]">
              <label className="block mb-3 text-[20px]">   موضع الإطار</label>
              <select className="p-2 focus:outline-none">
                <option>R1</option>
                <option>L1</option>
                <option>R2</option>
                <option>L2</option>
                <option>R3</option>
                <option>L3</option>
              </select>
            </div>
          <div className="w-[300px]">
              <label className="block mb-3 text-[20px]">   حالة الإطار القديم</label>
              <select className="p-2 focus:outline-none">
                <option>  جديد</option>
                <option> مستعمل</option>
              </select>
            </div>
            <div className="w-[300px]">
              <label className="block mb-3 text-[20px]">الرقم التسلسلي للإطار (الباركود)</label>
              <input type="number" className="p-3 text-center border border-black focus:outline-none" placeholder="74567543"/>
            </div>
            <div className="w-[300px]">
            <label className="block mb-3 text-[20px]">إحالة الإطار القديم إلى:</label>
            <div className="flex flex-col">
              <div>
            <label htmlFor="1" className="mx-4 text-[20px]">بيع اتلاف</label>
            <input type="radio" name="option" id="1"/>                
              </div>
              <div>
            <label htmlFor="2" className="mx-2 text-[20px]">اعادة للوكيل</label>
            <input type="radio" name="option" id="2"/>                
              </div>

            </div>
            </div>
          </div>
    </div>
  )
}
export default HeroSection