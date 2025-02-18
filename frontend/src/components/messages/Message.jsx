import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()

  const formattedTime = extractTime(message.createdAt)

  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? "chat-end" : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic 
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700"


  return (
    <div className={`chat ${chatClassName} max-w-[650px]`}>
      <div className="chat-image avatar ">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="profile-picture" />
        </div>
      </div>
        <div className={`chat-bubble text-white h-full w-100% w-fit pb-1 break-all ${bubbleBgColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-gray-100 text-2xs flex gap-1 items-center">{formattedTime}</div>

    </div>
  );
};

export default Message;
