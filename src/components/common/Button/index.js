import { BaseButton } from "./styles";

const Button = ({ onClick, label, icon, variant, size, type }) => {
  return (
    <BaseButton onClick={onClick} variant={variant} size={size} type={type}>
      {label || icon}
    </BaseButton>
  );
};

export default Button;
