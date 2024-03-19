import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import HeartImage from "../assets/heart.png";
import CheckImage from "../assets/check-circle.png";
import MenuImage from "../assets/menu.png";
import ShareImage from "../assets/share.png";

const Favorite = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {
            padding: 20,
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.card, { padding: 10, backgroundColor: "#E5E4E2" }]}
          >
            <Image
              source={HeartImage}
              style={{ height: 20, width: 20 }}
              tintColor={"grey"}
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <Text style={{ fontWeight: "500" }}>Favorites</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12 }}>0 Items</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>
                  Default Collection{" "}
                </Text>
                <Image
                  source={CheckImage}
                  style={{ height: 12, width: 12 }}
                  tintColor={"green"}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 50,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={ShareImage}
            style={{ height: 18, width: 18 }}
            tintColor={"grey"}
          />
          <Image
            source={MenuImage}
            style={{ height: 18, width: 18 }}
            tintColor={"grey"}
          />
        </View>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    shadowColor: "grey",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
});
