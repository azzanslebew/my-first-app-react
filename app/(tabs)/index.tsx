import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/sasha.jpg")}
          style={styles.heroImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Selamat Datang, Incik Boss 👋</ThemedText>
        <ThemedText>
          Aplikasi pertamamu sudah aktif di React Native 🚀
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">📄 Ringkasan</ThemedText>
          <ThemedText>- Profil tersedia</ThemedText>
          <ThemedText>- Tampilan sudah dark/light mode</ThemedText>
          <ThemedText>- Siap ditambahkan fitur baru</ThemedText>
        </ThemedView>

        <Pressable
          onPress={() => router.push("/profile")}
          style={styles.button}
        >
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            Lihat Profil
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  heroImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#ffffff10",
    borderRadius: 12,
    padding: 16,
    gap: 6,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0084ff",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
