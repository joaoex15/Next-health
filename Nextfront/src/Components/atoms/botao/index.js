import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonCust } from "./styles";
export const button =({nomeicon,size,color,função , height,width,borderRadius }) =>{
 
  
  return (
    <View style={styles}>
      <ButtonCust height={height}  width= {width} 
      borderRadius ={borderRadius}
      icon={<Icon name={nomeicon} size={size} color={color} />}

      title=''
      onPress={()=>{função}}/>

    </View>
  );
}




