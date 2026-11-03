import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Pressable } from "react-native";
import NavigationBar from "../components/RouterBar";

export default function ShoppingList(){

    return(

        <View style={{flex:1}}>

            <View style={{flex:1}}>
                
                <ScrollView horizontal={true} contentContainerStyle={styles.filterArea}>
                    
                    <Pressable style={styles.filter}>
                        <Text>
                            Mercado
                        </Text>
                    </Pressable>

                    <Pressable style={styles.filter}>
                        <Text>
                            Farmácia
                        </Text>
                    </Pressable>

                    <Pressable style={styles.filter}>
                        <Text>
                            Feira
                        </Text>
                    </Pressable>

                    <Pressable style={styles.filter}>
                        <Text>
                            Outros
                        </Text>
                    </Pressable>
                    
                </ScrollView>

            </View>

            <View style={{flex:5}}>

                <ScrollView>
                    <Text>
                        Àrea da lista
                    </Text>
                </ScrollView>

            </View>

            <NavigationBar></NavigationBar>
        </View>

    )

}

const styles = StyleSheet.create({

    filterArea:{
        flex:1,
        width:'100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    filter:{
        padding:10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10
    }

})