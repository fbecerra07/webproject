/**
 * This module is responsible for submitting data
 * into the database
 * Data here will be forum post information as the user enters this through a form
 * 
 * Date: 10/26/2023
 * Project: CPSC 349 Web Project
 */

import pb from "../lib/pocketbase";
import { useMutation } from "react-query";

export default function useCreatePost() {
    async function createPost({ postTitle, postContent }) {
        const forumRecord = {
            postTitle: postTitle,
            postContent: postContent
        };
        await pb.collection("forum").create(forumRecord);
    }
    return useMutation(createPost);
}
