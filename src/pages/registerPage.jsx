import FormRegister from "../components/Fragments/FormRegister";
import RegisterLayout from "../components/Layouts/RegisterLayout";

const RegisterPage = () => {
  return (
    <div>
      <RegisterLayout title="Register">
        <FormRegister />
      </RegisterLayout>
    </div>
  );
};

export default RegisterPage;
