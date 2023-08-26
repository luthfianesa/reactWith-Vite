import FormRegister from "../components/Fragments/FormRegister";
import RegisterLayout from "../components/Layouts/RegisterLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <RegisterLayout title="Register">
        <FormRegister />
        <p className="text-sm mt-5 text-center">
          Already have an account?
          <Link to="/login" className="font-bold text-blue-600 ml-2">
            Sign In
          </Link>
        </p>
      </RegisterLayout>
    </div>
  );
};

export default RegisterPage;
