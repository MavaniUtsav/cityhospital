import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

function Chat(props) {
    const socket = useMemo(() => io('http://localhost:4000'), []);
    const [chatId, setChatId] = useState('');
    const [message, setMessage] = useState('');
    const [groupId, setGroupId] = useState('');

    useEffect(() => {
        socket.on("connect", () => {
            console.log(socket.id); // Access the socket ID like this
        });

        socket.on("message", (message) => {
            console.log(message); // Access the socket ID like this
        });

        // socket.on('send-msg', (msg) => {
        //     console.log(msg);
        // })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit('text', { chatId, message });

        // Clear the message input
        setMessage('');
    }

    const handleGroup = (e) => {
        e.preventDefault()

        socket.emit('join_group', groupId)
        setGroupId('')
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <form onSubmit={handleGroup}>
                <input
                    type='text'
                    onChange={(e) => setGroupId(e.target.value)}
                    value={groupId}
                    placeholder='Enter group name'
                />
                <button type='submit' >submit</button>
            </form>


            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(e) => setChatId(e.target.value)}
                    value={chatId}
                    placeholder='Enter chat ID'
                />

                <input
                    type='text'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='Type Message'
                />

                <button type='submit' >submit</button>
            </form>
        </div>
    );
}

export default Chat;