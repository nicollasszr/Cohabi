import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

export default function RouterBar() {

  const navigation = useNavigation<any>(); 
  const route = useRoute(); 

  const changeScreen = (routeName: string) => {
    if (route.name !== routeName) {
      navigation.reset({
        index: 0,
        routes: [{ name: routeName }],
      });
    }
  };

  const isActive = (routeName: string) => route.name === routeName;

  return (
    <View style={styles.navBar}>
      
      <Pressable style={styles.navButton} onPress={() => changeScreen('Home')}>
        {/* MUDANÇA: Container circular que envolve o ícone e o texto quando selecionado */}
        <View style={[styles.iconContainer, isActive('Home') && styles.selectedCircle]}>
          <Octicons name="home" size={22} color={isActive('Home') ? '#2C3531' : '#5A6F61'} />
          <Text style={[styles.label, isActive('Home') && styles.labelSelected]}>Início</Text>
        </View>
      </Pressable>

      <Pressable style={styles.navButton} onPress={() => changeScreen('ShoppingList')}>
        <View style={[styles.iconContainer, isActive('ShoppingList') && styles.selectedCircle]}>
          <Ionicons name="basket-outline" size={24} color={isActive('ShoppingList') ? '#2C3531' : '#5A6F61'} />
          <Text style={[styles.label, isActive('ShoppingList') && styles.labelSelected]}>Compras</Text>
        </View>
      </Pressable>

      <Pressable style={styles.navButton} onPress={() => changeScreen('NoticeBoard')}>
        <View style={[styles.iconContainer, isActive('NoticeBoard') && styles.selectedCircle]}>
          <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={isActive('NoticeBoard') ? '#2C3531' : '#5A6F61'} />
          <Text style={[styles.label, isActive('NoticeBoard') && styles.labelSelected]}>Mural</Text>
        </View>
      </Pressable>

      <Pressable style={styles.navButton} onPress={() => changeScreen('Profile')}>
        <View style={[styles.iconContainer, isActive('Profile') && styles.selectedCircle]}>
          <MaterialCommunityIcons name="account-outline" size={24} color={isActive('Profile') ? '#2C3531' : '#5A6F61'} />
          <Text style={[styles.label, isActive('Profile') && styles.labelSelected]}>Perfil</Text>
        </View>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  navBar: { 
    flexDirection: 'row', 
    height: 70, 
    width: '100%', 
    // MUDANÇA: Fundo geral da barra ajustado para tom suave da paleta
    backgroundColor: '#E8EDE9', 
    borderTopWidth: 1,
    borderTopColor: '#D4DCD5', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  navButton: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1,
    height: '100%'
  },
  // MUDANÇA: Container interno para centralizar o ícone e texto juntos
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20, // Deixa as bordas bem arredondadas (estilo pílula/círculo suave)
  },
  // MUDANÇA: Cor de fundo aplicada apenas ao redor do ícone e texto na aba ativa
  selectedCircle: { 
    backgroundColor: '#C5D1C7', // Tom verde-acinzentado suave da paleta para o destaque
  },
  label: { 
    fontSize: 11, 
    color: '#5A6F61', 
    marginTop: 2 
  },
  labelSelected: {
    color: '#2C3531',
    fontWeight: 'bold'
  }
});