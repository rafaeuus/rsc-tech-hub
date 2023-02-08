import { useState } from "react";
import StyledInput from "./style";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Input = ({
  id,
  labelText,
  placeholder,
  type,
  register,
  error,
  buttonShow,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInput>
      <label htmlFor={id}>{labelText}</label>
      <div>
        <div>
          <input
            placeholder={placeholder}
            type={buttonShow ? (showPassword ? "text" : "password") : type}
            id={id}
            {...register}
            disabled={disabled}
          />
          {buttonShow === "true" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VscEye color="grey" />
              ) : (
                <VscEyeClosed color="grey" />
              )}
            </button>
          )}
        </div>
        {error && <p>{error.message}</p>}
      </div>
    </StyledInput>
  );
};

export default Input;
