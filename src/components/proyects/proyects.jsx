import React from "react";
import { Card, Button } from "react-bootstrap";
import profile_picture from '../../assets/profile_picture.jpg'


const proyectos = [
    {
        header: "name",
        text: "text in the card description otro texto",
        footer: "footer"
    }, {
        header: "name",
        text: "text in the card description",
        footer: "footer"
    }]

const Proyects = () => {

    return (<div className="container" style={{ margi: "0 auto", background: "blue", width: "90%" }}>
        <div className="d-flex">
            <div className="row row-col-lg-6 m-5" style={{ background: "red", width: "30%" }}>
                <div className="" style={{ width: "100%" }}>
                    <img src={profile_picture}
                        style={{ width: "100%" }}></img>
                    <div className=""><h1>social networks</h1> </div>
                </div>
            </div>
            <div className="row row-col-lg-6 mt-7" style={{ background: "yellow", width: "70%" }}>
                <div className="col" style={{ margin: "0 auto" }}>
                    {proyectos.map((element) => {
                        return (
                            <div className="m-2">
                                <Card style={{ width: '90%' }}>
                                    
                                    <Card.Body>
                                        <Card.Title style={{fontSize: "30px"}}>{element.header}</Card.Title>
                                        <Card.Img variant="top" src={profile_picture} style={{ width: "40%" }} ></Card.Img>
                                        <Card.Text>{element.text}
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>)
                    })
                    }
                </div>
            </div>
        </div>
    </div>)
}

export default Proyects