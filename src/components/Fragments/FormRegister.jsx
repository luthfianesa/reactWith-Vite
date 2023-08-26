import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Name" type="text" name="fullname" id="fullname" placeholder="Your Full Name" />
      <InputForm label="Email" type="email" name="email" id="email" placeholder="example@gmail.com" />
      <InputForm label="Password" type="password" name="password" id="password" placeholder="******" />
      <InputForm label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" placeholder="******" />
      <Button classname="bg-blue-600 w-full"> Register </Button>
    </form>
  );
};

export default FormRegister;
