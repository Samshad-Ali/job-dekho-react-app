import React,{ useState } from "react";
import toast from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userData'))
 const handleSubmit= async(e)=>{
  e.preventDefault();
  try {
    
    if(user==null){
      toast.error("User not Found")
      navigate('/')
    }else if(user[0].email==email){
      navigate('/home')
      toast.success("Welcome...")
    }
    else{
      toast.error("User not Found")
      navigate('/')
    }
    console.log(user)
  } catch (error) {
    console.log(error)
  }
 }
  return (
    <div className="login flex-center">
      <div className="login-box">
        <h2>Login</h2>
        <form  className="flex-center" onSubmit={handleSubmit} >
          <div>

          <label htmlFor="email">Email</label>
          <input required type="email" name="email" id="email"   onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div>
          <label htmlFor="password">Password</label>
          <input required type="password" name="password" id="password"   onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <input className="submit" type="submit" value={"Submit"} />
          <p className="subheading">Do not have account ?  <Link to={'/'} className="link">Sign Up</Link> </p>
        </form>
      </div>
    </div>
  );
}

export default Login