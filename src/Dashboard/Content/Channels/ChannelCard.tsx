const imageUrl =
  "https://www.sekirothegame.com/content/dam/atvi/sekiro/gallery/Sekiro_01.jpg";

const ChannelAvatar = ({ url }: { url: string }) => {
  return (
    <div className="channels-avatar-container">
      <img src={url || imageUrl} width="100%" height="100%" alt="" />
    </div>
  );
};

export const ChannelCard = ({
  title,
  username,
  isOnline,
  avatarUrl,
  navigateToChannelHandler,
  id,
}: {
  title: string;
  username: string;
  isOnline: boolean;
  avatarUrl: string;
  navigateToChannelHandler: () => void;
  id: number;
}) => {
  const handleNavigate = () => {
    navigateToChannelHandler();
  };

  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl} />
      <span className="channels-card-title">{title}</span>
      <span className="channels-card-text">{username}</span>
      <span
        className="channels-card-text"
        style={{ color: isOnline ? "green" : "red" }}
      >
        {isOnline ? "Online" : "Ofline"}
      </span>
    </div>
  );
};
