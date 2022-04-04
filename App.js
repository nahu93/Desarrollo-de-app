import react,{ useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  FlatList,
  } from 'react-native';

import {ModalItem} from './components/Modal';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [textItem , setTextItem] = useState();
  const [listItem, setListItem]= useState([]);
  const [itemSelected,setItemSelected] = useState ({});
  const [modalVisible,setModalVisible]= useState(false);

  const onHandlerChangeItem = (texto) =>setTextItem(texto);
  const onHandlerDelete = id => {
    setListItem( currentItems => currentItems.filter ( item = item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }
  const onHandlerModal = id =>{
    setItemSelected(listItem.filter (item => item.id === id )[0]);
    setModalVisible(!modalVisible)
  }
  
  const closeModal = ()=>{
    setModalVisible (!modalVisible);
  }


  const addItem = () =>{

    if(textItem!==""){
    setListItem( currentItems => 
      [...currentItems, {id: counter , value:textItem}
    ])
    setTextItem('');
    setCounter (counter + 1)
  }
  }
  

  const renderItem = data =><Text styles={styles.listItem} onPress= {onHandlerModal.bind(this, data.item.id)}>  * {data.item.value}</Text>

  return (
    <View styles={styles.container}>
       <View style={styles.addItemContainer}>
         <TextInput 
         placeholder= 'ingrese un item' 
         style={styles.input} 
         onChangeText={onHandlerChangeItem}/>
         <Button title='Agregar' onPress={addItem}/>
      </View>
       <View style={styles.listItemContainer}>
         <FlatList data={listItem}
           renderItem={renderItem}
           keyExtractor ={ item => item.id} >
           
         </FlatList>
         
      </View>

     <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    alignContent:'center',
    alignItems:'center',
    
  },
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
  listItemContainer:{
    backgroundColor:'#ffd9b3',
    width:'100%',
    height: 200,
    alignContent:'center',
    alignItems:'center',
    borderRadius:20,

   }
    

});
