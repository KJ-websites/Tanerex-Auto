import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="relative py-20 md:py-[160px] flex items-center min-h-[calc(100vh-80px)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-[800px] flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(3.5rem,8vw,110px)] font-[900] tracking-[-0.04em] uppercase leading-[0.85] text-white m-0"
          >
            Sinu auto<br />
            <span className="text-[#DC2626]">kindlates</span><br />
            kätes
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[18px] text-white/60 my-6 md:my-[24px] max-w-[500px] leading-[1.6]">
              Tanerx Auto OÜ on Kadrinas tegutsev usaldusväärne autoremonditöökoda. 
              Meie kogenud meeskond pakub kvaliteetset remonti ja hooldust, tagades sinu sõiduki ohutuse ja pikaealisuse. 
              Läheneme igale autole personaalselt ja professionaalselt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/kontakt"
                className="inline-flex justify-center items-center px-[32px] py-[16px] bg-[#DC2626] hover:bg-[#b01e1e] text-white font-[900] text-[14px] md:text-[16px] uppercase tracking-[1px] border-none cursor-pointer transition-all gap-3"
              >
                Broneeri aeg online &rarr;
              </Link>
              <Link
                to="/teenused"
                className="inline-flex justify-center items-center px-[32px] py-[16px] bg-transparent hover:bg-white/5 text-white font-[900] text-[14px] md:text-[16px] uppercase tracking-[1px] border border-white/20 transition-all"
              >
                UURI TEENUSEID
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
