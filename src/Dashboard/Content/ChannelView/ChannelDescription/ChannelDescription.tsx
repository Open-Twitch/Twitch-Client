export const ChannelDescription = ({
  channelId,
  title,
  description,
  username,
}:{
  channelId:number,
  title:string,
  description:string,
  username:string,
}) => {
  return (
    <div id={`${channelId}`} className="channel-description-container">
      <span className="channel-description-title">{username}</span>
      <span className="channel-description-subtitle">{title}</span>
      <div className="channel-description-box">
        <span className="channel-description">{description}</span>
      </div>
    </div>
  );
};
