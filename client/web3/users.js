import UserController from "./artifacts/UserController.json";
import UserStorage from "./artifacts/UserStorage.json";
import { eth, getInstance } from "./provider";

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const profile = await storage.profiles.call(userId);

  const { id, username, firstName, lastName, bio, gravatarEmail } = profile;

  if (!parseInt(id)) throw "Couldn't find user!";

  return {
    id: parseInt(id),
    username: eth.extend.utils.toAscii(username),
    firstName: eth.extend.utils.toAscii(firstName),
    lastName: eth.extend.utils.toAscii(lastName),
    bio,
    gravatarEmail,
  };
};

export const getLoggedInUserId = async () => {
  try {
    await ethereum.enable();
    const addresses = await eth.getAccounts();

    if (!addresses) return;

    const storage = await getInstance(UserStorage);
    const userId = await storage.addresses.call(addresses[0]);

    return parseInt(userId);
  } catch (err) {
    console.error("ERROR:", err);
  }
};

export const getUserIdFromUsername = async (username) => {
  const storage = await getInstance(UserStorage);
  const encodedUsername = eth.extend.utils.fromAscii(username)
  const userId = await storage.usernames.call(encodedUsername);

  return userId;
};

export const createUser = async (...params) => {
  try {
    console.log("createUser: params:", params);
    await ethereum.enable();

    const controller = await getInstance(UserController);
    const addresses = await eth.getAccounts();

    // Tutorial code called eth.utils.fromAscii(username) but I was getting undefined
    // eth.extend.utils works
    const result = await controller.createUser(
      ...params,
      {
        from: addresses[0],
      }
    );

    return result;
  } catch (err) {
    console.error("Error creating user:", err);
  }
};
