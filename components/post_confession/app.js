import  React, { Component } from "react";
import { Alert, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

class App extends Component {

    constructor()
    {
        super();
        this.state={
            his_her_name:'',
            his_her_branch_year_hostel: '',
            your_name_branch_year_hostel: '',
            your_confession: '',
            to_moderator: ''
        }
    }

    updateValue(text,field) {
        if(field=='His/Her Name'){
            this.setState({
                his_her_name:text,
            })
        }
         if(field=='His/Her Branch/Year/Hostel'){
            this.setState({
                his_her_branch_year_hostel:text,
            })
        }
         if(field=='Your Name/Branch/Year/Hostel'){
            this.setState({
                your_name_branch_year_hostel:text,
            })
        }
         if(field=='Your Confession'){
            this.setState({
                your_confession:text,
            })
        }
         if(field=='Admin se Kuch kehna hai?'){
            this.setState({
                to_moderator:text,
            })
        }
    }

    submit() {
        let data = {}
        data.his_her_name = this.state.his_her_name,
        data.his_her_branch_year_hostel = this.state.his_her_branch_year_hostel,
        data.your_name_branch_year_hostel = this.state.your_name_branch_year_hostel,
        data.your_confession = this.state.your_confession,
        data.to_moderator = this.state.to_moderator
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
            Alert.alert(
         'Confession Succesfully Sent to Moderator')
          })
          .catch((error) => {
            console.error("Error:", error);
            Alert.alert("Try again Some error Occured");
          });

    }

    render() {
        return (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TextInput
              placeholder="His/Her Name"
              onChangeText={(text) => this.updateValue(text, "His/Her Name")}
            />
            <TextInput
              placeholder="His/Her Branch/Year/Hostel"
              onChangeText={(text) =>
                this.updateValue(text, "His/Her Branch/Year/Hostel")
              }
            />
            <TextInput
              placeholder="Your Name/Branch/Year/Hostel"
              onChangeText={(text) =>
                this.updateValue(text, "Your Name/Branch/Year/Hostel")
              }
            />
            <TextInput
              placeholder="Your Confession"
              onChangeText={(text) => this.updateValue(text, "Your Confession")}
            />
            <TextInput
              placeholder="Admin se Kuch kehna hai?"
              onChangeText={(text) =>
                this.updateValue(text, "Admin se Kuch kehna hai?")
              }
            />
            <TouchableOpacity onPress={()=> this.submit()}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        );

    }

}

export default App