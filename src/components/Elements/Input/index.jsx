import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, name, id, placeholder } = props;
  return (
    <div className="mb-5">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
