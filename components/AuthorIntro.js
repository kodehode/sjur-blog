
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const AuthorIntro = () =>
    <Row>
        <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <div className="mb-4 admin-intro d-flex">
                <Image
                    width={64}
                    height={64}
                    className="me-3 rounded-circle"
                    src="https://cdn.sanity.io/images/24vijzsz/production/f0a62a485e3f5ab63178900038dbb98f7562f194-800x800.jpg"
                    alt="Sjur profile image"
                />
                <div>
                    <h5 className="fw-bold mb-0">Hello,</h5>
                    <p className="welcome-text">
                        my name is Sjur. I&apos;m interested in product development, technology, gadgets, food, science... well, lots of stuff.
                        And this is a blog app I built to explore react, next.js, sanity and vercel. Not to blog.
                    </p>
                </div>
            </div>
            {/* AUTHOR INTRO ENDS */}
        </Col>
    </Row>

    export default AuthorIntro
