import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Routes from './Routes';
import {setAccessToken} from './Pages/accessToke';

export default function App() {
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    })
      .then(async (x) => {
        const {accessToken} = await x.json();
        setAccessToken(accessToken);
        Setloading(false);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  });
  return (
    <>
      {loading && <Text>loading....</Text>}
      {!loading && <Routes />}
    </>
  );
}
