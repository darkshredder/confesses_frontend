import React, { Component } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      his_her_name: "",
      his_her_branch_year_hostel: "",
      your_name_branch_year_hostel: "",
      your_confession: "",
      to_moderator: "",
    };
  }

  updateValue(text, field) {
    if (field == "His/Her Name") {
      this.setState({
        his_her_name: text,
      });
    }
    if (field == "His/Her Branch/Year/Hostel") {
      this.setState({
        his_her_branch_year_hostel: text,
      });
    }
    if (field == "Your Name/Branch/Year/Hostel") {
      this.setState({
        your_name_branch_year_hostel: text,
      });
    }
    if (field == "Your Confession") {
      this.setState({
        your_confession: text,
      });
    }
    if (field == "Admin se Kuch kehna hai?") {
      this.setState({
        to_moderator: text,
      });
    }
  }

  submit() {
    let data = {};
    (data.his_her_name = this.state.his_her_name),
      (data.his_her_branch_year_hostel = this.state.his_her_branch_year_hostel),
      (data.your_name_branch_year_hostel = this.state.your_name_branch_year_hostel),
      (data.your_confession = this.state.your_confession),
      (data.to_moderator = this.state.to_moderator);
    fetch("http://localhost:8000/confessions/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        Alert.alert("Confession Succesfully Sent to Moderator");
      })
      .catch((error) => {
        console.error("Error:", error);
        Alert.alert("Try again Some error Occured");
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Confess It</Text>
        </View>
        <View style={styles.footer}>
          <Text style={[styles.text_footer]}>His/Her Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="His/Her Name"
              onChangeText={(text) => this.updateValue(text, "His/Her Name")}
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer]}>His/Her Branch/Year/Hostel</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="His/Her Branch/Year/Hostel"
              onChangeText={(text) =>
                this.updateValue(text, "His/Her Branch/Year/Hostel")
              }
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer]}>Your Name/Branch/Year/Hostel</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="Your Name/Branch/Year/Hostel"
              onChangeText={(text) =>
                this.updateValue(text, "Your Name/Branch/Year/Hostel")
              }
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer]}>Your Confession</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="Your Confession"
              onChangeText={(text) => this.updateValue(text, "Your Confession")}
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer]}>Admin se Kuch kehna hai?</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="Admin se Kuch kehna hai?"
              onChangeText={(text) =>
                this.updateValue(text, "Admin se Kuch kehna hai?")
              }
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity onPress={() => this.submit()} style={styles.button}>
            <Text style={[styles.tesxtSign, { color: "#fff" }]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#08d4c4",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
