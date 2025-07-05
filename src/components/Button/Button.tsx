import { ButtonWrapper } from "./Button.style";

const Button = ({
  label,
  onClick,
  variant = 0,
}: {
  label: string;
  onClick: () => void;
  variant?: number;
}) => {
  return (
    <ButtonWrapper onClick={onClick} variant={variant}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
