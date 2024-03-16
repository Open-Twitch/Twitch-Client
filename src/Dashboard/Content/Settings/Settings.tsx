import { ChannelSettings } from "./ChannelSettings";
import { StreamKey } from "./StreamKey";

const channelsSettings ={
    title:'title',
    description:'description',
    avatarUrl:'none',
    username:'Martin',
    streamKey:'1234'
}

export const Settings = () => {
  return <div className="settings-container">
    <span>Setting</span>
    <ChannelSettings/>
    <StreamKey streamKey={channelsSettings.streamKey}/>
  </div>;
};
