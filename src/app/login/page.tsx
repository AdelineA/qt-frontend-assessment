import LoginForm from "./LoginForm";
import Sidebar from "./Sidebar";
const Login = () => {
  return (
    <div className="flex h-screen content-wrapper py-10">
      <LoginForm />
      <Sidebar />
    </div>
  );
};
export default Login;
