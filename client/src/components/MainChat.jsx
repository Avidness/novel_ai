// components/MainChat.jsx
import React from 'react';
import EmptyState from './EmptyState';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const MainChat = ({ streamData, isStreaming, fetchStream }) => {
  const handleSendMessage = (message) => {
    fetchStream('write_a_book', { 'user_input': message });
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="flex-1 p-4 overflow-auto">
        {streamData.length === 0 ? (
          <EmptyState />
        ) : (
          <ChatMessages messages={streamData} />
        )}
      </div>
      
      <ChatInput 
        onSendMessage={handleSendMessage}
        isStreaming={isStreaming}
      />
    </div>
  );
};

export default MainChat;