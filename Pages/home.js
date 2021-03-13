import React from 'react';
import {View, Text, Button} from 'react-native';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {users, logout} from '../Graphql/gql';
import {setAccessToken} from './accessToke';

export default function home() {
  const {data, loading, error} = useQuery(users, {
    fetchPolicy: 'network-only',
  });
  const [userlogout, {client}] = useMutation(logout);
  if (loading) {
    return <Text>loading....</Text>;
  }

  if (error) {
    console.log(error);
    return <Text>error</Text>;
  }

  return (
    <>
      <View>
        {data.users.map((user) => (
          <Text key={user.id}>
            {user.email}" "{user.id}
          </Text>
        ))}
      </View>
      <Button
        title="Logout"
        onPress={async () => {
          await userlogout();
          setAccessToken('');
          await client.resetStore();
        }}
      />
    </>
  );
}
