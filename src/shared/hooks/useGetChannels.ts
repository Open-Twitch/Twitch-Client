/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getChannels, getFollowedChannels } from "@/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useGetChannels = () => {
  const [channels, setChannels] = useState<any>(null);

  const fetchChannels = async (isLogged = false) => {
    const channelsData: any = await getChannels();

    if (channelsData.error) {
      return toast.error(
        channelsData.exception?.channelsData?.data ||
          "Error occurred when fetching channels"
      );
    }

    if (!isLogged) {
      return setChannels({
        channels: channelsData?.data?.channels,
      });
    }

    const followedChannelsData: any = await getFollowedChannels();

    if (followedChannelsData.error) {
      return toast.error(
        followedChannelsData.exception?.followedChannelsData?.data ||
          "Error occurred when fetching followed channels"
      );
    }

    setChannels({
      channels: channelsData?.data?.channels,
      followedChannels: followedChannelsData?.data?.followedChannels,
    });
  };

  useEffect(() => {
    console.log(channels);
  }, [channels]);

  return {
    isFetching: !channels,
    channels,
    fetchChannels,
  };
};
