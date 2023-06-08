import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const MiddleSection = () => {
  return (
    <>
      <View style={{ marginTop: 20, marginBottom: 5 }}>
        <Text style={{ fontWeight: 700 }}>Noah Beck</Text>
        <Text style={{ color: '#a3a3a3' }}>Athlete</Text>
        <Text>noah@talentxent.com</Text>
        <Text>do what makes you happy3</Text>
        <Text style={{ color: '#4a8af0', fontWeight: 600 }}>
          linktr.ee/noahbeck
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            backgroundColor: '#F3F3F3',
            height: 60,
            borderRadius: 6,
          }}
          multiline
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#F3F3F3',
              width: 100,
              padding: 5,
              alignItems: 'center',
              borderRadius: 6,
            }}
          >
            <Text style={{ fontWeight: 600 }}>Plan Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F3F3F3',
              width: 100,
              padding: 5,
              alignItems: 'center',
              borderRadius: 6,
            }}
          >
            <Text style={{ fontWeight: 600 }}>Plan Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F3F3F3',
              width: 100,
              padding: 5,
              alignItems: 'center',
              borderRadius: 6,
            }}
          >
            <Text style={{ fontWeight: 600 }}>Plan Mode</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
