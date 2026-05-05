export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-[40px] px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center gap-3 mb-[20px] md:mb-0">
          <div className="w-[20px] h-[20px] bg-[#DC2626] rounded-[4px] hidden md:block"></div>
          <span className="font-[900] text-[18px] tracking-tighter text-white">
            TANERX <span className="text-[#DC2626]">AUTO</span>
          </span>
        </div>
        <div className="text-white/40 text-[12px] uppercase font-[700] tracking-[1px]">
          &copy; {new Date().getFullYear()} Tanerx Auto OÜ. Kõik õigused kaitstud.
        </div>
      </div>
    </footer>
  );
}
