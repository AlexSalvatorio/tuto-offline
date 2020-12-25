import React, {useState, useEffect} from 'react';
import firebase from '../utils/Firebase';


function Forum (props) {

    const [posts, setPosts] =  useState([]);
    useEffect( ()=>{
        const ref = firebase.firestore().collection('board');
        console.log("launch snaptshot");
        ref.get().then( snapshot =>{
            let newPosts = [];
            console.log(snapshot);
            snapshot.forEach( (post)=>{
                newPosts.push({...post.data(), id: post.id});
            });
            setPosts(newPosts);
        });
    } ,[]);

return <div>{posts && posts.map( post =>{
    return <div key={post.id}>
        <img height="150px" src={post.url}/>
        {post.text}
        </div>
})}</div>;
}

export default Forum;