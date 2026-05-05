import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-[40px] md:py-[80px] bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-[32px] md:mb-[48px]">
          <h2 className="text-[28px] md:text-[32px] font-[900] uppercase tracking-tight text-white m-0">
            Võta meiega ühendust
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            
            <div className="flex flex-col p-[32px] bg-[#1A1A1A] border-l-[4px] border-[#DC2626] h-full justify-center group hover:bg-[#202020] transition-colors rounded-r-[8px]">
              <span className="text-[12px] text-white/50 uppercase tracking-[1.5px] mb-[12px] flex items-center gap-2 font-[700]">
                <Phone size={16} className="text-[#DC2626]" /> Helista meile
              </span>
              <a href="tel:+37255641878" className="font-[900] text-[20px] md:text-[24px] text-white hover:text-[#DC2626] transition-colors mb-2">5564 1878</a>
              <a href="tel:+37253481867" className="font-[900] text-[20px] md:text-[24px] text-white hover:text-[#DC2626] transition-colors">5348 1867</a>
            </div>

            <div className="flex flex-col p-[32px] bg-[#1A1A1A] border-l-[4px] border-[#DC2626] h-full justify-center group hover:bg-[#202020] transition-colors rounded-r-[8px]">
              <span className="text-[12px] text-white/50 uppercase tracking-[1.5px] mb-[12px] flex items-center gap-2 font-[700]">
                <Mail size={16} className="text-[#DC2626]" /> E-post
              </span>
              <a href="mailto:info@tanerx.ee" className="font-[900] text-[20px] md:text-[24px] text-white hover:text-[#DC2626] transition-colors overflow-wrap-anywhere">info@tanerx.ee</a>
            </div>

            <div className="flex flex-col sm:col-span-2 p-[32px] bg-[#1A1A1A] border-l-[4px] border-[#DC2626] h-full justify-center group hover:bg-[#202020] transition-colors rounded-r-[8px]">
              <span className="text-[12px] text-white/50 uppercase tracking-[1.5px] mb-[12px] flex items-center gap-2 font-[700]">
                <MapPin size={16} className="text-[#DC2626]" /> Asukoht
              </span>
              <address className="not-italic font-[900] text-[20px] md:text-[24px] text-white">
                Viitna tee 10, Kadrina, Estonia, 45201
              </address>
            </div>
          </div>

          {/* Map Integration */}
          <div className="min-h-[400px] lg:min-h-full w-full bg-[#111] overflow-hidden border border-white/10 relative rounded-[12px] flex items-center justify-center">
            <iframe
              title="Google Maps Asukoht"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=et&amp;q=Viitna%20tee%2010,%20Kadrina,%20Estonia+(Tanerx%20Auto%20O%C3%9C)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
