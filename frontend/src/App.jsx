import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo10.png";
import me from "./assets/profile.jpg";

function App () {
  const[isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Alterna automaticamente a cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSkill();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSkill = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 4); // 4 porque temos 6 divs e queremos mostrar 3 por vez
  };

  const prevSkill = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

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
        <h1>Skills Div</h1>
          <div className="flex justify-center w-1/3">Front-End Skills and Frameworks</div>
          <div className="flex justify-center w-1/3">Back-End Skills and Frameworks</div>
          <div className="flex justify-center w-1/3">Database Skills and Tools</div>
          <div className="flex justify-center w-1/3">DevOps Skills</div>
          <div className="flex justify-center">CyberSecurity and Networking Skills</div>
          <div className="flex justify-center">Soft Skills</div>
      </div>





      <div className="relative flex justify-center items-center h-screen bg-gray-100">
        {/* Botão para voltar */}
        <button
          onClick={prevSkill}
          className="absolute left-5 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          ⬅️
        </button>

        {/* Contêiner fixo das skills */}
        <div className="overflow-hidden  h-1/3 flex items-center">
          {/* Wrapper que move horizontalmente */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {/* Você pode editar as skills diretamente aqui */}
            <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300 mx-2">
              <h2 className="text-xl font-bold mb-4">Front-End Skills</h2>
              <ul>
                <li>• HTML</li>
                <li>• CSS</li>
                <li>• JavaScript</li>
                <li>• React</li>
              </ul>
            </div>

            <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300 mx-2">
              <h2 className="text-xl font-bold mb-4">Back-End Skills</h2>
              <ul>
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• Django</li>
              </ul>
            </div>

            <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300 mx-2">
              <h2 className="text-xl font-bold mb-4">Database Skills</h2>
              <ul>
                <li>• MySQL</li>
                <li>• MongoDB</li>
                <li>• Firebase</li>
              </ul>
            </div>

            <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300 mx-2">
              <h2 className="text-xl font-bold mb-4">DevOps Skills</h2>
              <ul>
                <li>• Docker</li>
                <li>• Kubernetes</li>
                <li>• AWS</li>
              </ul>
            </div>

            <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300 mx-2">
              <h2 className="text-xl font-bold mb-4">CyberSecurity</h2>
              <ul>
                <li>• PenTesting</li>
                <li>• Firewalls</li>
                <li>• Wireshark</li>
              </ul>
            </div>

            <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300 mx-2">
              <h2 className="text-xl font-bold mb-4">Soft Skills</h2>
              <ul>
                <li>• Communication</li>
                <li>• Teamwork</li>
                <li>• Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botão para avançar */}
        <button
          onClick={nextSkill}
          className="absolute right-5 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          ➡️
        </button>
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