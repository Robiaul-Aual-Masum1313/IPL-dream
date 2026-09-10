import Banner_image from "../../assets/banner-main.png";

export default function Hero() {
  return (
    <div className="container mx-auto h-136.25 bg-[url('/hero_bg.png')] bg-center bg-cover bg-no-repeat rounded-3xl flex flex-col justify-center items-center">
        <div>
        <img src={Banner_image} alt="" />
        </div>

        <h2 className="text-white text-[40px] py-4 font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <h4 className="text-white font-medium text-2xl">Beyond Boundaries Beyond Limits</h4>
        <button className="bg-[#E7FE29] text-[#131313] px-5 py-2 outline-1 outline-[#E7FE29] outline-offset-8 font-bold text-[16px] my-4 rounded-[10px]">Claim Free Credit</button>
    </div>
  )
}
