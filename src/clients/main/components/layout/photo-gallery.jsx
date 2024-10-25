import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ImageGallery = () => {
  return (
    <React.Fragment>
      <div className="bg-white py-5 px-4 md:px-8 lg:px-16 ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 text-blue-700">
          Testimonials
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 bg-white border border-gray-100 shadow-lg rounded-3xl flex flex-col h-full">
              <div className="flex gap-4 items-start flex-1">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="user avatar"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Ravi Kumar
                    </h6>
                    <p className="text-sm text-gray-500">Car Enthusiast</p>
                  </div>
                  <p className="mt-4 md:mt-6 lg:mt-8">
                    The quality of these seat covers is outstanding. They fit
                    perfectly and add a touch of luxury to my car's interior.
                    Highly recommend!
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex justify-end">
                <a
                  href="https://twitter.com/ravikumar/status/1234567890"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 bg-white border border-gray-100 shadow-lg rounded-3xl flex flex-col h-full">
              <div className="flex gap-4 items-start flex-1">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="user avatar"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Anjali Sharma
                    </h6>
                    <p className="text-sm text-gray-500">
                      Marketing Professional
                    </p>
                  </div>
                  <p className="mt-4 md:mt-6 lg:mt-8">
                    I love the customizable designs! I was able to choose the
                    perfect color to match my car's interior. The material feels
                    very durable.
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex justify-end">
                <a
                  href="https://www.instagram.com/p/1234567890"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 bg-white border border-gray-100 shadow-lg rounded-3xl flex flex-col h-full">
              <div className="flex gap-4 items-start flex-1">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/18.jpg"
                  alt="user avatar"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Vijay Singh
                    </h6>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                  <p className="mt-4 md:mt-6 lg:mt-8">
                    These seat covers are a game-changer for long drives. The
                    added padding and ergonomic design make a huge difference in
                    comfort.
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex justify-end">
                <a
                  href="https://www.facebook.com/vijaysingh/posts/1234567890"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 bg-white border border-gray-100 shadow-lg rounded-3xl flex flex-col h-full">
              <div className="flex gap-4 items-start flex-1">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="user avatar"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Priya Patel
                    </h6>
                    <p className="text-sm text-gray-500">Mobile Developer</p>
                  </div>
                  <p className="mt-4 md:mt-6 lg:mt-8">
                    The installation was super easy, and the instructions were
                    clear. My car looks and feels much more upscale now.
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex justify-end">
                <a
                  href="https://twitter.com/priyapatel/status/1234567890"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 bg-white border border-gray-100 shadow-lg rounded-3xl flex flex-col h-full">
              <div className="flex gap-4 items-start flex-1">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/62.jpg"
                  alt="user avatar"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Arjun Mehta
                    </h6>
                    <p className="text-sm text-gray-500">Manager</p>
                  </div>
                  <p className="mt-4 md:mt-6 lg:mt-8">
                    Great value for money. The seat covers have a premium feel
                    and have significantly improved the look of my car's
                    interior.
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex justify-end">
                <a
                  href="https://www.instagram.com/p/1234567890"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 md:p-6 lg:p-8 bg-white border border-gray-100 shadow-lg rounded-3xl flex flex-col h-full">
              <div className="flex gap-4 items-start flex-1">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/19.jpg"
                  alt="user avatar"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      Meera Gupta
                    </h6>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                  <p className="mt-4 md:mt-6 lg:mt-8">
                    I'm very impressed with the fit and finish. The covers are
                    comfortable and add a touch of class to my car.
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8 flex justify-end">
                <a
                  href="https://www.linkedin.com/posts/meera-gupta"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default ImageGallery;
