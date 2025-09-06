import React from "react";

// This SVG is inspired by the provided image: robot with headphones, blue background, and chat bubble
const ChatbotAvatarIcon = () => (
  <svg viewBox="0 0 64 64" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#B3D4FC"/>
    <ellipse cx="32" cy="44" rx="14" ry="6" fill="#E6F0FA"/>
    <g>
      <ellipse cx="32" cy="32" rx="14" ry="16" fill="#fff"/>
      <circle cx="32" cy="32" r="10" fill="#222"/>
      <rect x="22" y="22" width="20" height="20" rx="10" fill="#222"/>
      <ellipse cx="32" cy="44" rx="6" ry="2" fill="#00BFFF" opacity="0.2"/>
      <ellipse cx="32" cy="38" rx="4" ry="2" fill="#00BFFF" opacity="0.3"/>
      <ellipse cx="32" cy="32" rx="8" ry="8" fill="#222"/>
      <ellipse cx="32" cy="32" rx="7" ry="7" fill="#222"/>
      <ellipse cx="32" cy="32" rx="6" ry="6" fill="#222"/>
      <ellipse cx="32" cy="32" rx="5" ry="5" fill="#222"/>
      <ellipse cx="32" cy="32" rx="4" ry="4" fill="#222"/>
      <ellipse cx="32" cy="32" rx="3" ry="3" fill="#222"/>
      <ellipse cx="32" cy="32" rx="2" ry="2" fill="#222"/>
      <ellipse cx="32" cy="32" rx="1" ry="1" fill="#222"/>
      <ellipse cx="32" cy="40" rx="3" ry="1" fill="#00BFFF"/>
      <rect x="24" y="28" width="16" height="8" rx="4" fill="#222"/>
      <ellipse cx="28" cy="34" rx="1.5" ry="2" fill="#fff"/>
      <ellipse cx="36" cy="34" rx="1.5" ry="2" fill="#fff"/>
      <path d="M28 38c1.5 2 6.5 2 8 0" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="18" y="24" width="4" height="16" rx="2" fill="#222"/>
      <rect x="42" y="24" width="4" height="16" rx="2" fill="#222"/>
      <ellipse cx="32" cy="48" rx="4" ry="2" fill="#00BFFF" opacity="0.2"/>
      <circle cx="32" cy="40" r="2" fill="#00BFFF"/>
      <ellipse cx="32" cy="52" rx="2" ry="1" fill="#00BFFF" opacity="0.2"/>
      <ellipse cx="32" cy="56" rx="1" ry="0.5" fill="#00BFFF" opacity="0.2"/>
      <rect x="20" y="18" width="24" height="8" rx="4" fill="#fff"/>
      <rect x="20" y="18" width="24" height="8" rx="4" fill="#fff"/>
      <ellipse cx="24" cy="22" rx="2" ry="2" fill="#222"/>
      <ellipse cx="40" cy="22" rx="2" ry="2" fill="#222"/>
      <rect x="18" y="18" width="4" height="8" rx="2" fill="#222"/>
      <rect x="42" y="18" width="4" height="8" rx="2" fill="#222"/>
    </g>
    {/* Chat bubble */}
    <g>
      <rect x="44" y="8" width="16" height="10" rx="4" fill="#3B82F6"/>
      <circle cx="48" cy="13" r="1.5" fill="#fff"/>
      <circle cx="52" cy="13" r="1.5" fill="#fff"/>
      <circle cx="56" cy="13" r="1.5" fill="#fff"/>
    </g>
  </svg>
);

export default ChatbotAvatarIcon;
