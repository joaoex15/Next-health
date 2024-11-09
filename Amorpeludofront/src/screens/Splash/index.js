import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CustomText, Logo } from '../../Components';

export const Splash =() =>{
  return (
    
    <View style={styles.container}>
      
      <Logo/>      
      <CustomText>Nexth Heath</CustomText>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
