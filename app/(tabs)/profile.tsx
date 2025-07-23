import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Switch } from "react-native";

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleEdit = () => {
    Alert.alert("Edit Profil", "Fitur ini masih dummy ya Incik Boss 😄");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F0F0F0", dark: "#202020" }}
      headerImage={
        <Image
          source={require("@/assets/images/sasha.jpg")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Incik Boss</ThemedText>
        <ThemedText type="subtitle">Calon programmer terkenal ✨</ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold">📧 Email</ThemedText>
          <ThemedText>incikboss@example.com</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold">📱 No HP</ThemedText>
          <ThemedText>08xxxxxxxxxx</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold">🌓 Mode Tema</ThemedText>
          <Switch
            value={isDarkMode}
            onValueChange={(val) => setIsDarkMode(val)}
          />
        </ThemedView>

        <Pressable onPress={handleEdit} style={styles.button}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            Edit Profil
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  headerImage: {
    height: 180,
    width: 180,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 30,
  },
  section: {
    gap: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#20C997",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
