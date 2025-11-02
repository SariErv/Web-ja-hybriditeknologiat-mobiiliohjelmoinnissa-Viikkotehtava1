import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")

  const isValid = age.trim() !== "" && !isNaN(Number(age))
  const ageNum: number = isValid ? Number(age) : 0
  
  const lLimit = isValid ? ((220 - ageNum) * 0.65).toFixed(2) : "0"
  const hLimit = isValid ? ((220 - ageNum) * 0.85).toFixed(2) : "0"
  //Kentässä on 0 kun arvoa ei ole syötetty, näyttää tuloksen kahden desimaalin tarkkuudella

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput 
      placeholder='age'
      keyboardType='number-pad'
      style={styles.input}
      value={age}
      onChangeText={setAge}
    />
    <Text style={styles.field}>Lower limit: {lLimit} bpm</Text>
    <Text style={styles.field}>Higher limit: {hLimit} bpm</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 22
  },
  field: {
    marginVertical: 2
  },
  input: {
    borderWidth: 1,
    borderColor: "#00000042",
    borderRadius: 6,
    marginBottom: 16,
    marginTop: 16,
    width: 80
  }
})
