import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';

import ListaLivros from './components/ListaLivros';

const App = () => {
  const [newLivro, setNewLivro] = useState('');
  const [qtdLivro, setQtdLivro] = useState('');
  const [livros, setLivros] = useState([]);

  const addLivros = () => {
    setLivros((livro) => [
      ...livro,
      {id: livro.length, nome: newLivro, qtd: qtdLivro},
    ]);
  };

  return (
    <ScrollView>
      <Text style={livrosApp.title}>Leia Resumos de Livros</Text>
      <View style={livrosApp.inputs}>
        <TextInput
          style={livrosApp.input}
          onChangeText={(text) => setNewLivro(text)}
          value={newLivro}
          autoCapitalize="none"
          placeholder="Nome do Livro"
        />
        <TextInput
          style={livrosApp.input}
          onChangeText={(text) => setQtdLivro(text)}
          value={qtdLivro}
          placeholder="Quantidade de Livros"
          keyboardType="numeric"
        />
        <TouchableOpacity style={livrosApp.btn} onPress={addLivros}>
          <Text style={livrosApp.btnText}>Adicionar Livro</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={livros}
          renderItem={({item}) => (
            <View>
              <ListaLivros nome={item.nome} qtd={item.qtd} lido={item.lido} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default App;

const livrosApp = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  inputs: {},
  input: {
    margin: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 7,
  },
  input1: {
    flexGrow: 2,
  },
  btn: {
    backgroundColor: '#00bbee',
    margin: 5,
    borderRadius: 5,
    height: 40,
  },
  btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 5,
  },
});
