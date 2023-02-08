import { StyledSelect } from "./style";

const Select = ({
  id,
  labelText,
  register,
  noValueOption,
  options,
  error,
  value,
  onChange,
}) => {
  return (
    <StyledSelect>
      <label htmlFor={id}>{labelText}</label>
      <select id={id} {...register} defaultValue={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </StyledSelect>
  );
};

export default Select;
