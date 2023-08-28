const Input = (props) => {
  const { type, name, id, placeholder } = props;
  return (
    <div>
      <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
