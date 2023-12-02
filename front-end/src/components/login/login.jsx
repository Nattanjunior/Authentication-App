import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import google from '../../assets/google.png'
import github from '../../assets/001-github.png'
import '../login/login.scss'
export function Login(){
    return(
        <>
        <main>
            <section className="login">
                <h2>Login</h2>
                <form action="">
                    <div className="email input">
                        <img src={email} alt="" />
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>

                    <div className="password input">
                        <img src={lock} alt=""/>
                        <input type="password" name="password" id="password" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

                <p>or continue with these social profile</p>


                <section className='login-tecnologies'>
                    <span className='google'><img src={google} alt="" /></span>
                    <span className='github'><img src={github} alt="" /></span>
                </section>


                <section className='register'>Don’t have an account yet?<a href=""> Register</a>
                </section>
            </section>
            
            

            
        </main>
        </>
    )
}