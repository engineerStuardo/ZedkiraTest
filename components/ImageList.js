import { Image, View } from 'react-native';

export const ImageList = ({ image }) => {
  return (
    <View
      style={{
        marginBottom: 2,
      }}
    >
      <Image
        source={image}
        style={{
          width: 120,
          height: 116,
          aspectRatio: 1,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};
