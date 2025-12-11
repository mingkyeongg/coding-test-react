import React from 'react';
import styles from './UserProfile.module.css';

interface UserInfoSectionProps {
  name: string;
  bio: string;
}

export const UserInfoSection: React.FC<UserInfoSectionProps> = ({name, bio}) => {
  return (
    <section className={styles.userInfoSection}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.bio}>{bio}</p>
    </section>
  );
};

export default UserInfoSection;
