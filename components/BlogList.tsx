import { BiRightArrowAlt } from "react-icons/bi";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IsequeiImage from "../../public/isequei.png";
import RecomeceImage from "../../public/recomece.png";

// Import Swiper styles
import "swiper/css";
import { Card } from "./Card";

function BlogList() {
  return (
    <div className=" mb-10">
      {/* <Slide /> */}
      <Swiper
        initialSlide={0}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          960: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
        }}
      >
        <SwiperSlide>
          <Card
            link="https://nutricao.info/programarecomece"
            mainImage={RecomeceImage}
            title="PROGRAMA RECOMECE"
            description="Cansado de sintomas como: cansaço, fadiga extrema, dor de cabeça, intestino preguiçoso, gases, azia e gordura abdominal?"
            textBtn="Saiba mais"
            iconBtn={<BiRightArrowAlt size={24} />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            link="https://www.ihsequei.com.br/"
            mainImage={IsequeiImage}
            title="PROJETO #IHSEQUEI"
            description="O #ihsequei é um programa de Life Coaching criado para você aprender, com simplicidade, a equilibrar a sua alimentação e a manter o seu corpo em plena harmonia. É um método 100% on-line que já mudou a vida de mais de 1000 mulheres em busca de emagrecimento, autoestima, saúde e bem-estar."
            textBtn="Saiba mais"
            iconBtn={<BiRightArrowAlt size={24} />}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BlogList;
