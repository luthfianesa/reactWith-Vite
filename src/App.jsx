import React from "react";
import FormLogin from "./components/Fragments/FormLogin";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./Pages/registerPage";

// Class Component
// class Button extends React.Component {
//   render() {
//     return (
//       <div>
//         <button class="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
//           Buy now
//         </button>
//       </div>
//     );
//   }
// }

// Function Component
// const Button = (props) => {
// Menggunakan Konsep Destructuring
// const { children = "...", variant = "bg-black" } = props;
// {
/* Memberikan default value untuk elemen */
// }
//   return (
//     <div>
//       <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
//         {children}
//       </button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="flex justify-center bg-blue-600 min-h-screen items-center">
//       <div className="flex gap-x-3">
//         <Button variant="bg-red-700"> Buy Now</Button>
//         <Button variant="bg-slate-700">Login </Button>
//         <Button variant="bg-black">Register </Button>
//         <Button />
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="flex justify-center  min-h-screen items-center">
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </div>
  );
}

export default App;
