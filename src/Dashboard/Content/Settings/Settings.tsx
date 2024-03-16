import { ChannelSettings, PasswordSetting, StreamKey } from ".";


const channelsSettings: { [key: string]: string } = {
  title: "title",
  description: "description",
  avatarUrl: "none",
  username: "Martin",
  streamKey: "1234",
};

export const Settings = () => {
  return (
    <div className="settings-container">
      <span>Setting</span>
      <ChannelSettings settings={channelsSettings} />
      <PasswordSetting/>
      <StreamKey streamKey={channelsSettings.streamKey} />
    </div>
  );
};
