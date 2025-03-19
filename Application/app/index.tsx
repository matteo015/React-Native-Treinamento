import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    default_header: {
    fontSize: 64,
    lineHeight: 24,
    padding: 20,
    color: '#ECEDEE',
    backgroundColor: '#151718',
  },
});

export function HeaderText(text : string){
  return (
    <Text style={styles.default_header}>{text}</Text>
  );
}

//Main?
export default function Index() {
  return (
    HeaderText('BOA TARDE PESSOAL')
  );
}