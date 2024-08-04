
import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';
import {getRandomEmoji} from '../../utils/emoji'

const Conversations = () => {
    const {loading, conversations} = useGetConversations()
    return (
        <div className='py=2 flex flex-col overflow-auto'>
        {loading ? <span className='loading loading-spinner mx-auto'></span>  : null}
        {conversations.map((conversation, idx) => (
            <Conversation key={conversation._id} 
                conversation={conversation}
                emoji={getRandomEmoji()}
                lastIdx = {idx === conversation.length-1}
            />
        ))}


        </div>
    );
};

export default Conversations;





//Starter code
// import Conversation from './Conversation';

// const Conversations = () => {
//     return (
//         <div className='py=2 flex flex-col overflow-auto'>
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//         </div>
//     );
// };

// export default Conversations;