import "./FormInput.scss";

const FormInput = ({ label, isError, errorMessageResponse, ...otherProps }) => {
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
      {isError && <p className="form__text--error">{errorMessageResponse}</p>}
    </div>
  );
};

export default FormInput;
