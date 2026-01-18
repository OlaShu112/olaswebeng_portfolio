// components/PortfolioSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const portfolioItems = [
  {
    title: 'GitHub Projects',
    image: '/portfolio/github.png',
    link: 'https://github.com/OlaShu112', //Githb
  },
  {
    title: 'C# Applications',
    image: '/portfolio/csharp.png', //portfolio
    link: '#',
  },
  {
    title: 'Resume / CV',
    image: '/portfolio/resume.png',
    link: '/files/OlaResume.pdf',
  },
];

const PortfolioSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination, FreeMode]}
      touchMoveStopPropagation={false}
      touchReleaseOnEdges={true}
      touchStartPreventDefault={false}
      freeMode={true} // <-- allows smooth dragging
      className="scrollable-slider" // optional for CSS tweaks
      direction="horizontal"
    >
      {portfolioItems.map((item, index) => (
        <SwiperSlide key={index}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="group relative w-full h-[250px] rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-6 w-full text-center text-white">
                <div className="flex justify-center items-center gap-2 text-lg font-semibold">
                  {item.title}
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioSlider;
