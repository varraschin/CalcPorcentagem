import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import batmanImg from './assets/batmanlogo.png';

export default function App() {
  const [number, setNumber] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);
  const [messageResult, setMessageResult] = useState("Preencha o número e a porcentagem");
  const [textButton, setTextButton] = useState("Calcular");

  function calcularPorcentagem() {
    if (number !== '' && percentage !== '' && !isNaN(number) && !isNaN(percentage)) {
      Keyboard.dismiss();
      const numberValue = parseFloat(number);
      const percentageValue = parseFloat(percentage);
      setResult(((numberValue * percentageValue) / 100).toFixed(0));
      setNumber('');
      setPercentage('');
      setMessageResult("O valor da porcentagem é");
      setTextButton("Calcular Novamente");
    } else {
      setResult(null);
      setMessageResult("Preencha o número e a porcentagem");
      setTextButton("Calcular");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>BatPorcentagem</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Calculadora de Porcentagem</Text>

        <View>
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={(text) => setNumber(text)}
            placeholder="Ex. 200"
            keyboardType="numeric"
            placeholderTextColor="#FFD600"
          />
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={styles.label}>Porcentagem</Text>
          <TextInput
            style={styles.input}
            value={percentage}
            onChangeText={(text) => setPercentage(text)}
            placeholder="Ex. 15"
            keyboardType="numeric"
            placeholderTextColor="#FFD600"
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={calcularPorcentagem}
        >
          <Ionicons name="calculator-sharp" size={24} color="#000" />
          <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{messageResult}</Text>
          <Text style={styles.resultValue}>{result}</Text>
          <Image source={batmanImg} style={styles.image} resizeMode="contain" />
        </View>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  titlecontainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#FFD600',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#000000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFD600',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#FFD600',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#FFD600',
    borderBottomWidth: 1,
    color: '#FFD600',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD600',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  resultText: {
    fontSize: 18,
    color: '#FFD600',
    fontWeight: 'bold',
    marginTop: 80
  },
  resultValue: {
    fontSize: 48,
    color: '#FFD600',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30
  }
});
