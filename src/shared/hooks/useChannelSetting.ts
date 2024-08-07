/* eslint-disable @typescript-eslint/no-explicit-any */
import { getChannelSetting } from "@/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useChannelSetting = () => {
  const [channelsSettings, setChannelSetting] = useState<any>(null);

  const fetchChannelSetting = async () => {
    const response: any = await getChannelSetting();

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occured when fetching channel setting"
      );
    }

    setChannelSetting({
      username: response?.data?.username,
      title: response?.data?.title,
      description: response?.data?.description,
      avatarUrl: response?.data?.avatarUrl,
      streamKey: response?.data?.streamKey,
    });
  };

  const saveSettings = async () => {};

  useEffect(() => {
    fetchChannelSetting();
  }, []);

  return {
    isFetching: !channelsSettings,
    channelsSettings,
    saveSettings,
  };
};
