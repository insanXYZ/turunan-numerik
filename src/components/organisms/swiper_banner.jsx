import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Wrapper from "../layouts/wrapper";
import Render from "../moleculs/mathjax";
import "swiper/css";

export default function App() {
  return (
    <Wrapper className={"bg-primary h-72 sm:h-96"}>
      <div className="h-full flex flex-col justify-center lg:flex-row items-center gap-10">
        <div className="text-7xl sm:text-9xl text-white text-center font-extrabold">
          Hitung
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
          }}
          className=" text-white text-center w-full text-2xl sm:text-5xl font-extrabold"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Render formula={`\\(\\frac{f_2 - 2f_1 + f_0}{h^2} + O(h)\\)`} />
          </SwiperSlide>
          <SwiperSlide>
            <Render
              formula={`\\(\\frac{-f_3 + 4f_2 - 5f_1 + 2f_0}{12h} + O(h^2)\\)`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Render
              formula={`\\(\\frac{f_3 - 3f_2 + 3f_1 - f_0}{h^3} + O(h)\\)`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Render formula={"\\(\\frac{-3f_0 + 4f_1 - f_2}{2h} + O(h^2)\\)"} />
          </SwiperSlide>
          <SwiperSlide>
            <Render
              formula={`\\(\\frac{f_{-2} - 2f_{-1} + f_0}{h^2} + O(h)\\)`}
            />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
    </Wrapper>
  );
}
