import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title="Login">
        <FormLogin />
        <p className="text-sm mt-5 text-center">
          Don't have an account?
          <Link to="/register" className="font-bold text-blue-600 ml-2">
            Sign Up
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
