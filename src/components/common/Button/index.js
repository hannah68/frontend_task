import * as S from "./styles";

const Button = ({ onClick, label, icon, variant, size, type, isActive, disabled }) => {
  return (
    <S.BaseButton onClick={onClick} variant={variant} size={size} type={type} isActive={isActive} disabled={disabled}>
      {label || icon}
    </S.BaseButton>
  );
};

export default Button;
