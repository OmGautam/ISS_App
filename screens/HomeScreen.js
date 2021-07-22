import React,{Component} from 'react';
import {View, Text, StyleSheet, Platform, SafeAreaView, TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea}/>
                <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar Stage App</Text>
                </View>

                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("SpaceCrafts")}>
                    <Text style={styles.routeText}>Space Crafts</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("StarMap")}>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require('../assets/star_map.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("DailyPic")}>
                    <Text style={styles.routeText}>Daily Pics</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.bgDigit}>3</Text>
                    <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
    },
    routeCard:{
        flex:0.25,
        marginLeft:150,
        marginRight:150,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30,
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-10,
    },
    knowMore:{
        paddingLeft:30,
        color:"black",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"grey",
        fontSize:100,
        right:20,
        bottom:-10,
        zIndex:-1
    }
})
