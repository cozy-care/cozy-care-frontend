'use client'

export default function Footer() {
  return (
    <footer className="flex w-full h-[150px] bg-slate-300 mt-auto pt-5">
      <div className="flex justify-center w-1/5 h-full font-black text-3xl">
        COZY CARE
      </div>
      <div className="flex flex-col pl-[200px] w-2/5 h-full">
          <div className="font-extrabold text-xl">เกี่ยวกับ</div>
          <div>ผู้ดูแล</div>
          <div>ช่วยเหลือ/การติดต่อ</div>
          <div>นโยบายความเป็นส่วนตัว</div>
      </div>
      <div className="flex justify-center w-2/5 h-full">
        logo here
      </div>
    </footer>
  );
}
