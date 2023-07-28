import { KeyboardAvoidingView, Platform,View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";


export default function App(){
    return(
        <SafeAreaView style= {{flex:1
        }}>
<KeyboardAvoidingView
behavior={Platform.OS == "ios" ? 'padding' : " " }
style={{
    height:'100%',
    

}}

        </SafeAreaView>
    )
}