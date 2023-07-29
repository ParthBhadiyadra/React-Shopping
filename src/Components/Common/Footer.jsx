import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <Container fluid className="mt-3 bg-dark">
            <Row className="pt-3">
                <Col lg={3} >
                     <h4 className="text-white ps-4" >company</h4>
                    <ul>
                        <li><a href="#/as">about us</a></li>
                        <li><a href="#/sd">our services</a></li>
                        <li><a href="#/ds">privacy policy</a></li>
                        <li><a href="#/sdf">affiliate program</a></li>
                    </ul></Col>
                <Col lg={3}>
                    <h4 className="text-white ps-4">get help</h4>
                    <ul>
                        <li><a href="#/asd">FAQ</a></li>
                        <li><a href="#/tt">shipping</a></li>
                        <li><a href="#/ty">returns</a></li>
                        <li><a href="#/yt">order status</a></li>
                        <li><a href="#/df">payment options</a></li>
                    </ul></Col>
                <Col lg={3} >
                    <h4 className="text-white ps-4">online shop</h4>
                    <ul>
                        <li><a href="#/watcj">watch</a></li>
                        <li><a href="#/bag">bag</a></li>
                        <li><a href="#/shoes">shoes</a></li>
                        <li><a href="#/dress">dress</a></li>
                    </ul></Col>
                <Col lg={3}>
                    <h4 className="text-white ps-4">follow us</h4>
                    <div className="social-links">
                        <a href="#/facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#/twi"><i className="fab fa-twitter"></i></a>
                        <a href="#/in"><i className="fab fa-instagram"></i></a>
                        <a href="#/li"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
