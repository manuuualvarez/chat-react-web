import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import { ChatApp } from './ChatApp';


const rootElement =document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <ChatApp />
);



