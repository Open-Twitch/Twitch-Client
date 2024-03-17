import { LoadingSpiner, useChannelSetting } from "@/shared";
import { ChannelSettings, PasswordSetting, StreamKey } from ".";

export const Settings = () => {
  const { channelsSettings,isFetching } = useChannelSetting();

  if (isFetching) {
    return <LoadingSpiner/>
  }

  return (
    <div className="settings-container">
      <span>Setting</span>
      <ChannelSettings settings={channelsSettings} />
      <PasswordSetting />
      <StreamKey streamKey={channelsSettings?.streamKey} />
    </div>
  );
};
