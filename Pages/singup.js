import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import {register} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';

export default function Signup({navigation}) {
  const [usercreate, res] = useMutation(register);
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={async (values) => {
        await usercreate({
          variables: {email: values.email, password: values.password},
        });
        navigation.navigate('home');
        if (res) console.log(res);
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
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
