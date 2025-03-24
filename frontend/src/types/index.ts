// Types pour les options de chat
export interface ChatOption {
    id: string;
    icon: string;
    label: string;
    selected: boolean;
    color: string;
  }
  
  // Type pour les groupes de chat
  export interface ChatGroup {
    title: string;
    items: ChatOption[];
  }
  
  // Type pour le profil utilisateur
  export interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
  }
  
  // Type pour les props des icônes
  export interface IconProps {
    size?: number;
    color?: string;
    className?: string;
  }