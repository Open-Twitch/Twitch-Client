import { ChannelDescription, Chat } from ".";

export const ChannelView = () => {
  return (
    <div className="channel-container">
      <div className="channel-video-description-container">
        <div className="channel-offline-placeholder">Channel is offline</div>
        <ChannelDescription />
      </div>
      <Chat />
    </div>
  );
};
