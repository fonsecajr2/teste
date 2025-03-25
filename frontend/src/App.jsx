import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo10.png";
import me from "./assets/profile.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function App () {
  const[isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ensure Swiper recognizes the buttons after the component mounts
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.add("swiper-button-next");
      prevButton.classList.add("swiper-button-prev");
    }
  }, []);

  return(
    <div className="min-h-screen w-full flex flex-col bg-yellow-100 overflow-x-hidden">

      <nav className="fixed top-0 w-full z-50 p-2 shadow-md bg-yellow-100 ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img className="w-30 h-7.5" src={logo} alt="Logo" />
          </div>

          <div>
            <ul className="hidden md:flex items-center space-x-4">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen&&(
          <div className="md:hidden flex flex-col">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex-1 min-h-screen px-5 flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center w-full max-w-5xl mt-4 gap-x-20">
          <div className="w-1/2 pr-8 text-left">
            <h1 className="text-2xl font-bold">Hi, This is Fonseca Junior Here</h1>
            <p className="">
              Computer Science and Engineering (CSE) student with a strong interest in software development, cybersecurity, and advanced algorithms. Currently deepening my expertise in data structures such as Binary Search Trees and Linked Lists, along with programming in C++, focusing on designing efficient and scalable solutions.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={me} alt="Image" className="rounded-full"/>
          </div>
        </div>
      </div>


      <div className="min-h-screen flex justify-center items-center">

        <button className="custom-prev absolute left-0 z-10 bg-black text-white p-2 rounded-full"><ChevronLeft size={30} /></button>
        <button className="custom-next absolute right-0 z-10 bg-black text-white p-2 rounded-full"><ChevronRight size={30} /></button>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          className="w-full h-screen"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-screen">
              <h1>Front-End Skills and Frameworks</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-screen">
              <h1>Back-End Skills and Frameworks</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-screen">
              <h1>Database Skills and Tools</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-screen">
              <h1>DevOps Skills</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-screen">
              <h1>CyberSecurity and Networking Skills</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-screen">
              <h1>Soft Skills</h1>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

      

      <div className="min-h-screen">
        <h1>Certificates Div</h1>
        <ul>
          <li>Responsive Web Design Certification</li>
          <li>
            Red Hat OpenShift Administration I: Operating a Production Cluster (DO180 - RHA) - Ver. 4.14
          </li>
          <li>Introduction to CyberSecurity</li>
        </ul>
      </div>

      <div className="min-h-screen">
        <h1>Projects Div and Expirience</h1>
        <div>Project 1 - ERP System</div>
        <div>Project 2 - To Do List</div>
        <div>Project 3 - Chat App</div>
      </div>

      <div>Contact Me</div>
    </div>
  )
}

export default App;