import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import profile_picture from '../../assets/profile_picture.jpg';
import { Link } from "react-router-dom";




const Proyects = () => {

    const [repo, setRepo] = useState();
    //const navigate = useNavigate();

    const getUserInfo = async () =>{
    const {data} = await axios.get('https://api.github.com/users/J0h4nS10/repos');
    console.log(data)
    const response = data.filter((element)=> element.fork === false );
    setRepo(response)
    console.log(response);
    return response
    }

    useEffect(()=>{getUserInfo()},[])

    return (<div className="container" style={{ margin: "0 auto", width: "90%" }}>
        <div className="d-flex">
            <div className="row row-col row-col-lg-6 m-5 pt-5" style={{ width: "30%" }}>
                <div className="" style={{ width: "100%" }}>
                    <img src={profile_picture}
                        style={{ width: "100%" }}></img>
                    <div className="mt-2">
                        <h1>social netwt2orks</h1> </div>
                </div>
            </div>
            <div className="row row-col row-col-lg-6 mt-7" style={{ width: "70%" }}>
                <div className="col" style={{ margin: "0 auto" }}>
                    {repo ? repo.map((element, index) => {
                        return (
                            <div key={index} className="m-2">
                                <Card style={{ width: '90%' }}>   
                                    <Card.Body>
                                        <Card.Title style={{fontSize: "30px"}}>{element.name}</Card.Title>
                                        <Card.Img variant="top" src={profile_picture} style={{ width: "40%" }} ></Card.Img>
                                        <Card.Text>{element.description}
                                        </Card.Text>
                                        <Card.Text><Link to={element.homepage}>{element.homepage} </Link></Card.Text>
                                        <Button variant="primary" onClick={()=>{window.location.href = element.html_url}}>
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
    </div>)
}

export default Proyects