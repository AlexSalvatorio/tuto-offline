import React, {useState} from 'react';
import firebase from '../utils/Firebase';

function Posting (props) {

    const [post, setPost] = useState({});
    const [isLoading, setLoading] = useState(false);

    const onPost = (e) => {
        setLoading(true);
        const ref = firebase.firestore().collection('board');
        ref.add(post).then( res =>{
            setLoading(false);
            console.log(res);
            setPost({text:"", url:""});
        }).catch( err =>{
            setLoading(false);
            console.log(err);
            setPost({text:"", url:""});
        })
    }

    const onChangePost = (e) => {
        let newPost = {...post};
        newPost[e.target.name]= e.target.value;
        setPost(newPost);
    }


    if(isLoading) return <div>Loading...</div>

    return <div>
        <input name="url" type="url" placeholder="Your url" value={post.url} onChange={onChangePost}></input><br/>
        <textarea name="text" placeholder="Your text" rows="4" cols="50" value={post.text} onChange={onChangePost}></textarea><br/>
        <button onClick={onPost} disabled={!post.url && !post.text}>Post</button>
    </div>
}

export default Posting;