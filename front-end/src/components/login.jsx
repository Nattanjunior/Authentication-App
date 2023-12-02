export function Login(){
    return(
        <>
        <main>
            <section className="login">
                <h2>Login</h2>
                <form action="">
                    <label htmlFor=""><input type="email" id="email" name="email" placeholder="Email" required/></label>

                    <label htmlFor=""><input type="password" name="password" id="password" placeholder="Password" required/></label>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </section>
        </main>
        </>
    )
}