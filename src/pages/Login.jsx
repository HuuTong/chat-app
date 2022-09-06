import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
     
      } catch (err) {
        console.log("err",err)
        setErr(true);
      }
    };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>HUUTONG CHAT APP</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Nhập email.'/>
                <input type="password" placeholder='Nhập password.'/>
                <button>Đăng Nhập</button>
                {err && <span style={{color: 'red', textAlign:'center'}}>Tài khoản không đúng.</span>}
            </form>
            <p>Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
        </div>
    </div>
  )
}

export default Login