import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";

export default function ClientList({ navigation }) {
  const [clients, setClients] = useState([
    { id: "1", name: "Carlos Silva", phone: "(11) 99999-1111" },
    { id: "2", name: "Maria Souza", phone: "(11) 98888-2222" },
  ]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Novo Cliente")}
        style={{ marginBottom: 10 }}
      >
        Adicionar Cliente
      </Button>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Title title={item.name} subtitle={item.phone} />
          </Card>
        )}
      />
    </View>
  );
}
