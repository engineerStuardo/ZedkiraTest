import { SafeAreaView, View } from 'react-native';
import { TopSection } from '../components/TopSection';
import { MiddleSection } from '../components/MiddleSection';
import { BottomSection } from '../components/BottomSection';

export function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 20 }}>
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </View>
    </SafeAreaView>
  );
}
