import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";
import useCreatePost from "./hooks/useCreatePost";
import HomeNavBar from "./HomeNavBar";

export default function CreatePost() {
    const { register, handleSubmit, reset } = useForm();
    const {mutate: createPost} = useCreatePost();

    // Our actual submission function
    async function onSubmit(data) {
        createPost({ postTitle: data.postTitle, postContent: data.postContent });
    }

    return (
        <>
            <html>
                <head>
                    <title>Create Forum Post</title>
                    <link link="stylesheet" href="createpost.css"></link>
                </head>
                <body>
                    <div className="createpost-container">
                        <HomeNavBar />
                        <div className="createpost-form-box">
                            <h1>Create Post</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="createpost-input-group">
                                    <div className="createpost-input-field">
                                        <label>Post Title:</label><br />
                                        <input type="text" id="postTitle" {...register("postTitle")} />
                                    </div>

                                    <div classname="createpost-input-field">
                                        <label>Post Content:</label>
                                        <textarea {...register("postContent")}></textarea>
                                    </div>
                                </div>

                                <div className="createpost-button">
                                    <button type="submit">Post</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </body >
            </html >
        </>
    );
}
