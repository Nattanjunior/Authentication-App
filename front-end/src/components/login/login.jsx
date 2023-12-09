import { useState } from 'react'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import google from '../../assets/google.png'
import github from '../../assets/001-github.png'
import '../login/login.scss'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
export function Login(){
    const [Verify, setVerify] = useState(true)
    const handleRegister = ()=>{
       setVerify(!Verify) 
    };

    return(
        <Router>
        <main>
            <section className={Verify? 'login':'register-user'} >
                <h2>{Verify? 'Login':'Register'}</h2>
                <form action="">
                    <div className="email input">
                        <img src={email} alt="" />
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>

                    <div className="password input">
                        <img src={lock} alt=""/>
                        <input type="password" name="password" id="password" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary input">Login</button>
                </form>

                <p>or continue with these social profile</p>


                <section className='login-tecnologies'>
                    <span className='google'><img src={google} alt="" /></span>
                    <span className='github'><img src={github} alt="" /></span>
                </section>

                <section className='register'>
                    {Verify? (
                         <p>Don’t have an account yet?<Link to="/Register" onClick={handleRegister}>Register</Link></p>
                    ):(
                        <p> Already have an account?<Link to={"/Login"} onClick={handleRegister}>Login</Link></p>
                    )}
                   
                </section>
            </section>  
        </main>
        </Router>
    )
}