
import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
    <Row>
        <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <Media className="mb-4 admin-intro">
            <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="https://cdn.sanity.io/images/24vijzsz/production/f0a62a485e3f5ab63178900038dbb98f7562f194-800x800.jpg"
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5 className="font-weight-bold mb-0">Hello,</h5>
                <p className="welcome-text">
                My name is Sjur. I am a project/product manager and general technology enthusiast.
                And this is a blog app I built to explore ract/next/sanity. Not to blog.
                </p>
            </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
        </Col>
    </Row>

    export default AuthorIntro