import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Menu, X} from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp, SiX} from "react-icons/si";
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
            <h1 className="text-2xl font-bold mb-4">Hi, This is Fonseca Junior Here</h1>
            <p className="mb-4">
              Computer Science and Engineering (CSE) student with a strong interest in software development, cybersecurity, and advanced algorithms. Currently deepening my expertise in data structures such as Binary Search Trees and Linked Lists, along with programming in C++, focusing on designing efficient and scalable solutions.
            </p>

            <div className="flex gap-4 items-center">
              <div className="bg-amber-700 w-30 flex items-center justify-center h-10 rounded-md gap-2 mt-1.5">
                <a className="" target="_blank" rel="noopener noreferrer" href="https://wa.me/258877251624">Let's Chat</a>
                <SiWhatsapp />
              </div>

              <a href="">dowmload resume</a>
            </div>
            
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={me} alt="Image" className="rounded-full"/>
          </div>
        </div>
      </div>


      <div className="min-h-screen flex justify-center items-center relative">

        <h1 className="text-3xl font-bold flex absolute items-center top-11">My Skills</h1>

        <button className="custom-prev absolute left-0 z-10 bg-transparent text-yellow-600 p-6 rounded-full transition-transform duration-300 hover:scale-210">
          <ChevronLeft size={20} />
        </button>

        <button className="custom-next absolute right-0 z-10 bg-transparent text-yellow-600 p-6 rounded-full transition-transform duration-300 hover:scale-210">
          <ChevronRight size={20} />
        </button>
        
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
          className="w-full h-[60vh]"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-[25vw] h-[60vh] bg-white rounded-3xl shadow-md p-4 flex justify-center items-center">
                <h1 className="flex absolute top-10">Front-End Skills and Frameworks</h1>
                <ul>
                  <li>
                    <h2 className="text-lg font-bold">Languages</h2>
                    <ul>
                      <li>HTML</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                  </li>
                  <ul>
                    <li>
                      <h2 className="text-lg font-bold">Frameworks</h2>
                      <ul>
                        <li>ReactJs</li>
                        <li>NextJs</li>
                      </ul>
                    </li>
                  </ul>
                  <li>
                    <h2 className="text-lg font-bold">Tools</h2>
                    <ul>
                      <li>Tailwind CSS</li>
                      <li>Bootstrap</li>
                      <li>Redux</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-[25vw] h-[60vh] bg-white rounded-3xl shadow-md p-4 flex justify-center items-center">
                <h1 className="flex absolute top-10">Back-End Skills and Frameworks</h1>
                <ul>
                  <li>
                    <h2 className="text-lg font-bold">Languages</h2>
                    <ul>
                      <li>Node.js</li>
                      <li>C++</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">Frameworks</h2>
                    <ul>
                      <li>Express.Js</li>
                      <li>Nest.js</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">APIs & Autenticação</h2>
                    <ul>
                      <li>REST</li>
                      <li>GraphQL</li>
                      <li>JWT</li>
                      <li>OAuth</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-[25vw] h-[60vh] bg-white rounded-3xl shadow-md p-4 flex justify-center items-center">
                <h1 className="flex absolute top-10">DataBase Skills and Tools</h1>
                <ul>
                  <li>
                    <h2 className="text-lg font-bold">SQL</h2>
                    <ul>
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">NoSQL</h2>
                    <ul>
                      <li>MongoDB</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">ORM & Query Builders</h2>
                    <ul>
                      <li>Mongoose</li>
                      <li>Prisma</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-[25vw] h-[60vh] bg-white rounded-3xl shadow-md p-4 flex justify-center items-center">
                <h1 className="flex absolute top-10">DevOps Skills and Tools</h1>
                <ul>
                  <li>
                    <h2 className="text-lg font-bold">CI/CD</h2>
                    <ul>
                      <li>GitHub Actions</li>
                      <li>Jenkins</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">Cloud Platforms</h2>
                    <ul>
                      <li>AWS (EC2, S3)</li>
                      <li>Firebase</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">Containerization</h2>
                    <ul>
                      <li>Docker</li>
                      <li>Openshift</li>
                      <li>Kubernetes</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-[25vw] h-[60vh] bg-white rounded-3xl shadow-md p-4 flex justify-center items-center">
                <h1 className="flex absolute top-10">CyberSecurity and Networks Skills</h1>
                <ul>
                  <li>
                    <h2 className="text-lg font-bold">Networking</h2>
                    <ul>
                      <li>Firewalls</li>
                      <li>VPN</li>
                      <li>CCNA</li>
                      <li>TCP/IP</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">Web CyberSecurity & Pentesting</h2>
                    <ul>
                      <li>OWASP Top 10</li>
                      <li>Burp Suit</li>
                      <li>Metasploit</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg font-bold">CyberSecurity Tools</h2>
                    <ul>
                      <li>SIEM</li>
                      <li>Nmap</li>
                      <li>Wireshark</li>
                      <li>Snort</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-[25vw] h-[60vh] bg-white rounded-3xl shadow-md p-4 flex justify-center items-center relative">
                <h1 className="flex absolute top-10">Soft Skills</h1>
                <ul className="flex-row">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      

      <div className="min-h-screen flex flex-col justify-center items-center gap-4 space-y-4">
        <div className="flex">
          <h1 className="flex justify-center items-center font-bold text-2xl">Certificates Div</h1>
        </div>

        <div className="flex gap-2">
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
            <h1>Responsive Web Design Certification</h1>
          </div>
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
            <h1>Red Hat OpenShift Administration I: Operating a Production Cluster (DO180 - RHA)</h1>
          </div>
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
            <h1>Introduction to CyberSecurity</h1>
          </div>
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
            <h1>Networking Devices and Initial Configuration</h1>
          </div>
        </div>     
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center gap-6 ">
        <h1  className="text-2xl font-bold ">Projects </h1>
        <div className="flex gap-4">
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
          Project 1 - ERP System
          </div>
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
          Project 2 - To Do List
          </div>
          <div className="flex justify-center items-center w-[22vw] bg-amber-600 rounded-md h-[50vh]">
          Project 3 - Chat App
          </div>
        </div>
        
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center items-center text-2xl font-bold">
          <h1>Experience and Education</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center w-[40vw] bg-amber-600 rounded-md h-[70vh]">
            <h1>Experience</h1>
            
          </div>
          <div className="flex justify-center items-center w-[40vw] bg-amber-600 rounded-md h-[70vh]">
            <h1>Education</h1>
          </div>
        </div>
          
      </div>

      <div className="min-h-screen flex justify-items-start ">
        <div className="w-1/2 flex flex-col justify-center ms-50 text-left gap-2">
          <h1 className="flex text-3xl font-bold italic">Contact Me</h1>
          <h2 className="flex italic">Let's Work Together</h2>
          <p className="flex  ">I will be glad to help or work with you</p>
          <ul>
            <li>Haryana, India</li>
            <li>+258 877251624</li>
            <li>sheltonfonsecad@gmail.com</li>
          </ul>

          <div className="bg-amber-700 w-30 flex items-center justify-center h-10 rounded-md gap-2 mt-1.5">
            <a className="" target="_blank" rel="noopener noreferrer" href="https://wa.me/258877251624">Let's Chat</a>
            <SiWhatsapp />
          </div>

          <div className="flex gap-8 py-4">
            <a href="https://github.com/fonsecajr2/" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/fonseca-jr" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
            <a href="https://www.instagram.com/fonseca_jr3/" target="_blank" rel="noopener noreferrer"><SiInstagram/></a>
            <a href="https://x.com/fnsc2k19" target="_blank" rel="noopener noreferrer"><SiX /></a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App;