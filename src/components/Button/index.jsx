import StyledButton from "./style";

const Button = ({ disabled, styleType, type, onClick, children }) => {
  return (
    <StyledButton
      disabled={disabled}
      styleType={styleType}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
