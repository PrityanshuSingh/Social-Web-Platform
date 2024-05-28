// MyComponent.j
import ChannelCard from "../ChannelCard/ChannelCard";
import channelsData from "../../../data/TestChannel.json";
import Channel from "./styles/CommunityChannel.module.css";

function CommunityChannel() {
  const { channelGroups } = channelsData;

  return (
    <div className={Channel.channelContainer}>
        <div className={Channel.channelList}>
            {channelGroups.map((group) => (
                <div key={group.id} className={Channel.channelGroup}>
                <div className={Channel.channelGroupTitle}>{group.title}</div>
                <div className={Channel.channelGroupContent}>
                    {group.channels.map((channel) => (
                    <ChannelCard
                        key={channel.id}
                        id={channel.id}
                        imageUrl={channel.imageUrl}
                        title={channel.title}
                    />
                    ))}
                </div>
                </div>
            ))}
      </div>
    </div>
  );
}

export default CommunityChannel;
