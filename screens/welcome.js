import React from "react";
import { View,Text,Image,Button,Pressable } from "react-native";
import COLORS from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";


const welcome = ({ navigation }) =>{

return(
    <LinearGradient style={{ 
        flex:1
    }}
    colors={[ COLORS.grey]} >

<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
<View style= {{flex: 1} }>
<View>
    
<Image source={require("../assets/mss.jpg")}
        style={{
            height:100,
            width:100,
            borderRadius: 20,
            position:"absolute",
            top:200,
            alignItems:'center'
        }
        }
    />
</View>
<View style={{
    paddingHorizontal:22,
    position:"absolute",
    top:400,
    width:"100%",
}}>
    <Text style={{
        fontSize:60,
        fontWeight:800,
        color: COLORS.black,
    }}>Let's Get</Text>
    <Text style={{
        fontSize:40,
        fontWeight:800,
        color: COLORS.black,
    }}>Started ....</Text>
</View>
<View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginVertical: 4
                        }}>...</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>...</Text>
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 10,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center",
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

</View>
</View>
</SafeAreaView>
</LinearGradient>
)

}

export default welcome;