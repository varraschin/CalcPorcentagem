import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

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
        <Text style={styles.title}>Calculadora de Porcentagem</Text>
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
          />
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={styles.label}>Porcentagem</Text>
          <TextInput
            style={styles.input}
            value={percentage}
            onChangeText={(text) => setPercentage(text)}
            placeholder="Ex. 15.5"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={calcularPorcentagem}
        >
          <Ionicons name="calculator-sharp" size={24} color="#edf2f4" />
          <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{messageResult}</Text>
          <Text style={styles.resultValue}>{result}</Text>
        </View>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',
  },
  titlecontainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#D90429',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    color: '#EDF2F4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: 'EDF2F4',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#D90429',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#D90429',
    borderBottomWidth: 1,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef233c',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#edf2f4',
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
    color: '#ef233c',
    fontWeight: 'bold',
  },
  resultValue: {
    fontSize: 48,
    color: '#ef233c',
    fontWeight: 'bold',
  }
});
