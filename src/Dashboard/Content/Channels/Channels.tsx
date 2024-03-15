import { ChannelCard } from "./ChannelCard";

// eslint-disable-next-line react-refresh/only-export-components
export const dummyChannels = [
  {
    id: 1,
    title: "test",
    avatarUrl: "",
    username: "Martin",
    isOnline: false,
  },
  {
    id: 2,
    title: "test1",
    avatarUrl: "",
    username: "Marta",
    isOnline: false,
  },
  {
    id: 3,
    title: "test2",
    avatarUrl: "",
    username: "Jack",
    isOnline: false,
  },
  {
    id: 4,
    title: "test3",
    avatarUrl: "",
    username: "Anna",
    isOnline: false,
  },
];

export const Channels = () => {
  return (
    <div className="channels-container">
      {dummyChannels.map((channel) => (
        <ChannelCard
          key={channel.id}
          title={channel.title}
          username={channel.username}
          isOnline={channel.isOnline}
          avatarUrl={channel.avatarUrl}
          navigateToChannelHandler={() => {}}
          id={channel.id}
        />
      ))}
    </div>
  );
};
