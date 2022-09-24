
import { Card } from "react-bootstrap";
import Link from 'next/link';

const CardListItem = ({title, subtitle, date, author, link, mode = 'normal'}) => {

    return (
        <Card className={`fj-card fj-card-list ${mode}`}>
            <div className="card-body-wrapper">
              <Card.Body>
                { mode === 'placeholder' ?
                  <div>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placeholder Subtitle</Card.Text>
                  </div>
                  :
                  <div>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                  </div>
                }
              </Card.Body>
            </div>
            { link &&
                <Link {...link}>
                    <a className="card-button">
                        Read More
                    </a>
                </Link>
            }
          </Card>
    )
}

export default CardListItem;