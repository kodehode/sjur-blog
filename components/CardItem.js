
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({title, subtitle, date, image, author, link, mode = 'normal'}) => {
    return (
        <Card className={`fj-card ${mode}`}>
            <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
                <Card.Header
                className="d-flex flex-row">
                <img
                    src={author?.avatar || 'https://via.placeholder.com/150'}
                    className="rounded-circle mr-3"
                    height="50px"
                    width="50px"
                    alt="avatar"/>
                <div>
                    {
                        mode == 'placeholder' ?
                        <>
                            <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                            <Card.Text className="card-date">Placehoder Date</Card.Text>
                        </>
                        :
                        <>
                            <Card.Title className="font-weight-bold mb-1">{author?.name || 'Anonymous'}</Card.Title>
                            <Card.Text className="card-date">{date}</Card.Text>
                        </>
                    }
                </div>
                </Card.Header>
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
                                {subtitle.length > 40 ? subtitle.substr(0,40) + '...' : subtitle}
                            </Card.Text>
                            <hr style={{width: 'calc(100% + 40px)', marginLeft: '-20px'}} />
                            {link &&
                            <Link {...link}>
                                <a>
                                    Read More
                                </a>
                            </Link>
                            }
                        </>
                    }
                </Card.Body>
            </div>
            </Card>
    )
}

export default CardItem;