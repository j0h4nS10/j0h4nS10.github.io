import React from "react";
import { Card } from "react-bootstrap";


const proyectos = [
    {
        header: "name",
        text: "text in the card description",
        footer: "footer"
    }, {
        header: "name",
        text: "text in the card description",
        footer: "footer"
    }]

const Proyects = () => {

    return (<div className="container" style={{ margi: "0 auto", background: "blue" }}>
        <div className="d-flex">
            <div className="row row-col-lg-6 m-2" style={{ background: "red" }}>
                <div className="" style={{ width: "40%" }}>
                    <img src="/img.jpf"></img>
                </div>
            </div>
            <div className="row row-col-lg-6 m-2" style={{ background: "yellow" }}>
                <div className="">
                    {proyectos.map((element) =>{
                        return(
                        <div className="col"><Card>
                        <Card.Header>{element.name}</Card.Header>
                        <Card.Text>{element.text}</Card.Text>
                        <Card.Footer>{element.footer}</Card.Footer>
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