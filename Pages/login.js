import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import {login} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';
import {setAccessToken} from './accessToke';

export default function Signup({navigation}) {
  const [userlogin] = useMutation(login);
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={async (values) => {
        const res = await userlogin({
          variables: {email: values.email, password: values.password},
        });
        if (res) {
          setAccessToken(res.data.login.accessToken);
        }
        navigation.navigate('home');
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="email"
            textContentType="emailAddress"
            value={values.email}
          />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="password"
            textContentType="password"
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Login" />
        </View>
      )}
    </Formik>
  );
}
