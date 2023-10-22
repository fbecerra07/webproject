import pb from "lib/pocketbase";
import { useState } from "react";
import {useForm} from "react-hook-form";

export default function Login() {
    const {register, handleSubmit} = useForm();
    const [dummy, setDummy] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const isLoggedIn = pb.authStore.isValid;

    async function login(data) {
        setLoading(true);
        try {
            const authData = await pb
            .collection("users")
            .authWithPassword(data.email, data.password);
        } catch(e) {
            alert(e);
        }
        setLoading(false);
    }

    function logout() {
        pb.authStore.clear();
        setDummy(Math.random());
    }

    if (isLoggedIn) 
        return (
            <>
                <h1>Logged In: {isLoggedIn && pb.authStore.model.email}</h1>
                <button onClick={logout}>Log Out</button>
            </>
        );

    return <>
        {isLoading && <p>Loading...</p>}
        <h1>Please Log In</h1>
        
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder="email" {...register("email")} />
            <input type="password" placeholder="password" {...register("password")} />

            <button type="submit" disabled={isLoading}>{isLoading ? "Loading" : "Login"}</button>
        </form>
    </>;
}