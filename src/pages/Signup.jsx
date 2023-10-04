import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const user=[];
          user.push({name,email,password})
          localStorage.setItem("userData",JSON.stringify(user))
          navigate('/login')
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="signUp flex-center">
        <div className="signUp-box">
          <h2>Sign Up</h2>
          <form className="flex-center" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <input className="submit" type="submit" value={"Submit"} />
            <p className="subheading">
              Already have an account ?{" "}
              <Link to={"/login"} className="link">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    );
}

export default Signup