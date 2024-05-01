import React from "react";
import useConversation from "../zustand/useConversation";
import { BiConversation } from "react-icons/bi";
import useGetConversations from "../hooks/useGetConversations";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers?.includes(conversation._id);


  // console.log(onlineUsers);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-950 rounded p-2 py-1 cursor-pointer
        ${isSelected ? `bg-sky-800` : ``}
        `}
        // onClick={() => setSelectedConversation(conversation)}
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online animate-pulse" : ""} `}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex  gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
