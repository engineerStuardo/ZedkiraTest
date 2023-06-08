import { FlatList, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ImageList } from '../components/ImageList';

const data = [
  { id: '1', image: require('../assets/profilePhoto.png') },
  { id: '2', image: require('../assets/profilePhoto.png') },
  { id: '3', image: require('../assets/profilePhoto.png') },
  { id: '4', image: require('../assets/profilePhoto.png') },
  { id: '5', image: require('../assets/profilePhoto.png') },
  { id: '6', image: require('../assets/profilePhoto.png') },
  { id: '7', image: require('../assets/profilePhoto.png') },
  { id: '8', image: require('../assets/profilePhoto.png') },
  { id: '9', image: require('../assets/profilePhoto.png') },
  // Add more image objects here
];

export const BottomSection = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        <MaterialIcons name='grid-on' size={24} color='black' />
        <MaterialCommunityIcons
          name='play-box-multiple-outline'
          size={24}
          color='black'
        />
        <FontAwesome name='circle-o-notch' size={24} color='black' />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ImageList image={item.image} />}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </>
  );
};
