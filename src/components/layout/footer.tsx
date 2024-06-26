import { BiMailSend } from "react-icons/bi"
import { FaGithub, FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="border-t-2 border-primery flex justify-between py-4 mt-20">
        <div className="flex">
            <a href="mailto:contato.alnnu@gmail.com" className="text-primery text-4xl hover:-translate-y-1 transition-transform cursor-pointer"><BiMailSend/></a>
            <a href="https://github.com/alnnu" className="text-primery text-4xl mx-10 hover:-translate-y-1 transition-transform cursor-pointer" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/luann__felipe_/" className="text-primery text-4xl hover:-translate-y-1 transition-transform cursor-pointer" target="_blank"><FaInstagram/></a>
        </div>
        <div className="text-xl">© 2024 Luann Felipe</div>
    </footer>
  )
}

export default Footer