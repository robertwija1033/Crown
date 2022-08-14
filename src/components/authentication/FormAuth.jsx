import {
  FormInput,
  FormInputLabel,
  Group,
} from "../../styles/authentication/FormAuth.js";

const FormAuth = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInput {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormAuth;
