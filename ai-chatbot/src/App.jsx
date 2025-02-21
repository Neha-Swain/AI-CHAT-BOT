import React,{useState,useEffect} from 'react'
import Chatbotstart from './Components/Chatbotstart'
import ChatbotApp from './Components/Chatbotapp'
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const[isChatting, setIsChatting] = useState(false)
  const[chats, setChats]=useState([])
  const[activeChat,setActiveChat]= useState(null)

  useEffect(()=>{
    const storedChats=JSON.parse(localStorage.getItem('chats')) || []
    setChats(storedChats)

    if(storedChats.length>0){
      setActiveChat(storedChats[0].id)
    }
  },[])

  const handleStartChat=()=>{ //this functions intiates a chat session
    setIsChatting(true) //responsible for setting the state variable 'Ischatting' to true, this function will be called when the user clicks the "ChatAI" button on the home page
    if(chats.length===0){
      createNewChat()
    }
  }

  const handleGoBack = ()=>{ //this function is for ending the chat session and return to the start page
    setIsChatting(false) //this function will be invoked when the user wants to return to the start page, switching the view back to the start page 
  }

  const createNewChat=(initialMessage="")=>{
    const newChat={
      id:uuidv4(),
      displayId:`Chat ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}`,
      messages:initialMessage?[{type:"prompt",text:initialMessage,timestamp:new Date().toLocaleTimeString()}]:[],
    }

    const updatedChats=[newChat,...chats]
    setChats(updatedChats)
    localStorage.setItem("chats",JSON.stringify(updatedChats))
    localStorage.setItem(newChat.id,JSON.stringify(newChat.messages))
    setActiveChat(newChat.id)
  }
  return (
    <div className="container">
      {isChatting?(<ChatbotApp onGoBack={handleGoBack} chats={chats} setChats={setChats} activeChat={activeChat}
      setActiveChat={setActiveChat} onNewChat={createNewChat}/>
    ):(<Chatbotstart onStartChat={handleStartChat}/>)}
    </div>
  )
}

export default App