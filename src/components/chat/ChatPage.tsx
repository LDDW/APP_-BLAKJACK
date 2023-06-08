import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

export interface messageResponseInterface {
  room: string;
  message: string;
  name: string;
}

const ChatPage = ({ socket }: any) => {
  const [messages, setMessages] = useState<messageResponseInterface[]>([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef<any>(null);

  useEffect(() => {
    socket.on("messageResponse", (data: messageResponseInterface) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
