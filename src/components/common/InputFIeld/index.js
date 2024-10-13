import { Input, InputContainer } from "./styles";

const InputField = ({ label, icon, width, onChange, value }) => {
  return (
    <InputContainer>
      {icon ? <span>{icon}</span> : <></>}
      <Input
        placeholder={label}
        width={width}
        padding={icon ? "4rem" : "1rem"}
        onChange={onChange}
        value={value || ""}
      />
    </InputContainer>
  );
};

export default InputField;
