import pb from "lib/pocketbase";
import {useMutation} from "react-query";

export default function useCreateAcc() {
    async function createAcc({email, username, password, passwordConfirm}) {
        const record = {
            email: email,
            username: username,
            password: password,
            passwordConfirm: passwordConfirm
        };
        await pb.collection("users").create(record);
        alert("Account successfully created.");
    }
    return useMutation(createAcc);
}