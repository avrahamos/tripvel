import { SettingsModel } from "../models/settingsModel";
import { Setting } from "../types/models";

export const getSettingsService = async () => {
  try {
    const setting = await SettingsModel.find({}).lean();
    return setting;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchSettingsService = async (newSettings: Setting) => {
  try {
    const updateSetting = await SettingsModel.findOneAndUpdate(
      {},
      { $set: newSettings }
    );
    return updateSetting;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sid = async () => {
  try {
    const firstDoc = new SettingsModel({});
    await firstDoc.save();
    return firstDoc;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
