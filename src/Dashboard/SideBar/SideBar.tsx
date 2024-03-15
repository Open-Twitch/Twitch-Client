const followedChannels = [
  {
    id: 1,
    username: "Martin",
    isOnline: false,
  },
  {
    id: 2,
    username: "Marta",
    isOnline: true,
  },
  {
    id: 3,
    username: "Jack",
    isOnline: false,
  },
];

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">FOLLOWED CHANNELS</span>
      {followedChannels.map((channel) => {
        return (
          <div key={channel.id} className="sidebar-list-item">
            <span className="sidebar-list-username">{channel.username}</span>
            <span
              className="sidebar-list-status"
              style={{ color: channel.isOnline ? "green" : "red" }}
            >
              {channel.isOnline ? "online" : "offline"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
