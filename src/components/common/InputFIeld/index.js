import * as S from "./styles";

const InputField = ({ label, icon, width, onChange, value }) => {
  return (
    <S.InputContainer>
      {icon ? <span>{icon}</span> : <></>}
      <S.Input
        placeholder={label}
        width={width}
        padding={icon ? "4rem" : "1rem"}
        onChange={onChange}
        value={value || ""}
      />
    </S.InputContainer>
  );
};

export default InputField;
