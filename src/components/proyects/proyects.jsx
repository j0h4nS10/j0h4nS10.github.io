import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import profile_picture from '../../assets/profile_picture.jpg';
import { Link } from "react-router-dom";
import Technology from "../Technology/Technology";
import Social from "../Social/Social";




const Proyects = () => {

    const [repo, setRepo] = useState();
    //const navigate = useNavigate();

    const getUserInfo = async () => {
        const { data } = await axios.get('https://api.github.com/users/J0h4nS10/repos');
        console.log(data)
        const response = data.filter((element) => element.fork === false);
        setRepo(response)
        console.log(response);
        return response
    }

    useEffect(() => { getUserInfo() }, [])

    return (<><div className="container mt-2" style={{ margin: "0 auto", width: "100%" }}>
        <div className="row row-cols-1 row-cols-lg-2" style={{margin: "0 auto"}}>
            <div className="col-sm-11 col-lg-4 border m5" style={{margin: "0 auto" }}>
                <div className="mt-5" style={{ }}>
                    <div className="mt-5">
                        <img src={profile_picture}
                        style={{ width: "50%"}}></img>
                    </div>
                    <div className="mt-5">
                        <h1>Johan S</h1>
                        <h5>About Me</h5>
                        <p>Hello, my name is Johan, i'm a seniur developer soy Hello, my name is Johan, i'm a seniur developer soy Hello, my name is Johan, 
                            i'm a seniur developer soy Hello, my name is Johan, i'm a seniur developer soy Hello, my name is Johan, i'm a seniur developer soy
                             Hello, my name is Johan, i'm a seniur developer soy Hello, my name is Johan, i'm a seniur developer soy </p> 
                    </div>
                    <Social></Social><br></br>
                    <Technology></Technology>
                </div>
            </div>{/*row-cols-1 row-cols-lg-2 border*/}
            <div className="col-sm-11 col-lg-8 border m5" style={{margin: "0 auto" }}>
                <div className="col" style={{ }}>
                    {repo ? repo.map((element, index) => {
                        return (
                            <div key={index} className="m-2">
                                <Card style={{ }}>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "30px" }}>{element.name}</Card.Title>
                                        <div className="" style={{ width: "10%", margin: "0 auto"}}> 
                                            <Card.Img variant="top" src={profile_picture} style={{ width: "100%" }} ></Card.Img>
                                        </div>
                                        <Card.Text>{element.description}</Card.Text>
                                        <Card.Text><Link to={element.homepage}>{element.homepage} </Link></Card.Text>
                                        <Button variant="primary" onClick={() => { window.location.href = element.html_url }}>
                                            View Code</Button>
                                    </Card.Body>
                                </Card>
                            </div>)
                    })
                        : <h1>Not found</h1>
                    }
                </div>
            </div>

        </div>


    </div></>)
}

export default Proyects