import logo from "/src/assets/raviKumarLogo.webp";
import {FaGithub, FaLinkedin} from "react-icons/fa"
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">   
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/khushidoval001" target ="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin/>

        </a>
        <a href="https://github.com/Kewcat" target ="_blank" rel="noopener noreferrer" aria-label="Github">
        <FaGithub/>

        </a>
      </div>

 
    </nav>
  );
};


