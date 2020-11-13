import React, { useState } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Picker,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const AdicionarContatosTela = (props) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fotoURI, setFotoURI] = useState();

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            quality: 1,
        });
        setFotoURI(foto.uri);
    }

    return (
        <View style={estilos.container}>

            <TextInput
                style={estilos.nomeTextInput}
                placeholder="Nome do contato"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />

            <TextInput
                style={estilos.nomeTextInput}
                placeholder="Telefone do contato"
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}
            />

            <View style={estilos.cidadeECategoriaView}>

                <Picker
                    selectedValue={categoria}
                    style={estilos.categoriaPicker}
                    onValueChange={(value, index) => {
                        setCategoria(value)
                    }}
                    mode="dropdown"
                >
                    <Picker.Item label="Contato" value="Contato" />
                    <Picker.Item label="Desconhecido" value="Desconhecido" />
                    <Picker.Item label="Conhecido" value="Conhecido" />
                </Picker>

            </View>

            <View style={estilos.previewImageView}>
                {
                    fotoURI ?
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: fotoURI }}
                        />
                        :
                        <Text>Sem foto no momento.</Text>
                }

            </View>
            <View styles={estilos.tirarFotoButton}>
                <Button
                    title="SELECIONAR FOTO"
                    onPress={tirarFoto}
                />
            </View>

            <TouchableOpacity
                style={estilos.fab}
            >
                <Text style={estilos.iconeFab}>OK</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    nomeTextInput: {
        width: '90%',
        textAlign: 'center',
        padding: 12,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 8,
        alignSelf: 'center'
    },
    cidadeECategoriaView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 12
    },
    cidadeTextInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '40%'
    },
    categoriaPicker: {
        width: '95%',
    },
    previewImageView: {
        alignSelf: 'center',
        width: '90%',
        height: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tirarFotoButton: {
        width: '80%',
        alignSelf: 'center'
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#03a9f4',
        borderRadius: 30,
        elevation: 8
    },
    iconeFab: {
        fontSize: 14,
        color: 'white'
    }
})

export default AdicionarContatosTela;