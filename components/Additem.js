import react, {useState} from 'react';
import { 
    StyleSheet,
    View, 
    TextInput, 
    Button, 
  
    } from 'react-native';
    

function AddItem (props){
    const onHandlerChangeItem = (texto) =>setTextItem(texto);
    const {addItem}= props;
    const [textItem , setTextItem] = useState();

    const onHandlerAddItem = () => {
        setTextItem('');
        addItem(textItem);
    }

    return (
        <View style={styles.addItemContainer}>
        <TextInput 
        placeholder= 'ingrese un item' 
        style={styles.input} 
        onChangeText={onHandlerChangeItem}/>
        <Button title='Agregar' onPress={ onHandlerAddItem}/>
     </View>
    )
}
const styles = StyleSheet.create ({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#000000',
        width:280,
        alignContent:'center',
        alignItems:'center',
        padding: 10,
        marginBottom: 20,
     
       },
       addItemContainer:{
         padding:50,
         backgroundColor:'#ffbf80',
         borderRadius:20,
         width:'100%',
         marginTop:100,
         
         
       
        
       
       },
}) 

export default AddItem;
