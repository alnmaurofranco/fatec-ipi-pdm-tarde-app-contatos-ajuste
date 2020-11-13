import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const ContatosTela = (props) => {
    return (
        <View style={estilos.container}>
            <Text>Lista de contatos</Text>
            <TouchableOpacity
                style={estilos.fab}
                onPress={() => { props.navigation.navigate('AdicionarContato') }}
            >
                <Text style={estilos.iconeFab}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    fab: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03a9f4',
        borderRadius: 30,
        elevation: 8
    },
    iconeFab: {
        fontSize: 20,
        color: 'white'
    }
})

export default ContatosTela;