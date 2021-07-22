import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, Platform, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMap extends Component{

    constructor(){
        super();
        this.state={
            latitude:'',
            longitude:'',
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea}/>
                
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar Stage App</Text>
                </View>

                <TextInput
                    style={styles.textInputs}
                    placeholder="Enter your latitude"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                />
                <TextInput
                    style={styles.textInputs}
                    placeholder="Enter your longitude"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude:text
                        })
                    }}
                />

                <WebView
                    scalesPageToFit={true}
                    source={{uri: "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"}} 
                    style={{marginTop:20, marginBottom:20,}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"black",
        alignItems:"center"
    },
    container:{
        flex:1
    },
    safeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    textInputs:{
        height:40,
        borderColor:"gray",
        borderWidth:1,
    }
})

