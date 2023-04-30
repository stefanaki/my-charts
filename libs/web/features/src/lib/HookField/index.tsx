import React from 'react';
import { useFormContext } from "react-hook-form";
import { type HookFieldProps } from './types';

const Field: React.FC<HookFieldProps> = ({ name, label, type, placeholder, validation, props, errors, required }) => {
  const { register, formState } = useFormContext();

  const error = formState.errors?.[name];

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        {...register(name, { required, ...validation })}
        {...props}
      />
      {error && (
        <p className="error">{error.message?.toString()}</p>
      )}
      {errors && errors.required && (
        <p className="error">{errors.required}</p>
      )}
    </div>
  );
};

const HookField: React.FC<HookFieldProps> = ({ ...rest }) => <Field {...rest} /> ;

export default HookField;
export type { HookFieldProps };