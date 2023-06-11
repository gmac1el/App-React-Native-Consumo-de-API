import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const CEPInfo = () => {
  const [cep, setCep] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite um CEP:</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={handleSearch} />
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{`CEP: ${result.cep}`}</Text>
          <Text style={styles.resultText}>{`Logradouro: ${result.logradouro}`}</Text>
          <Text style={styles.resultText}>{`Bairro: ${result.bairro}`}</Text>
          <Text style={styles.resultText}>{`Cidade: ${result.localidade}`}</Text>
          <Text style={styles.resultText}>{`Estado: ${result.uf}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CEPInfo;
