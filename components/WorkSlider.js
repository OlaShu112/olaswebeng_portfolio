// components/WorkSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

// Data
const workProjects = [
  { title: 'Energy management', path: '/W1.png', link: 'https://err.olaivision.com/' },
  { title: 'Cantor College', path: '/W2.png', link:'https://cantor.olaivision.com/' },
  { title: 'HMS', path: '/W3.png', link:'https://hms.olaivision.com/' },
  { title: 'Ivision Sports', path: '/W4.png', link:'https://ivisionsport.com/' },
  { title: 'Ivision Play', path: '/W5.png', link:'https://ivisionplay.com/' },
  { title: 'Complaint Management System', path: '/W6.png', link:'https://cms.olaivision.com/' },
  { title: 'Hotel Management System', path: '/W7.png', link:'https://ivisionhms.com/' },
];

// Utility function to split into chunks of 4
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const WorkSlider = () => {
  const slides = chunkArray(workProjects, 4); // 4 items per slide

  return (
    <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full"
    >
      {slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.map((project, idx) => (
              <div key={idx} className="group relative w-full">
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
                  <Image
                    src={project.path}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 w-full text-center translate-y-full group-hover:-translate-y-16 transition-all duration-300">
                    <div className="flex items-center justify-center gap-x-3 text-[16px] sm:text-[18px] font-semibold tracking-wide">
                      <a href={project.link} target="_blank" rel="noreferrer" className="uppercase">
                        {project.title}
                      </a>
                      <BsArrowRight className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
