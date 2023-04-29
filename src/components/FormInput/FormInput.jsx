import "./FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form__item">
      <input className="form__input" {...otherProps} />
      {label && (
        <label
          className={`form__label ${
            otherProps.value.length ? "form__label--shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
