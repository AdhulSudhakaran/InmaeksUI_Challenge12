import React,{Component} from 'react'
import{
    View,StyleSheet,Text
}from 'react-native';


export default class Referrals extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Text>This is Referrals page</Text>

            </View>
        )
    }
}

const styles=StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            backgroundColor:'#a8a8a8',
            alignItems:'center',
            justifyContent:'center'
        }
    }
)