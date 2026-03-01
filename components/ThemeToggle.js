import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = ({ onChange, checked }) =>
<label>
  <Toggle
    className="day-night-toggle"
    checked={checked}
    icons={{
      checked: <FontAwesomeIcon inverse icon="sun" />,
      unchecked: <FontAwesomeIcon inverse icon="moon" />
    }}
    onChange={onChange} />
</label>

export default ThemeToggle;
