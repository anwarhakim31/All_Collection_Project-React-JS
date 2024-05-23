import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  return (
    <div className="mb-6">
      <Label id={props.id}>{props.label}</Label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
        name={props.name}
        ref={ref}
      />
    </div>
  );
});

InputForm.displayName = "InputForm";

export default InputForm;
