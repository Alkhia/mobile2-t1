import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";

export default function MechanicList({ navigation }) {
  const [mechanics, setMechanics] = useState([
    { id: "1", name: "Pedro", specialty: "Motor" },
    { id: "2", name: "Lucas", specialty: "Suspensão" },
  ]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Novo Mecânico")}
        style={{ marginBottom: 10 }}
      >
        Adicionar Mecânico
      </Button>
      <FlatList
        data={mechanics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Title title={item.name} subtitle={item.specialty} />
          </Card>
        )}
      />
    </View>
  );
}
