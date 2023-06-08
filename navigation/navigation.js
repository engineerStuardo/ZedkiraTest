import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name='Chat'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='chatbox-ellipses-outline'
              size={size}
              color={color}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name='AddPhoto'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='add-to-photos' size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name='SocialMedia'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='google-circles'
              size={size}
              color={color}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/profilePhoto.png')}
              style={{
                width: size,
                height: size,
                borderRadius: 100,
              }}
              resizeMode='contain'
            />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};
