import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";

export default function VehicleList({ navigation }) {
  const [vehicles, setVehicles] = useState([
    { id: "1", plate: "ABC-1234", model: "Civic 2020" },
    { id: "2", plate: "XYZ-5678", model: "Gol 2018" },
  ]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Novo Veículo")}
        style={{ marginBottom: 10 }}
      >
        Adicionar Veículo
      </Button>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Title title={item.plate} subtitle={item.model} />
          </Card>
        )}
      />
    </View>
  );
}
