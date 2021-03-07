import UserController from "./artifacts/UserController.json";
import UserStorage from "./artifacts/UserStorage.json";
import { eth, getInstance } from "./provider";

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const { id, username } = await storage.profiles.call(userId);

  return {
    id: parseInt(id),
    username: eth.extend.utils.toAscii(username),
  };
};

export const createUser = async (username) => {
  const controller = await getInstance(UserController);

  try {
    await ethereum.enable();
    const addresses = await eth.getAccounts();

    // Tutorial code called eth.utils.fromAscii(username) but I was getting undefined
    // eth.extend.utils works
    const result = await controller.createUser(
      eth.extend.utils.fromAscii(username),
      {
        from: addresses[0],
      }
    );

    return result;
  } catch (err) {
    console.error("Error creating user:", err);
  }
};
