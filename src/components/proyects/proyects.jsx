import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import profile_picture from '../../assets/profile_picture.jpg';
import { Link } from "react-router-dom";




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

    return (<><div className="container" style={{ margin: "0 auto", width: "100%", background: "gray" }}>
        <div className="row row-cols-1 row-cols-lg-2" style={{background: "blue", margin: "0 auto"}}>
            <div className="col m-5 border" style={{ width: "30%", margin: "0 auto", background: "red" }}>
                <div className="" style={{ }}>
                    <img src={profile_picture}
                        style={{ width: "50%"}}></img>
                    <div className="mt-2">
                        <h1>social netwt2orks</h1> </div>
                </div>
            </div>
            <div className="row-cols-1 row-cols-lg-2 border" style={{ }}>
                <div className="col" style={{width:"95%" , margin: "0 auto", background: "yellow" }}>
                    {repo ? repo.map((element, index) => {
                        return (
                            <div key={index} className="m-5">
                                <Card style={{  }}>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "30px" }}>{element.name}</Card.Title>
                                        <Card.Img variant="top" src={profile_picture} style={{ width: "40%" }} ></Card.Img>
                                        <Card.Text>{element.description}
                                        </Card.Text>
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