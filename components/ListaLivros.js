import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const Component = ({nome, qtd}) => {
  const [lido, setLido] = useState(false);

  const lerLivro = () => {
    setLido((lido) => !lido);
  };

  return (
    <View style={listaLivros.lista}>
      <View>
        <Text style={listaLivros.items}> {nome}</Text>
        <Text style={listaLivros.subItems}>Quantidade de livros: {qtd}</Text>
      </View>
      <TouchableOpacity onPress={lerLivro}>
        <Text style={lido ? listaLivros.botaoLido : listaLivros.botaoLer}>
          {lido ? 'Lido' : 'Ler'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;

const listaLivros = StyleSheet.create({
  lista: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    margin: 5,
    padding: 5,
  },
  items: {
    fontSize: 20,
    color: '#fff',
  },
  subItems: {
    fontSize: 11,
    color: 'white',
  },
  botaoLido: {
    color: '#000000',
    fontSize: 17,
    width: 60,
    padding: 10,
    textAlign: 'center',
    marginRight: 5,
    backgroundColor: '#aaee88',
    borderRadius: 5,
  },
  botaoLer: {
    color: '#000000',
    fontSize: 17,
    width: 60,
    padding: 10,
    textAlign: 'center',
    marginRight: 5,
    backgroundColor: 'silver',
    borderRadius: 5,
  },
});
