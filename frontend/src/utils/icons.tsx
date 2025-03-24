import React from 'react';
import { IconProps } from '../types';

// Taille par défaut des icônes
const DEFAULT_SIZE = 18;

export const IconClipboard: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <line x1="9" y1="12" x2="15" y2="12"></line>
    <line x1="9" y1="16" x2="15" y2="16"></line>
  </svg>
);

export const IconEnvelope: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const IconQuestion: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export const IconFileInvoice: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <path d="M14 2v6h6"></path>
    <line x1="9" y1="15" x2="15" y2="15"></line>
    <line x1="9" y1="11" x2="15" y2="11"></line>
    <path d="M17 18.7V19H7v-.3"></path>
  </svg>
);

export const IconCheckCircle: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const IconBroom: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 2v4l-4 1 3 3-5 5 2 6c0 2-2 3-4 2v-8l3-3-6-6 1-4 3 3 4-4z"></path>
    <path d="M4.41 22H4a2 2 0 0 1-2-2v-.59c0-.53.21-1.04.59-1.41L11 10l3 3-8.41 8.41c-.37.38-.88.59-1.41.59h-.09z"></path>
  </svg>
);

export const IconSend: React.FC<IconProps> = ({ size = DEFAULT_SIZE, color = 'currentColor', className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

// Fonction utilitaire pour obtenir l'icône par son nom
export const getIconByName = (iconName: string, props: IconProps = {}): React.ReactNode => {
  switch(iconName) {
    case 'clipboard':
      return <IconClipboard {...props} />;
    case 'envelope':
      return <IconEnvelope {...props} />;
    case 'question':
      return <IconQuestion {...props} />;
    case 'file-invoice':
      return <IconFileInvoice {...props} />;
    case 'check-circle':
      return <IconCheckCircle {...props} />;
    case 'broom':
      return <IconBroom {...props} />;
    case 'send':
      return <IconSend {...props} />;
    default:
      return null;
  }
};