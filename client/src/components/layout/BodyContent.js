import { Container, Row, Col } from "react-bootstrap";
import Scheduler from "../sources/Scheduler/Scheduler";
const BodyContent = () => {
    return (
        <Container style={{ marginTop: "80px" }} fluid>
            <Row className='mt-5 text-center schedule-container'>
                <Col md className='schedule'>
                    <Scheduler />
                </Col>
            </Row>
        </Container>
    );
};
export default BodyContent;
