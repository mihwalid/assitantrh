import React from 'react';
import styles from './UserProfile.module.css';

interface UserProfileProps {
  userName: string;
  userEmail: string;
  userAvatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  userName, 
  userEmail,
  userAvatar
}) => {
  return (
    <div className={styles.userProfileContainer}>
      <img 
        src={userAvatar || '/assets/images/default-avatar.png'} 
        alt={`${userName}'s avatar`}
        className={styles.userAvatar}
      />
      <div className={styles.userInfo}>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.userEmail}>{userEmail}</div>
      </div>
    </div>
  );
};

export default UserProfile;