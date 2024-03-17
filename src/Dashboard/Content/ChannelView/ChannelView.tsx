import { ChannelDescription, Chat } from ".";

const channelDetails = {
  id: 1,
  title: "Gaming channel",
  description: "Playing some RPG",
  username: "Gamer",
  isOnline: false,
};

export const ChannelView = () => {
  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        <div className="channel-offline-placeholder">Channel is offline</div>
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
        />
      </div>
      <Chat />
    </div>
  );
};
