import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Error } from '../Input/styles';
import { PhoneInputWrapper } from './styles';

const Example = ({
  phoneNumber,
  setPhoneNumber,
  name,
  register,
  validation,
  errors,
  type,
  ...rest
}) => {
  return (
    <>
      <PhoneInputWrapper>
        <PhoneInput
          placeholder="Enter phone number"
          type={type}
          {...register(name, validation)}
          {...rest}
          onChange={(e) => setPhoneNumber(e)}
          defaultCountry="US"
        />
        {errors[name]?.type === 'required' && !phoneNumber && (
          <Error role="alert" className="mb-0">
            {errors[name] && <span>This field is required</span>}
          </Error>
        )}
      </PhoneInputWrapper>
    </>
  );
};

export default Example;
