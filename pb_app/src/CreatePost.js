import pb from "lib/pocketbase";
import {useForm} from "react-hook-form";
import HomeNavBar from "HomeNavBar";

export default function CreatePost() {
    const {register, handleSubmit, reset} = useForm();

    return (
        <>
            <html>
                <head>
                    <link link="stylesheet" href="createpost.css"></link>
                </head>
                <body>
                    <div className="createpost-container">
                        <HomeNavBar/>
                        <div className="createpost-form-box">
                            <h1>Create Post</h1>
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
}