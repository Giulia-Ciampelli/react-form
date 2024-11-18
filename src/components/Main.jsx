// importazioni
import { useState } from "react";

// array post iniziali
const initialPosts = [
    'post',
    'post'
];

export default function Main() {
    const [posts, setPosts] = useState(initialPosts);

    return (
        <main>
            <form>

                <ul>
                    {posts.map((post, index) => <li key={index}>{post}</li>)}
                </ul>
            </form>
        </main>
    )
}