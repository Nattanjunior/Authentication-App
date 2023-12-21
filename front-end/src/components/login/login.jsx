import { useState } from 'react'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import github from '../../assets/001-github.png'
import '../login/login.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'
export function Login() {
    const [profile, setProfile] = useState(true)
    const [Verify, setVerify] = useState(true)
    const [User, setUser] = useState(null)
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [nameEdit, setNameEdit] = useState('')
    const [bioEdit, setBioEdit] = useState('')
    const [phoneEdit, setPhoneEdit] = useState('')
    const [emailEdit, setEmailEdit] = useState('')
    const [passwordEdit,  setpasswordEdit] = useState('')
    const handleRegister = () => {
        setVerify(!Verify)
    };
    const click = ()=>{
        setProfile(!profile)
    }
    const SendLogin = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3000/Feed',
            JSON.stringify({ emailLogin, passwordLogin }),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        console.log(response)
        setUser(response)
    }
    const RegisterLogin = async (e) => {
        e.preventDefault()
        const RegisterResponse = await axios.post('http://localhost:3000/Register',
            JSON.stringify({ emailRegister, passwordRegister }),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        console.log(RegisterResponse)
        setUser(RegisterResponse)
    }
    const saveEditProfile = async (e)=>{
        e.preventDefault(e)
        const SaveData = await axios.post('http://localhost:3000/Feed/editprofile',
        JSON.stringify({ nameEdit,bioEdit,phoneEdit, emailEdit,passwordEdit}),
        {
            headers: { 'Content-Type': 'application/json' }
        }
        )
        console.log(SaveData)
        setUser(SaveData)
    }

    const handleSucessLogin = (response) => {

        console.log(response)
    }

    const handleErrorLogin = (error) => {
        console.log(error)
    }

    return (
        <Router>
            {User === null ? (
                <main>
                    <section className={Verify ? 'login' : 'register-user'} >
                        <h2>{Verify ? 'Login' : 'Register'}</h2>
                        {Verify ? (
                            <form action="Feed" method='post'>
                                <div className="email input">
                                    <img src={email} alt="" />
                                    <input type="email" id="email" name="email" placeholder="Email" required onChange={(e) => { setEmailLogin(e.target.value) }} />
                                </div>

                                <div className="password input">
                                    <img src={lock} alt="" />
                                    <input type="password" name="password" id="password" placeholder="Password" required onChange={(e) => { setPasswordLogin(e.target.value) }} />
                                </div>
                                <button type="submit" className="btn btn-primary input" onClick={SendLogin}><Link to={'/Perfil'}>Login</Link></button>
                            </form>
                        ) : (
                            <form action="Feed" method='post'>
                                <div className="email input">
                                    <img src={email} alt="" />
                                    <input type="email" id="emailRegister" name="emailRegister" placeholder="Email" required onChange={(e) => { setEmailRegister(e.target.value) }} />
                                </div>

                                <div className="password input">
                                    <img src={lock} alt="" />
                                    <input type="password" name="passwordRegister" id="passwordRegister" placeholder="Password" required onChange={(e) => { setPasswordRegister(e.target.value) }} />
                                </div>
                                <button type="submit" className="btn btn-primary input" onClick={RegisterLogin}><Link to={'/Perfil'}>Criar conta</Link></button>
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
                            {Verify ? (
                                <p>Don’t have an account yet?<Link to={"/Register"} onClick={handleRegister}>Register</Link></p>
                            ) : (
                                <p> Already have an account?<Link to={"/Login"} onClick={handleRegister}>Login</Link></p>
                            )}
                        </section>
                    </section>
                </main>
            ) : (
                <main className='Profile'>
                    {profile ? (
                        <div>
                            <h1>Personal info</h1>
                            <p>Basic info, like your name and photo</p>
                            <section className='informacoes'>
                                <div className='menu'>
                                    <h2>Profile</h2>
                                    <p>Some info may be visible to other people</p>
                                    <button onClick={click}>Edit</button>
                                </div>
                               
                               <section className='dados'>
                               <div className='photo'>
                                    <span className='span1'>PHOTO</span> <img src="" alt="" className='span2'/>
                                </div>
                                <div className='name'>
                                    <span className='span1'>NAME</span> <span className='span2'>junior</span>
                                </div>
                                <div className='bio'>
                                    <span className='span1'>BIO</span> <span className='span2'>{ 'junior '}</span>
                                </div>
                                <div className='phone'>
                                    <span className='span1'>PHONE</span> <span className='span2'>{ 'junior'}</span>
                                </div>
                                {/* emailLogin */}
                                {/* passwordLogin */}
                                <div className='email'>
                                    <span className='span1'>EMAIL</span> <span className='span2'>{'junior'}</span>
                                </div>
                                <div className='password'>
                                    <span className='span1'>PASSWORD</span> <span className='span2'>{'junior'}</span>
                                </div>
                               </section>
                            </section>
                        </div>
                    ) : (
                        <div className='edit-profile'>
                            <p> &lt;Back </p>
                            <span className='nav-menu'>
                                <img src={''} alt="" />
                            </span>

                            <h1>Change Info</h1>
                            <p>Changes will be reflected to every services</p>

                            <label htmlFor="img"> CHANGE PHOTO
                            <input type="file" name="img" id="img" /> 
                            </label>

                            <label htmlFor="EditName"> Name
                                <input type="text" name="EditName" id="EditName" placeholder='Enter your name' onChange={setNameEdit}/>
                            </label>
                            <label htmlFor="EditBio"> Bio
                                <textarea name="EditBio" id="EditBio" cols="30" rows="10" placeholder='Enter your bio...' onChange={setBioEdit}></textarea>
                            </label>
                            <label htmlFor="EditPhone"> Phone
                                <input type="text" name="EditPhone" id="EditPhone" placeholder='Enter your phone' onChange={setPhoneEdit}/>
                            </label>
                            <label htmlFor="EditEmail"> Email
                                <input type="email" name="EditEmail" id="EditEmail" onChange={setEmailEdit}/>
                            </label>
                            <label htmlFor="EditPass"> Password
                                <input type="password" name="EditPass" id="EditPass" onChange={setpasswordEdit}/>
                            </label>
                            <button type='submit' className='btn btn-primary' onClick={saveEditProfile}>Save</button>
                        </div>
                    )}
                </main>
            )}
        </Router>
    )
}