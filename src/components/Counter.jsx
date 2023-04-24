import PropTypes from "prop-types";

//styles
import styles from "./Pomodoro.module.css";

export default function Counter({count}) {
  return (
    <div className={styles.counter} ><span className={styles.count}> {count}</span></div>
  )
}

Counter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };