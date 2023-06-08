import { Image, Text, View } from 'react-native';

export const TopSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={require('../assets/profilePhoto.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
        resizeMode='contain'
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 700 }}>447</Text>
        <Text>Posts</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 700 }}>3.6M</Text>
        <Text>Followers</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 700 }}>1,351</Text>
        <Text>Following</Text>
      </View>
    </View>
  );
};
