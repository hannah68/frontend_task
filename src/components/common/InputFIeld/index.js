import { Input, InputContainer } from "./styles";

const InputField = ({ label, icon, width }) => {
  return (
    <InputContainer>
      {icon ? <span>{icon}</span> : <></>}
      <Input placeholder={label} width={width} padding={icon ? "4rem" : "1rem"} />
    </InputContainer>
  );
};

export default InputField;
