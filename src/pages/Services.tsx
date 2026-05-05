import { motion } from 'motion/react';
import {
  Wrench,
  CircleDashed,
  Zap,
  CarFront,
  Settings,
  Clock
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Sõiduautode remont ja hooldus',
      description: 'Kvaliteetne korraline hooldus ja tehniliste rikete eemaldamine kõikidele automarkidele.',
      icon: Wrench,
    },
    {
      title: 'Rehvivahetus',
      description: 'Kiire ja professionaalne rehvide montaaz, tasakaalustamine ja parandus.',
      icon: CircleDashed,
    },
    {
      title: 'Diagnostika ja elektritööd',
      description: 'Kaasaegne arvutidiagnostika ja elektrisüsteemide veaotsing.',
      icon: Zap,
    },
    {
      title: 'Sillastend',
      description: 'Sildade reguleerimine turvalise ja mugava sõidu tagamiseks ning rehvide kulumise vähendamiseks.',
      icon: CarFront,
    },
    {
      title: 'Lisavarustuse paigaldus',
      description: 'Lisatulede, haagisekonksude ja muude mugavusseadmete paigaldamine.',
      icon: Settings,
    },
  ];

  return (
    <section className="py-[40px] md:py-[80px] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] rounded-[12px] p-[32px] md:p-[64px] flex flex-col w-full">
          <h2 className="text-[28px] md:text-[40px] font-[900] m-0 text-white uppercase tracking-tight mb-[48px]">
            Meie teenused
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-[4px] border-[#DC2626] pl-[24px] flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#DC2626]">
                      <Icon size={32} strokeWidth={2} />
                    </div>
                    <h3 className="font-[900] text-[18px] md:text-[22px] text-white uppercase tracking-wide">{service.title}</h3>
                  </div>
                  <p className="text-white/70 leading-[1.8] text-[16px] md:text-[18px]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#DC2626]/10 border border-[#DC2626] text-[#DC2626] p-[24px] md:p-[32px] rounded-[12px] font-[900] text-2xl md:text-[32px] text-center mt-[64px] uppercase tracking-wide flex items-center justify-center gap-4 flex-wrap"
          >
            <Clock size={40} className="hidden sm:block text-[#DC2626]" />
            Töötunni hind: 40 €/h
          </motion.div>
        </div>
      </div>
    </section>
  );
}
