import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import HomeImage from "./assets/home.png";
import HeartImage from "./assets/heart.png";
import CommentImage from "./assets/comment-alt.png";
import SettingsImage from "./assets/settings.png";
import FavoriteScreen from "./screens/Favorite";
import HomeScreen from "./screens/Home";
import MoreScreen from "./screens/More";
import RequestsScreen from "./screens/Requests";
import SearchIcon from "./assets/search.png";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ borderRadius: 50, backgroundColor: "white" }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          backgroundColor: "white",
          shadowOffset: 5,
          borderTopRightRadius: 20,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={HomeImage}
                contentFit="cover"
                style={[
                  styles.image,
                  { tintColor: focused ? "black" : "grey" },
                ]}
              />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerTitle: "VBD Landing Page",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={HeartImage}
                contentFit="cover"
                style={[
                  styles.image,
                  { tintColor: focused ? "black" : "grey" },
                ]}
              />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerTitle: "Favorites & Collections",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Search"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: -30 }}>
              <Image
                source={SearchIcon}
                contentFit="cover"
                style={[
                  styles.image,
                  { tintColor: focused ? "black" : "grey" },
                ]}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerTitleAlign: "center",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={CommentImage}
                contentFit="cover"
                style={[
                  styles.image,
                  { tintColor: focused ? "black" : "grey" },
                ]}
              />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={SettingsImage}
                contentFit="cover"
                style={[
                  styles.image,
                  { tintColor: focused ? "black" : "grey" },
                ]}
              />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});
