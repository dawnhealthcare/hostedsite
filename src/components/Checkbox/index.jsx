import { Error } from '../Input/styles';

const Checkbox = ({
  label,
  onChange,
  name,
  register,
  validation,
  errors,
  type,
  setIsOpen,
  isOpen,
  ...rest
}) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          {...rest}
          {...register(name, validation)}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <span className="ms-3">{label}</span>
      </label>
      {errors[name]?.type === 'required' && !isOpen && (
        <Error role="alert" className="mb-0">
          {errors[name] && <span>Required field</span>}
        </Error>
      )}
    </>
  );
};

export default Checkbox;
