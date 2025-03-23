import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo10.png";
import me from "./assets/profile.jpg";

function App () {
  const[isOpen, setIsOpen] = useState(false);

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

      <div className="min-h-screen">
        <h1>Skills Div</h1>
      </div>

      <div className="min-h-screen">
        <h1>Certificates Div</h1>
      </div>

      <div className="min-h-screen">
        <h1>Projects Div</h1>
      </div>

      
    </div>
  )
}

export default App;