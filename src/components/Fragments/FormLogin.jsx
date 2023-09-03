import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    // console.log("login");
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" name="email" id="email" placeholder="example@gmail.com" />
      <InputForm label="Password" type="password" name="password" id="password" placeholder="******" />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
