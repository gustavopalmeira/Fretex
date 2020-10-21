// import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

/* CORPO DO PROJETO */
class Login extends Component {
  render(){
      return(
        <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Text style={styles.title}>Fretex</Text>
        
        <TextInput
        style={styles.input}
        valeu={user}
        onChangeText={(user) => setUser(user)}
        placeholder="Usuário"
        />
        
        <TextInput
        style={styles.input}
        valeu={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Senha"
        />
        
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Perfil')}>
        <Text style={styles.buttonText} >Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText} >Não possuo cadastro</Text>
        </TouchableOpacity>
          </KeyboardAvoidingView>


      );
      const [user, setUser] = useState('');
      const [password, setPassword] = useState('');
  }
}

class Cadastro extends Component {
  render(){
      return(
        <KeyboardAvoidingView behavior="position" style={styles.body}> 
        <Text style={styles.nome}>Nome completo:</Text>
        <TextInput 
            style={styles.input}
            valeu={nome}
            onChangeText={(nome) => setNome(nome)}
            placeholder="Nome"
        />
        <Text style={styles.nome}>E-mail:</Text>
        <TextInput 
            style={styles.input}
            valeu={email}
            onChangeText={(email) => setEmail(email)}
            placeholder="E-mail"
        />
        <Text style={styles.nome}>CPF/CNPJ:</Text>
        <TextInput 
            style={styles.input}
            valeu={cpf}
            onChangeText={(cpf) => setCpf(cpf)}
            placeholder="CPF/CNPJ"
        />
        <Text style={styles.nome}>Telefone:</Text>
        <TextInput 
            style={styles.input}
            valeu={telefone}
            onChangeText={(telefone) => setTelefone(telefone)}
            placeholder="Telefone"
        />
        <Text style={styles.nome}>Senha:</Text>
        <TextInput 
            style={styles.input}
            valeu={senha}
            onChangeText={(senha) => setSenha(senha)}
            placeholder="Senha"
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      );
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [cpf, setcpf] = useState('');
      const [telefone, setTelefone] = useState('');
      const [senha, setSenha] = useState('');
  }
}

class Perfil extends Component {
  render(){
    return(
      <View style={styles.body}>
        <Text style={styles.titlePerfil}>Escolha qual perfil deseja utilizar</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Veiculo')}>
        <Text style={styles.buttonText}>Prestador de serviços</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cliente')}>
        <Text style={styles.buttonText}>Cliente</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class CadastroVeiculo extends Component{
  render(){
    return(
      <View style={styles.body}>

      <Text style={styles.nome}>Tipo do veículo:</Text>
      <TextInput 
          style={styles.input}
          valeu={veiculo}
          onChangeText={(veiculo) => setVeiculo(veiculo)}
          placeholder="Exemplo: Veículo Urbano de Carga (VUC)"
        />
        <Text style={styles.nome}>Placa do veículo:</Text>
        <TextInput 
          style={styles.input}
          valeu={placa}
          onChangeText={(placa) => setPlaca(placa)}
          placeholder="Exemplo: AAA-1234"
        />

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Prestador')}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        
      </View>
    );
    const [veiculo, setVeiculo] = useState('');
    const [placa, setPlaca] = useState('');
  }
}

class Frete extends Component {
  render(){
    return(
      <ScrollView style={styles.body}>
        <Text style={styles.titleFrete}>Solicitar frete</Text>
        
        <Text style={styles.titleNome}>Carga a ser transportada:</Text> 
        <TextInput 
          style={styles.input}
          valeu={carga}
          onChangeText={(carga) => setCArga(carga)}
          placeholder="Exemplo: geladeira"
        />
        
        <Text style={styles.titleNome}>Endereço de Partida:</Text> 
        <TextInput 
          style={styles.input}
          valeu={cep}
          onChangeText={(cep) => setCep(cep)}
          placeholder="CEP"
        />

        {/* <Picker 
            style={styles.picker}
            selectedValue={uf}
            onValueChange={
                (itemValor, itemIndex) => this.setState({uf:itemValor})
        }>
        <Picker.Item label="UF" value=""/>
        </Picker>

        <Picker 
            style={styles.picker}
            selectedValue={cidade}
            onValueChange={
                (itemValor, itemIndex) => this.setState({cidade:itemValor})
        }>
        <Picker.Item label="Cidade" value=""/>
        </Picker>

        <TextInput 
            style={styles.input}
            valeu={logradouro}
            onChangeText={(logradouro) => setLogradouro(logradouro)}
            placeholder="Logradouro"
          /> */}
        <TextInput 
            style={styles.input}
            valeu={numero}
            onChangeText={(numero) => setNumero(numero)}
            placeholder="Número"
          />
        <TextInput 
            style={styles.input}
            valeu={complemento}
            onChangeText={(complemento) => setComplemento(complemento)}
            placeholder="Complemento"
          />  

        <Text style={styles.titleNome}>Endereço de Entrega:</Text> 
        <TextInput 
          style={styles.input}
          valeu={cepDestino}
          onChangeText={(cepDestino) => setCepDestino(cepDestino)}
          placeholder="CEP"
        />

        {/* <Picker 
            style={styles.picker}
            selectedValue={uf}
            onValueChange={
                (itemValor, itemIndex) => this.setState({uf:itemValor})
            }
        >
          <Picker.Item label="UF" value=""/>
        </Picker>

        <Picker 
            style={styles.picker}
            selectedValue={cidade}
            onValueChange={
                (itemValor, itemIndex) => this.setState({cidade:itemValor})
            }
        >
          <Picker.Item label="Cidade" value=""/>
        </Picker>

        <TextInput 
            style={styles.input}
            valeu={logradouro}
            onChangeText={(logradouro) => setLogradouro(logradouro)}
            placeholder="Logradouro"
          /> */}
        <TextInput 
            style={styles.input}
            valeu={numeroDestino}
            onChangeText={(numeroDestino) => setNumeroDestino(numeroDestino)}
            placeholder="Número"
          />
        <TextInput 
            style={styles.input}
            valeu={complementoDestino}
            onChangeText={(complementoDestino) => setComplementoDestino(complementoDestino)}
            placeholder="Complemento"
          />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Prestador')}>
          <Text style={styles.buttonText}>Solicitar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
    const [carga, setCarga] = useState('');
    const [cep, setCep] = useState('');
    const [cepDestino, setCepDestino] = useState('');
    const [numero, setNumero] = useState('');
    const [numeroDestino, setNumeroDestino] = useState('');
    const [complemento, setComplemento] = useState('');
    const [complementoDestino, setComplementoDestino] = useState('');
  }
}

class FretePrestador extends Component {
  render(){
    return(
      <ScrollView style={styles.body}>
        <Text style={styles.titleFrete}>Menu</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Solicitações')}>
          <Text style={styles.buttonText}>Ver Solicitações</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Negociação')}>
          <Text style={styles.buttonText}>Negociações</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

class Solicitacao extends Component {
  render(){
    return(
      <ScrollView>
        <Text style={styles.titleFrete}>Solicitações</Text>
      </ScrollView>
    );
  }
}

class Negociacao extends Component {
  render(){
    return(
      <ScrollView style={styles.body}>
        <Text style={styles.titleFrete}>Negociação</Text>
        
      </ScrollView>
    );
  }
}

/* NAVEGAÇÃO */
const AppNavigator = createStackNavigator(
  {
      Login: {
        screen: Login
      },
      Cadastro:{
        screen: Cadastro
      },
      Perfil:{
        screen: Perfil
      },
      Veiculo: {
        screen: CadastroVeiculo
      },
      Cliente: {
        screen: Frete
      },
      Prestador: {
        screen: FretePrestador
      },
      Negociação:{
        screen: Negociacao
      },
      Solicitações: {
        screen: Solicitacao
      }      
  },
      {
      initialRouteName: 'Login'
      }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return <AppContainer/>
      
  }
}


/* ESTILO */
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#171d31',
  },
  title: {
  textAlign: 'center',
  marginTop: 200,
  fontSize: 40,
  color: '#FA9435'
  },
  input: {
  backgroundColor: '#e6e6fa',
  borderRadius: 10,
  margin: 10,
  padding: 10,
  color: '#000',
  fontSize: 20,
  },
  button: {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 15,
  backgroundColor: '#005ca3',
  padding:10,
  borderRadius: 20
  }, 
  buttonText: {
  fontSize: 20
  }, 
  body: {
  marginTop: 15,
  },
  nome: {
  marginLeft: 10,
  fontSize: 15,
  },
  titlePerfil: {
  textAlign: 'center',
  marginTop: 100,
  fontSize: 25,
  color: '#000'
  },
  titleFrete: {
  textAlign: 'center',
  marginTop: 15,
  fontSize: 25,
  color: '#000'
  },
  picker: {
    width: 350
  },
  titleNome: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20,
    },
  });

