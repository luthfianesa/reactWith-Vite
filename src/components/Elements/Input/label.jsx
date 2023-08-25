const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-8">
        {children}
      </label>
    </div>
  );
};

export default Label;
