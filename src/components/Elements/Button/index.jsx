const Button = (props) => {
  return (
    <div>
      <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">
        {props.buttonName}
        {props.children} {/* Special props, diterapkan pada tombol 'Buy Now'*/}
      </button>
    </div>
  );
};

export default Button