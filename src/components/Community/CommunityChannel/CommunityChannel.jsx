import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ChannelCard from "../ChannelCard/ChannelCard";
import TestChannel from "../../../data/TestChannel.json";

import Channel from "./styles/CommunityChannel.module.css";

function CommunityChannel({ searchText }) {
  const [loading, setLoading] = useState(false);
  const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const filteredGroups = TestChannel.channelGroups.map((group) => {
        const filteredChannels = group.channels.filter((channel) =>
          channel.title.toLowerCase().includes(searchText.toLowerCase())
        );
        return { ...group, channels: filteredChannels };
      }).filter((group) => group.channels.length > 0);

      setFilteredGroups(filteredGroups);
      setLoading(false);
    }, 1000);
  }, [searchText]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : filteredGroups.length !== 0 ? (
        <div className={Channel.channelContainer}>
          <div className={Channel.channelList}>
            {filteredGroups.map((group) => (
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
      ) : (
        <div className={Channel.noResults}>No channels found</div>
      )}
    </>
  );
}

CommunityChannel.propTypes = {
  searchText: PropTypes.string,
};

export default CommunityChannel;
