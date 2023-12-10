import { useState } from 'react'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import google from '../../assets/google.png'
import github from '../../assets/001-github.png'
import '../login/login.scss'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'
export function Login(){
    const [Verify, setVerify] = useState(true)
    const [User, setUser] = useState(null)
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const handleRegister = ()=>{
       setVerify(!Verify) 
    };
    
    const SendLogin = async (e)=>{
        e.preventDefault()
        const response = await axios.post('', 
        JSON.stringify({emailLogin,passwordLogin}),
        {
            headers: {'Content-Type':'application/json'}
        }
        )
        console.log(response)
    }
    const RegisterLogin = async (e)=>{
        e.preventDefault()
        const RegisterResponse = await axios.post('', 
        JSON.stringify({emailRegister,passwordLogin}),
        {
            headers: {'Content-Type':'application/json'}
        }
        )
        console.log(response)
    }

    const handleSucessLogin = (response)=>{

        console.log(response)
    }

    const handleErrorLogin = (error)=>{
        console.log(error)
    }

    return(
        <Router>
            {User === null? (
                <main>
                <section className={Verify? 'login':'register-user'} >
                    <h2>{Verify? 'Login':'Register'}</h2>
                    {Verify? (
                        <form action="">
                        <div className="email input">
                            <img src={email} alt="" />
                            <input type="email" id="email" name="email" placeholder="Email" required onChange={(e)=>{setEmailLogin(e.target.value)}}/>
                        </div>
    
                        <div className="password input">
                            <img src={lock} alt=""/>
                            <input type="password" name="password" id="password" placeholder="Password" required onChange={(e)=>{setPasswordLogin(e.target.value)}}/>
                        </div>
                        <button type="submit" className="btn btn-primary input">Login</button>
                    </form>
                    ):(
                        <form action="">
                        <div className="email input">
                            <img src={email} alt="" />
                            <input type="email" id="emailRegister" name="emailRegister" placeholder="Email" required onChange={(e)=>{setEmailRegister(e.target.value)}}/>
                        </div>
    
                        <div className="password input">
                            <img src={lock} alt=""/>
                            <input type="password" name="passwordRegister" id="passwordRegister" placeholder="Password" required onChange={(e)=>{setPasswordRegister(e.target.value)}}/>
                        </div>
                        <button type="submit" className="btn btn-primary input" onClick={SendLogin}>Criar conta</button>
                    </form>
                    )}
                    
    
                    <p>or continue with these social profile</p>
    
    
                    <section className='login-tecnologies'>
                        <span className='google'>
                        <GoogleOAuthProvider clientId='536913788151-kp714umuvpu1iu00gavg63i1gn263aa9.apps.googleusercontent.com'
                        >
                            <GoogleLogin
                            clientId='536913788151-kp714umuvpu1iu00gavg63i1gn263aa9.apps.googleusercontent.com'
                            onScriptLoadSuccess={handleSucessLogin}
                            onScriptLoadError={handleErrorLogin}
                            />
                        </GoogleOAuthProvider>
                        </span>
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
            ):(
                <div></div>
            )}
        
        </Router>
    )
}