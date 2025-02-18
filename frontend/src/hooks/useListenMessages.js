import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from '../assets/notification.mp3'


const useListenMessages = () => {
 const {socket} = useSocketContext()
 const {messages, setMessages} = useConversation()


useEffect(() => {
    
    socket.on("newMessage", (newMessage) => {
        setMessages([...messages, newMessage])
        const sound = new Audio(notificationSound)
        sound.play()
    })
 return () => socket?.off("newMessage")
  
}, [socket, setMessages, messages ]);


};

export default useListenMessages;