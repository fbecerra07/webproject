import NavBar from "NavBar";
import Home from "Home";
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
                <Home/>
            </>
        );

    return (
        <>
            <html>
            <head>
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
                                    <input type="text" placeholder="Email/Username" {...register("email")} />
                                </div>

                                <div class="login-input-field">
                                    <label>Password:</label><br/>
                                    <input type="password" placeholder="Password" {...register("password")} />
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