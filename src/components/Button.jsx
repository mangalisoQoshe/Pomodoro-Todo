import PropTypes from "prop-types";




export default function Button(props) {
  return <button className={props.className}>{props.children}</button>;
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};