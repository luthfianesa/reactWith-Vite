import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayout title="Register" type="Register">
        <FormRegister />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
