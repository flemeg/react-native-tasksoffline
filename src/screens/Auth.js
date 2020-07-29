import React, { Component } from 'react'
import {
    Alert,
    ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform
} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false,
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar conta')
        } else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={backgroundImage}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie sua conta' : 'Informe seus dados'}
                    </Text>

                    {this.state.stageNew &&
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            value={this.state.name}
                            onChange={name => this.setState({ name })} />
                    }

                    <TextInput
                        onChangeText={email => this.setState({ email })}
                        style={styles.input}
                        placeholder='E-mail'
                        value={this.state.email} />
                    <TextInput
                        value={this.state.password}
                        secureTextEntry={true}
                        onChange={password => this.setState({ password })}
                        style={styles.input}
                        placeholder='Senha' />

                    {this.state.stageNew &&
                        <TextInput
                            value={this.state.confirmPassword}
                            secureTextEntry={true}
                            onChange={confirmPassword => this.setState({ confirmPassword })}
                            style={styles.input}
                            placeholder='Confirmar Senha' />
                    }

                    <TouchableOpacity
                        onPress={this.signinOrSignup}>

                        <View style={styles.button}>
                            <Text style={styles.buttonText} >
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={
                        () => this.setState({ stageNew: !this.state.stageNew })
                    }>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? "Já possui conta?" : "Ainda não possui conta?"}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})
