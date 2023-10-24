import NavBar from "NavBar";
import useCreateAcc from "hooks/useCreateAcc";
import {useForm} from "react-hook-form";

export default function CreateAccount() {
    const {mutate: createAcc, isLoading, isError} = useCreateAcc();
    const {register, handleSubmit, reset} = useForm();

    async function onSubmit(data) {
        createAcc({email: data.email, username: data.username, password: data.password, passwordConfirm: data.passwordConfirm});
        // reset();
    }

    return (
        <>
            <html>
            <head>
                <meta charset="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Create Account</title>
                <link rel="stylesheet" href="createAccount.css"></link>
            </head>
            <body>
                <div class="createacc-container">
                    <NavBar/>
                    <div class="createacc-form-box">
                        <h1>Create An Account</h1>
                        {isLoading && <p>Loading...</p>}
                        {isError && <p style={{color: "red"}}>Missing Information</p>}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="createacc-input-group">
                                <div class="createacc-input-field">
                                    <label>Email:</label><br/>
                                    <input type="email" id="email" placeholder="example@domain.com" {...register("email")} />
                                </div>

                                <div class="createacc-input-field">
                                    <label>Username:</label><br/>
                                    <input type="text" id="username" placeholder="Username" {...register("username")} />
                                </div>

                                <div class="createacc-input-field">
                                    <label>Password:</label><br/>
                                    <input type="password" id="password" placeholder="Password" {...register("password")} />
                                </div>

                                <div class="createacc-input-field">
                                    <label>Confirm Password:</label><br/>
                                    <input type="password" id="passwordConfirm" placeholder="Confirm Password" {...register("passwordConfirm")} />
                                </div>
                            </div>

                            <div class="createacc-button">
                                <button type="submit" id="create" disabled={isLoading}>{isLoading ? "Loading" : "Create"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
            </html>
        </>
    );
}