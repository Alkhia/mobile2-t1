import React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  plate: yup.string().required("Placa obrigatória"),
  model: yup.string().required("Modelo obrigatório"),
  brand: yup.string().required("Marca obrigatória"),
  year: yup.string().required("Ano obrigatório"),
});

export default function VehicleForm({ navigation }) {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Veículo salvo:", data);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Controller
        control={control}
        name="plate"
        render={({ field: { onChange, value } }) => (
          <TextInput label="Placa" value={value} onChangeText={onChange} style={{ marginBottom: 10 }} />
        )}
      />
      <Controller
        control={control}
        name="model"
        render={({ field: { onChange, value } }) => (
          <TextInput label="Modelo" value={value} onChangeText={onChange} style={{ marginBottom: 10 }} />
        )}
      />
      <Controller
        control={control}
        name="brand"
        render={({ field: { onChange, value } }) => (
          <TextInput label="Marca" value={value} onChangeText={onChange} style={{ marginBottom: 10 }} />
        )}
      />
      <Controller
        control={control}
        name="year"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Ano"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            style={{ marginBottom: 10 }}
          />
        )}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>Salvar</Button>
    </View>
  );
}
