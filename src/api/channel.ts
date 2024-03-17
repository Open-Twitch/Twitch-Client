import { apiClient } from ".";

export const getFollowedChannels = async () => {
  try {
    return await apiClient.get("/channels/followed");
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};

export const getChannels = async () => {
  try {
    return await apiClient.get("/channels");
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};
