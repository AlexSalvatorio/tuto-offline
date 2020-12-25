import React, {useEffect, useState} from 'react';

function Info(props){
    const [isOnline, setOnline] = useState(true);

    useEffect( ()=>{
        const updateOnlineStatus = (event) => {
            setOnline(navigator.onLine);
        };
        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    },[]);

    if(isOnline) return <div>app is online ✅</div>

    return <div>app is offline ❌</div>

}

export default Info;