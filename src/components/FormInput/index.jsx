import { Input, Label, ErrorMessage, FormInputContainer } from "./index.styles";

const FormInput = ({ label, isError, errorMessageResponse, ...otherProps }) => {
  return (
    <FormInputContainer>
      <Input {...otherProps} />
      {label && <Label shrink={otherProps.value.length}>{label}</Label>}
      {isError && <ErrorMessage>{errorMessageResponse}</ErrorMessage>}
    </FormInputContainer>
  );
};

export default FormInput;
