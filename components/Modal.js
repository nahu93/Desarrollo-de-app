import { 
    Text, 
    View, 
    Button, 
   
    } from 'react-native';

function ModalItem (props){
   const {visible,onDelete,item,onCancel}=props;

    return (
    <Modal 
    transparent={true}
    animationType='slide'
     visible={visible} >
      <View >
       <Text> Titulo Modal</Text>
      </View>
      <View>
        <Text>Desea borrar el item? </Text>
      </View>
      <View>
        <Text>{item.value }</Text>
      </View>
      <View>
        <Text>
          <Button title='Confirmar' onPress={onDelete.bind(this, item.id) }></Button>
          <Button title='Cancelar' onPress={onCancel.bind(this)}></Button>
        </Text>
      </View>

    </Modal>

)
}

export default ModalItem