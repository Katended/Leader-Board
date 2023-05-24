const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'bVpxWEVuAdsFanj3Fkop';
const myURL = `${baseURL}/${gameId}/scores`;

const getData = async () => {
  try {
    const receiveData = await fetch(myURL);
    const result = await receiveData.json();

    return result;
  } catch (error) {
    return ('error:', error);
  }
};

export { myURL, getData };