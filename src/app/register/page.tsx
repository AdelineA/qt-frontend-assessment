import Sidebar from "../login/Sidebar"
import RegisterForm from "./RegisterForm"

const Register = () =>{
  return(
    <div className="flex h-screen content-wrapper py-10">
      <RegisterForm />
      <Sidebar />
    </div>
  )
}
export default Register