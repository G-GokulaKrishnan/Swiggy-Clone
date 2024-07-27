/* eslint-disable react/prop-types */
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; //Import Swiper styles
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation } from "swiper/modules";
modules={[Autoplay, Navigation]}
const Testimonials = () => {
  const [swiper, setSwiper] = useState();

  const prevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-5">
            <div className="w-[90%] flex justify-end items-end gap-5 py-5">
              <button
                onClick={prevSlide}
                className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div
            className="2xl:container w-[90%] mx-auto flex justify-center items-center mt-10"
            style={styles.testimonialBg}
          >
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={30}
              breakpoints={{
                // when window width is <= 299px
                299: {
                  slidesPerView: 1,
                },
                // when window width is >= 1000px
                1000: {
                  slidesPerView: 2,
                },
                // when window width is >= 1100px
                1100: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => setSwiper(swiper)}
              className="swiper_container py-5"
              style={{
                width: "90%",
              }}
            >
              {data.data.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <div className="w-[100%] min-h-[160px] bg-white box-shadow-ff pt-6 space-y-8 rounded-xl">

                    <p className="px-4 text-black min-h-[196px] max-h-[196px] overflow-hidden text-ellipsis text-base">
                      {testimonial.content}
                    </p>

                    <div className="flex gap-4 p-2 bg-[var(--primary-color)] w-[100%] rounded-b-xl">
                      <div>
                        <img
                          src={testimonial.img_url}
                          className="w-14 h-14 rounded-full object-contain"
                          alt="Img"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-start">
                        <p className="font-medium text-lg text-white">
                          {testimonial.student_name}
                        </p>
                        <p className="font-medium text-sm text-white">
                          {testimonial.college_name}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
