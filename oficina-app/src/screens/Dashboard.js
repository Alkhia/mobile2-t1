import React from "react";
import { View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text variant="titleLarge" style={{ marginBottom: 20 }}>
        Dashboard da Oficina
      </Text>
      <BarChart
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
          datasets: [{ data: [5, 8, 6, 10, 7] }],
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
        }}
      />
    </View>
  );
}
