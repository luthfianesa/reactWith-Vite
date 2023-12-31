import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title="Login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
