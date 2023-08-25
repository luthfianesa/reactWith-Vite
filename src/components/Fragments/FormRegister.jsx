import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Name" type="text" placeholder="Your Full Name" name="name" />
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <InputForm label="Confirm Password" type="password" placeholder="******" name="confirmPassword" />
      <Button classname="bg-blue-600 w-full"> Register </Button>
    </form>
  );
};

export default FormRegister;
