import { LoadingSpiner, useChannelSetting } from "@/shared";
import { ChannelSettings, PasswordSetting, StreamKey } from ".";

export const Settings = () => {
  const { channelsSettings,isFetching,saveSettings } = useChannelSetting();

  if (isFetching) {
    return <LoadingSpiner/>
  }

  return (
    <div className="settings-container">
      <span>Setting</span>
      <ChannelSettings settings={channelsSettings} saveSettings={saveSettings} />
      <PasswordSetting />
      <StreamKey streamKey={channelsSettings?.streamKey} />
    </div>
  );
};
