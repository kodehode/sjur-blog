import { Container} from 'react-bootstrap';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function PageLayout ({children, className}) {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={theme.type}>
            <Container>
                <Navbar 
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <div className={`page-wrapper ${className}`}>
                    {children}
                </div>
                <footer className="page-footer">
                    <div>
                        <a href="https://www.linkedin.com/in/sjurbjorndalseter/">
                            <FontAwesomeIcon
                                className="clickable hoverable mr-3"
                                size="2x"
                                icon={faLinkedin} />
                        </a>{' '}
                        <a href="https://github.com/kodehode">
                            <FontAwesomeIcon
                                className="clickable hoverable mr-3"
                                size="2x"
                                icon={faGithubSquare} />
                        </a>{' '}
                        <a href="https://twitter.com/sjur">
                            <FontAwesomeIcon
                                className="clickable hoverable mr-3"
                                size="2x"
                                icon={faTwitterSquare} />
                        </a>
                    </div>
                </footer>
            </Container>
            <style jsx global>{`
                html, body {
                    background: ${theme.background};
                    color: ${theme.fontColor};
                    transition: color 0.2s ease-out 0sm background 0.2s ease-out 0s;
                }
            `}
            </style>
        </div>
    )
}