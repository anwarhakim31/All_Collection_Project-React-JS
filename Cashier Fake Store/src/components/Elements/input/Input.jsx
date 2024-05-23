import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, id, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700  focus:outline-none"
      name={name}
      id={id}
      required
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
