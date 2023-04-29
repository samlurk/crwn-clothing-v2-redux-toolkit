import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "button--google-sign-in",
  inverted: "button--inverted",
};
const Button = ({ children, buttonType, otherProps }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
