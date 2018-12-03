import React from 'react';

export const TwitterItem = ({
  text,
  date,
  favorite_count,
  user: { profile_image_url, name, screen_name }
}) => {
  return (
    <div className="flex-container-vertical">
      <div className="flex-container">
        <div>
          <img src={profile_image_url} alt="profile image" />
        </div>
        <div className="name-container">
          <b>{name}</b>
          <div>@{screen_name}</div>
        </div>
      </div>

      <b className="tweet-text">{text}</b>
      <div className="tweet-footer">
        <div>{favorite_count} likes</div>
        <div>{date}</div>
      </div>
    </div>
  );
};
