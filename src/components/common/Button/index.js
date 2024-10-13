import * as S from "./styles";

const Button = ({ onClick, label, icon, variant, size, type, isActive }) => {
  return (
    <S.BaseButton onClick={onClick} variant={variant} size={size} type={type} isActive={isActive}>
      {label || icon}
    </S.BaseButton>
  );
};

export default Button;
