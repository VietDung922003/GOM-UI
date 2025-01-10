import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function profileView() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tài khoản</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileContent}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Thuỳ Trang</Text>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Tên tài khoản</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>trang123</Text>
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>trang123@gmail.com</Text>
          </View>

          <Text style={styles.label}>Ngày sinh</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>14/02/2003</Text>
          </View>

          <Text style={styles.label}>Tham gia được</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>40 ngày</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#B1AFFF',
    height: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  infoBox: {
    backgroundColor: '#F0F0F0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
}); 