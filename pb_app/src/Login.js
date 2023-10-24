import NavBar from "NavBar";
import useLogout from "hooks/useLogout";
import useLogin from "hooks/useLogin";
import pb from "lib/pocketbase";
import {useForm} from "react-hook-form";

export default function Login() {
    const logout = useLogout();
    const {mutate: login, isLoading, isError} = useLogin();
    const {register, handleSubmit, reset} = useForm();

    const isLoggedIn = pb.authStore.isValid;

    async function onSubmit(data) {
        login({email: data.email, password: data.password});
        reset();
    }

    if (isLoggedIn) 
        return (
            <>
                <h1>Logged In As: {isLoggedIn && pb.authStore.model.username}</h1>
                <button onClick={logout}>Log Out</button>
            </>
        );

    return (
        <>
            <html>
            <head>
                <meta charset="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Login</title>
                <link rel="stylesheet" href="login.css"></link>
            </head>
            <body>
                <div class="login-container">
                    <NavBar/>
                    <div class="login-form-box">
                        <h1>Login with Email/User</h1>
                        {isLoading && <p>Loading...</p>}
                        {isError && <p style={{color: "red"}}>Invalid email or password</p>}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="login-input-group">
                                <div class="login-input-field">
                                    <label>Email or Username:</label><br/>
                                    <input type="text" placeholder="email" {...register("email")} />
                                </div>

                                <div class="login-input-field">
                                    <label>Password:</label><br/>
                                    <input type="password" placeholder="password" {...register("password")} />
                                </div>
                            </div>

                            <div class="login-button">
                                <button type="submit" disabled={isLoading}>{isLoading ? "Loading" : "Login"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
            </html>
        </>
    );
}