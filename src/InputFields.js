import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputFields = ({ placeholder, value, onChangeText, inputwidth }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {width: inputwidth}]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 1,
    marginTop: 1,
  },
  input: {
    height: 50,
    borderRadius:8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InputFields;
