import { BaseButton } from "./styles";

const Button = ({ onClick, label, icon, variant }) => {
  return (
    <BaseButton onClick={onClick} variant={variant}>
      {label || icon}
    </BaseButton>
  );
};

export default Button;
