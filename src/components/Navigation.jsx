import { Link } from "react-router-dom";

//Styles
import styles from "./Navigation.module.css";



export default function Navigation() {
  return (
    <nav>
      <ul role="list" className={styles.nav}>
        <li>
          <Link to="/">
            {
              
            }
            Pomodoro
          </Link>
        </li>
        <li>
          <Link to="/todo" >
            {" "}
            {
          
            }
            My Task List
          </Link>
        </li>
      </ul>
    </nav>
  );
}
