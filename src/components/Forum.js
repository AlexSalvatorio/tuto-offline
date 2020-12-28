import React, {useState, useEffect} from 'react';
import firebase from '../utils/Firebase';


function Forum (props) {

    const [posts, setPosts] =  useState([]);
    const [isCached, setCache] =  useState(false);
    useEffect( ()=>{
        const ref = firebase.firestore().collection('board');
        ref.onSnapshot((snapshot) => {
            setCache(snapshot.metadata.fromCache);
            let newPosts = [];
            console.log(snapshot);
            snapshot.forEach( (post)=>{
                newPosts.push({...post.data(), id: post.id});
            })
            setPosts(newPosts);
        });
    } ,[]);

    const reloadHandler = () => {
        const ref = firebase.firestore().collection('board');
        setPosts([]);
        ref.get().then( snapshot =>{
            setCache(snapshot.metadata.fromCache);
            let newPosts = [];
            console.log(snapshot);
            snapshot.forEach( (post)=>{
                newPosts.push({...post.data(), id: post.id});
            })
            setPosts(newPosts);
        });
    }

return <div>
    {isCached && <div><button onClick={reloadHandler}>reload</button> Data are from cache ⚡</div>}
    {posts && posts.map( post =>{
    return <div className="post" key={post.id}>
        #{post.id} {post.date}<br/>
        {post.url && <div><a href={post.url} target="_blank">{post.url}</a></div>}
        {post.text && <div><b>{post.text}</b></div>}
        </div>
})}
</div>;
}

export default Forum;