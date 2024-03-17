import { apiClient } from ".";

export const getChannelSetting = async () => {
  try {
    return await apiClient.get("/settings/channel");
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};

export const updateChannelSetting = async (data: { [key: string]: string }) => {
  try {
    return await apiClient.put("/settings/channel", data);
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};

export const changePassword = async (data: { [key: string]: string }) => {
  try {
    return await apiClient.patch("/settings/password", data);
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};
