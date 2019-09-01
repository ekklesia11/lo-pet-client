import axios from 'axios'

// client-server controlling functions
const serverUrl = 'http://127.0.0.1:5001';

const postLoginData = async (user) => {
  try {
    let res = await axios.post(serverUrl + '/login', user);
    return res.data;
  }
  catch (err) {
    console.error(err);
  }
}

// export
export default postLoginData;