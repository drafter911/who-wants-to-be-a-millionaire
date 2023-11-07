import { IGameData } from 'app/types';

export const readJsonFromFile = async (path: RequestInfo | URL): Promise<IGameData> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(path);
    if (response.status !== 200) {
      throw new Error(`Error ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export default readJsonFromFile;
