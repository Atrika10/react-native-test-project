import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons/FontAwesome";
import { Entypo } from "react-native-vector-icons/FontAwesome";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import chatList from "@/utils/chatList";

const Index = () => {
  const pinnedChat = chatList.filter(chat => chat.isPinned);
  const conversationChat = chatList.filter(chat =>  !chat.isPinned);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topConatinerContent}>
          <View style={styles.topContainerDetails}>
            {/*Left part */}
            <View style={styles.topContainerDetailsLeft}>
              {/*image*/}
              <Image
                style={styles.profileImg}
                source={require("@/assets/images/profileIMG.jpg")}
              ></Image>
            </View>

            {/*Right part */}
            <View style={styles.topContainerDetailsRight}>
              <Text style={{ fontSize: 25, fontWeight: 700 }}> John Doe</Text>
              <Text style={{ fontSize: 18, fontWeight: 500 }}> At Work</Text>
            </View>
          </View>

          {/*Icons*/}
          <View style={styles.topContainerIcons}>
            <Icon name="search" size={30} color="black" />
            {/* <Icon name ='search' size={30}/> */}
            <Text style={{ fontSize: 25 }}>⫶</Text>
          </View>
        </View>

        <View style={styles.chatContainer}>
          <Text style={{ fontSize: 40, fontWeight: 700 }}> Chat</Text>
          <Text
            style={{
              fontSize: 20,
              backgroundColor: "white",
              borderRadius: 50,
              padding: 4,
              marginLeft: 10,
            }}
          >
            {" "}
            34
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {/* bottom container first div */}
        <View style={styles.columnName}>
          <Text style={[styles.eachColumnName, { color: "black" }]}>All</Text>
          <Text style={styles.eachColumnName}>Office</Text>
          <Text style={styles.eachColumnName}>Family</Text>
          <Text style={styles.eachColumnName}>Archive</Text>
        </View>
        {/* map chatList when isPinned true & RENDER below View*/}

        {chatList.forEach((item) => {
          console.log(JSON.stringify(item, null, 2));
        })}

        <View style={styles.allChatBox}>
          {/* bottom container second div for pinned chat */}
          <View style={styles.pinnedChatBox}>
            {/* pinned */}
            <View style={styles.pinnedChatBoxHeading}>
              <Text> 📌</Text>
              <Text style={{ color: "gray", fontWeight: "bold" }}> Pinned</Text>
            </View>

            <FlatList
              data={pinnedChat}
              renderItem={({ item, index }) => (
                <View>
                  <View style={styles.chatDetails}>
                      {/* images & status */}
                      <View style={styles.chatDetailsLeftHalf}>
                        <Image
                          style={styles.chatProfileImg}
                          source={require("@/assets/images/profileIMG.jpg")}
                        />

                        {/* story status */}
                        <View style={styles.storyStatus}></View>
                        {/* status green if person is online */}

                        {item.status === "online" && <Text style={styles.greenCircle}></Text>}
                        
                      </View>

                      <View style={styles.chatDetailsRightHalf}>
                        {/* name & msg */}
                        <View>
                          <Text style={styles.chatName}>{item.name}</Text>
                          <Text>{item.message}</Text>
                        </View>

                        {/* time & noOfMsg */}
                        <View style={styles.chatTimeBox}>
                          <Text style={{ fontSize: 12, fontWeight: "500" }}>
                            {item.time}
                          </Text>
                          <Text style={styles.noOfMsg}>{item.numberOfMsg}</Text>
                        </View>
                      </View>
                  </View>
                </View>
              )}
            />
          </View>

          {/* container for conversation chat */}
          <View>
              <View style={styles.pinnedChatBoxHeading}>
              <Text style={{ color: "gray", fontWeight: "bold", marginTop : 15 }}> Conversation</Text>
            </View>

            <FlatList 
             data={conversationChat}
             renderItem={({item, index}) => (
              <View>
                <View style={styles.chatDetails}>
                      {/* images & status */}
                      <View style={styles.chatDetailsLeftHalf}>
                        <Image
                          style={styles.chatProfileImg}
                          source={require("@/assets/images/profileIMG.jpg")}
                        />

                        {/* story status */}
                        <View style={styles.storyStatus}></View>
                        {/* status green if person is online */}
                        {item.status === "online" && <Text style={styles.greenCircle}></Text>}
                      </View>

                      <View style={styles.chatDetailsRightHalf}>
                        {/* name & msg */}
                        <View>
                          <Text style={styles.chatName}>{item.name}</Text>
                          <Text>{item.message}</Text>
                        </View>

                        {/* time & noOfMsg */}
                        <View style={styles.chatTimeBox}>
                          <Text style={{ fontSize: 12, fontWeight: "500" }}>
                            {item.time}
                          </Text>
                          {item.numberOfMsg > 0 && <Text style={styles.noOfMsg}>{item.numberOfMsg}</Text>}
                          
                        </View>
                      </View>
                  </View>
              </View>
             )}/>
          </View>
        </View>
        {/* bottom container third div for conversation chat */}
        <View style={styles.conversationChatBox}></View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e9eb",
  },
  topContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "#d9d9d9",
    paddingTop: 70,
    paddingLeft: 25,
    paddingRight: 25,
  },
  topConatinerContent: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topContainerDetails: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  topContainerDetailsLeft: {},
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  topContainerDetailsRight: {
    marginTop: 10,
  },
  topContainerIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 25,
    gap: 30,
    marginTop: 15,
  },

  chatContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  bottomContainer: {
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  columnName: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eachColumnName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#8d8d8d",
  },
  allChatBox: {
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    borderRadius: 20,
  },
  pinnedChatBox: {},
  pinnedChatBoxHeading: {
    flexDirection: "row",
    gap: 4,
  },

  chatDetails: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 15,
  },
  chatDetailsLeftHalf: {},
  chatDetailsRightHalf: {
    width : "75%",
    // backgroundColor : "red",
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent : "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(25,31,52, 0.2)",
  },
  chatProfileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  storyStatus: {
    position: "absolute",
    width: "100%",
    height: "80%",
    borderWidth: 4,
    borderColor: "rgb(87,27,126)",
    borderRadius: 50,
  },
  greenCircle: {
    width: 15,
    height: 15,
    backgroundColor: "#1fd655",
    borderRadius: 50,
    position: "absolute",
    bottom: 22,
    right: 5,
  },
  chatName: {
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
  chatMessage: {},
  chatTimeBox: {
    paddingTop: 10,
    gap: 10,
    alignItems: "center",
  },
  noOfMsg: {
    backgroundColor: "red",
    color: "white",
    paddingLeft: 8,
    paddingTop: 3,
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  conversationChatBox: {},
});
