import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title } = props;

  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        {children}
        {/* Menggunakan Ternary */}
        <p className="text-sm mt-5 text-center">
          {title === "Login" ? "Don't have an account?" : "Already have an account?"}

          {/* Menggunakan Operator && */}
          {title === "Login" && (
            <Link to="/register" className="font-bold text-blue-600 ml-2">
              Register
            </Link>
          )}
          {title === "Register" && (
            <Link to="/login" className="font-bold text-blue-600 ml-2">
              Login
            </Link>
          )}
        </p>
        {/* Menggunakan komponen */}
        {/* <Navigation title={title} /> */}
      </div>
    </div>
  );
};

// Conditional Rendering menggunakan komponen
// const Navigation = ({ title }) => {
//   if (title === "Login") {
//     return (
//       <p className="text-sm mt-5 text-center">
//         Don't have an account?
//         <Link to="/register" className="font-bold text-blue-600 ml-2">
//           Register
//         </Link>
//       </p>
//     );
//   } else {
//     return (
//       <p className="text-sm mt-5 text-center ">
//         Already have an account?
//         <Link to="/login" className="font-bold text-blue-600 ml-2">
//           Login
//         </Link>
//       </p>
//     );
//   }
// };

export default AuthLayout;
