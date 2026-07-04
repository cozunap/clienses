import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { useChat } from '@ai-sdk/react';

function App() {
  const chat = useChat();
  console.log(Object.keys(chat));
  return <div>Test</div>;
}
renderToStaticMarkup(<App />);
