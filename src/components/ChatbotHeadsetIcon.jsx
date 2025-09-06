import React from "react";

// SVG for the provided chatbot icon (robot head with headset and smile)
const ChatbotHeadsetIcon = () => (
  <svg viewBox="0 0 64 64" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Headset arc */}
      <path d="M12 40c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#222" strokeWidth="4" fill="none"/>
      {/* Headset earpieces */}
      <circle cx="12" cy="40" r="8" fill="#222"/>
      <circle cx="52" cy="40" r="8" fill="#222"/>
      {/* Robot head */}
      <ellipse cx="32" cy="32" rx="18" ry="14" fill="#222"/>
      {/* Eyes */}
      <circle cx="26" cy="34" r="2" fill="#fff"/>
      <circle cx="38" cy="34" r="2" fill="#fff"/>
      {/* Smile */}
      <path d="M28 40c1.5 2 6.5 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      {/* Antenna */}
      <rect x="30" y="10" width="4" height="10" rx="2" fill="#222"/>
      <circle cx="32" cy="8" r="3" fill="#222"/>
      {/* Microphone */}
      <path d="M44 48c-4 2-12 2-16 0" stroke="#222" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="48" cy="48" r="4" fill="#222"/>
    </g>
  </svg>
);

export default ChatbotHeadsetIcon;
