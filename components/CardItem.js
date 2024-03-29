
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';
import Image from 'next/image';

const CardItem = ({title, subtitle, date, image, author, link, mode = 'normal'}) => {
    return (
        <Card className={`fj-card ${mode}`}>
            <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
                
                <div className="view overlay">
                    { mode === 'placeholder' ?
                        <div className="image-placeholder" />
                        :
                        image &&
                        <a href={link.as}>
                            <Card.Img
                                src={
                                    urlFor(image)
                                        .height(300)
                                        .crop('center')
                                        .fit('clip')
                                        .url()}
                                alt="Card image cap"
                            />
                        </a>
                    }
                </div>
                <Card.Body>
                    {
                        mode == 'placeholder' ?
                        <>
                            <Card.Title className="card-main-title">Placehoder Title</Card.Title>
                            <Card.Text>Placeholder Subtitle</Card.Text>
                        </>
                        :
                        <>
                            <Card.Title className="card-main-title">
                                {title.length > 40 ? title.substr(0,40) + '...' : title}
                            </Card.Title>
                            <Card.Text>
                                {subtitle.length > 120 ? subtitle.substr(0,120) + '...' : subtitle}
                            </Card.Text>
                            <hr style={{width: 'calc(100% + 40px)', marginLeft: '-20px'}} />
                            {link &&
                            <Link {...link}>
                                
                                    Read More
                                
                            </Link>
                            }
                        </>
                    }
                </Card.Body>
            </div>
            </Card>
    );
}


export default CardItem;