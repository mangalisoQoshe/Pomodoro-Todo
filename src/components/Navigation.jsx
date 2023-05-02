import { Link } from "react-router-dom";

//Styles
import styles from "./Navigation.module.css";

//library imports
import { PencilSquareIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  return (
    <nav>
      <ul role="list" className={styles.nav}>
        <li>
          <Link to="/">
            {
              <ClockIcon
                className={styles["svg-icon"]}
                strokeWidth={2}
                height={28}
                width={30}
              />
            }
            Pomodoro
          </Link>
        </li>
        <li>
          <Link to="/todo" >
            {" "}
            {
              <PencilSquareIcon
                className={styles["svg-icon"]}
                strokeWidth={2}
                height={29}
                width={35}
              />
            }
            To-Do
          </Link>
        </li>
      </ul>
    </nav>
  );
}
