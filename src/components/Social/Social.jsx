import instagram from '../../assets/instagram.png';
import pngtwitter from '../../assets/pngtwitter.png';
import facebook from '../../assets/facebook.png';

const Social = () => {

    return (<><div className="container" style={{ margin: "0 auto" }}>
        <div>
            <ul className="nav justify-content-cente">
                <li className="nav-item margin-social"><a href="https://twitter.com" className="nav-link px-2 text-body-secondary"><img
                    className="social-network" src={pngtwitter} alt="Twitter" style={{ width: "50px" }} /></a></li>
                <li className="nav-item"><a href="https://instagram.com" className="nav-link px-2 text-body-secondary">
                    <img className="social-network" src={instagram} alt="Instagram" /></a></li>
                <li className="nav-item"><a href="https://instagram.com" className="nav-link px-2 text-body-secondary"><img
                    className="social-network" src={facebook} alt="Facebook" /></a></li>
            </ul>
        </div>
    </div></>)
}

export default Social