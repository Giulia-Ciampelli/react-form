// importazioni
import { useState } from "react";

// array post iniziali
const initialPosts = [
    'post',
    'post'
];

export default function Main() {
    const [posts, setPosts] = useState(initialPosts);
    const [newPost, setNewPost] = useState('');

    // funzione per aggiungere un post nuovo
    function addPost(e) {
        e.preventDefault();

        // clonazione array
        const newPosts = [
            newPost,
            ...posts
        ];

        // aggiornamento UI
        setPosts(newPosts);
        setNewPost('');
    }

    return (
        <main>
            <form onSubmit={addPost}>
                <div>
                    <input type="text" id="textInput" placeholder="Titolo nuovo post" value={newPost} onChange={e => setNewPost(e.target.value)} />
                    <button type="submit">
                        Aggiungi post
                    </button>
                </div>
                <ul>
                    {posts.map((post, index) => <li key={index}>
                        {post}
                    </li>)}
                </ul>
            </form>
        </main>
    )
}