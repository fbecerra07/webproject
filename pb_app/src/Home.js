import useLogout from "hooks/useLogout";
import pb from "lib/pocketbase";
import {useForm} from "react-hook-form";
import HomeNavBar from "HomeNavBar";

export default function Home() {
    const {register, handleSubmit, reset} = useForm();
    const logout = useLogout();

    const isLoggedIn = pb.authStore.isValid;

    if (isLoggedIn)
        return (
            <>
                <html>
                    <head>
                        <link rel="stylesheet" href="home.css"></link>
                    </head>
                    <body>
                        <div className="home-container">
                            <HomeNavBar/>
                            <div className="home-form-box">
                                <h1>Home</h1>
                                <div class="home-button">
                                    <a href="Login.js" onClick={logout}>Logout</a>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>
            </>
        );
}