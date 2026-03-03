import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = ({ onChange, checked }) => (
  <Form.Check
    type="switch"
    id="theme-switch"
    className="day-night-toggle"
    checked={checked}
    onChange={onChange}
    aria-label="Toggle theme"
    label={<FontAwesomeIcon inverse icon={checked ? "sun" : "moon"} />}
  />
);

export default ThemeToggle;
