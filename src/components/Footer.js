import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer(){

    return(
        <Container className="footer text-center align-items-center p-3 bgdarkgrey" fluid>
            <p className="m-0 mb-2" >Copyright © 2023 FitSure.</p>
            <p className="m-0">Created by: <a className = "link" href="https://github.com/Bhargav-44">Bhargav</a>, 
            <a className = "link" href="https://github.com/bugbreaker18"> Shreyansh</a>, 
            <a className = "link" href="https://github.com/Sandeep-Yadav-09"> Sandeep</a>,
            <a className = "link" href="https://github.com/codezen879"> Sanchit </a>
            </p>
        </Container>
    );
}
export default Footer