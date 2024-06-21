import logo from "../assets/pngwing.com.png"
import { FaGithub , FaInstagram , FaLinkedin , FaFacebook} from 'react-icons/fa'

function NavBar() {
  return (
    <div>
        <nav className="flex items-center justify-between py-6 mb-20">
            <div className="flex items-center flex-shrink-0 ">
                <img className="w-10 mx-2" src={logo} alt="logo" style={{width:"50px" , margin:"5px" }}/>
                
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl m8">
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
                <FaFacebook />
            </div>
                
        </nav>
    </div>
  )
}

export default NavBar