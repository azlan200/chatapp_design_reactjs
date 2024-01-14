import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') return;

    const userMessage = { text: newMessage, user: 'You' };
    const botResponse = { text: `Bot: I received "${newMessage}"`, user: 'Bot' };
    const updatedMessages = [...messages, userMessage, botResponse];
    setMessages(updatedMessages);
    setTimeout(() => {
      const updatedMessages = messages.filter((msg) => msg !== userMessage);
      setMessages(updatedMessages);
    }, 4000);
    setTimeout(() => {
      const updatedMessages = messages.filter((msg) => msg !== botResponse);
      setMessages(updatedMessages);
    }, 8000);

    setNewMessage('');
  };

  return (
    <>
      <div className="chat-style">
        <div style={{width: '30vw'}}>
          <div className="chat-app-text" style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <div className="chatAppText">
              Chap App 
           
            </div>
            <div className="img-container">
              <img class="img" src="./logo512.png"/>  
            </div>
            
           
           
          </div>
      
          <div className="chat-box-container">
            <div className="chat-box">

            </div>
            <div className="messages">
              {messages.map((message, index) => (
                <div className="message">
                  <div key={index}>
                    <strong>{message.user}:</strong> {message.text}
                  </div>
                </div>
                
              ))}
            </div>
            
          </div>
          <div className="inputs">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your message."
                value={newMessage}
                onChange={handleInputChange}
              />
              <button type="submit">Send</button>
            </form>
          </div>
          
          {/* <img src="./cat.jpg" alt="fhfh" /> */}

        </div>
      </div>
      <div class="bg-wrapper">

        <div className="bg">
        

        </div>

      </div>

      
    </>
    
  );
};

export default ChatApp;
