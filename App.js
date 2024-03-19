import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import CommentImage from "./assets/comment-alt.png";
import HeartImage from "./assets/heart.png";
import HomeImage from "./assets/home.png";
import SearchIcon from "./assets/search.png";
import SettingsImage from "./assets/settings.png";
import ShopImage from "./assets/shopping.png";
import FavoriteScreen from "./screens/Favorite";
import HomeScreen from "./screens/Home";
import MoreScreen from "./screens/More";
import RequestsScreen from "./screens/Requests";

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            // Max Height...
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            marginHorizontal: 0,
            paddingHorizontal: 20,
            paddingBottom: 5,
          },
        }}
      >
        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 15,
                }}
              >
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
            headerRight: () => (
              <Image
                source={ShopImage}
                style={styles.headerImage}
                contentFit="cover"
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 15,
                }}
              >
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
            headerRight: () => (
              <Image
                source={ShopImage}
                style={styles.headerImage}
                contentFit="cover"
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen
          name="Search"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#ffffff",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS == "android" ? 60 : 30,
                    elevation: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={SearchIcon}
                    contentFit="cover"
                    style={[
                      styles.image,
                      { tintColor: focused ? "black" : "grey" },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            ),
            tabBarLabel: () => "",
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Requests"
          component={RequestsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 15,
                }}
              >
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
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 15,
                }}
              >
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
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() * 0.4,
          height: 4,
          backgroundColor: "black",
          position: "absolute",
          bottom: 56,
          // Horizontal Padding = 20...
          left: 30,
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  const width = Dimensions.get("window").width;

  // Total five Tabs...
  return width / 5;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 20,
    height: 20,
  },
  headerImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
