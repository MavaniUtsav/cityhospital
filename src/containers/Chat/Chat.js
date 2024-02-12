import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

function Chat(props) {
    const socket = io('http://localhost:4000')

    useEffect(() => {
        // socket.on("connect", (socket) => {
        //     // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        //   });

        socket.on('send-msg', (msg) => {
            console.log(msg);
        })
    }, [])

    return (
        <div>
        </div>
    );
}

export default Chat;