import react,{ useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  FlatList,
  } from 'react-native';

import ModalItem from './components/Modal';
import AddItem from './components/Additem';


export default function App() {
  const [counter, setCounter] = useState(0);
  
  const [listItem, setListItem]= useState([]);
  const [itemSelected,setItemSelected] = useState ({});
  const [modalVisible,setModalVisible]= useState(false);

  
  const onHandlerDelete = id => {
    setListItem( currentItems => currentItems.filter ( item => item.id !== id));
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


  const addItem = (textItem) =>{

    if(textItem!==""){
    setListItem( currentItems => 
      [...currentItems, {id: counter , value:textItem}
    ])
    
    setCounter (counter + 1)
  }
  }
  

  const renderItem = data =><Text styles={styles.listItem} onPress= {onHandlerModal.bind(this, data.item.id)}>  * {data.item.value}</Text>

  return (
    <View styles={styles.container}>

      <AddItem addItem={addItem}/>
      
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
 
  listItemContainer:{
    backgroundColor:'#ffd9b3',
    width:'100%',
    height: 200,
    alignContent:'center',
    alignItems:'center',
    borderRadius:20,

   }
    

});
