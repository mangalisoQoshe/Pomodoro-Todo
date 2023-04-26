import PropTypes from "prop-types";

//styles
import styles from "./Pomodoro.module.css";

export default function Counter(props) {
  return (
    <div className={styles.counter} ><span className={styles.count}> {props.count}</span></div>
  )
}

Counter.propTypes = {
    className: PropTypes.string,
    count: PropTypes.node.isRequired
  };