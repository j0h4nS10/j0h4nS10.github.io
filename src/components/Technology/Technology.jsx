import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";


const Technology = () => {

    return (<>
        <div className="container">
            <h1>Technology</h1>
            <h1>
                <FaHtml5 />
                <FaCss3Alt />
                <BiLogoJavascript />
                <FaReact />
                <BiLogoNodejs />
                <BiLogoMongodb />
                <BsGithub />
            </h1>
        </div>
    </>)
}

export default Technology