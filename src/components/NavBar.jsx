import logo from "../assets/pngwing.com.png";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex items-center flex-shrink-0">
          <img className="w-10 mx-2" src={logo} alt="logo" style={{ width: "50px", margin: "5px" }} />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a href="https://github.com/PramuJ" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pramuditha-jayasundara-6657421a6" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/pramu_j?igsh=MXBoOXlqY3B6Z3lubQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/pramuditha.jayasundara?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
