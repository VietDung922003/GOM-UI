import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

export default function ProfileView() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 24 }} />
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

      <BottomNavigation />
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
    width: 75,
    height: 75,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#8483BC',
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  label: {
    fontSize: 14,
    color: '#8483BC',
    marginBottom: 6,
    fontWeight: '500',
  },
  infoBox: {
    backgroundColor: '#E8E8FF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#55547A',
    fontWeight: '600',
  },
}); 