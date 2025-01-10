import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => router.push('/homeScreen')}
      >
        <Ionicons 
          name="home" 
          size={24} 
          color={pathname === '/homeScreen' ? "#B6B4FD" : "#666"} 
        />
        <Text style={[styles.navText, pathname === '/homeScreen' && styles.activeNavText]}>
          Trang chủ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => router.push('postView')}
      >
        <Ionicons 
          name="calendar" 
          size={24} 
          color={pathname === '/postView' ? "#B6B4FD" : "#666"} 
        />
        <Text style={[styles.navText, pathname === '/postView' && styles.activeNavText]}>
          Ký ức
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.captureButton}
        onPress={() => router.push('cameraView')}
      >
        <View style={styles.captureButtonInner}>
          <View style={styles.circleOuter} />
          <View style={styles.circleMiddle} />
          <View style={styles.circleInner} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => router.push('photoView')}
      >
        <Ionicons 
          name="images" 
          size={24} 
          color={pathname === '/photoView' ? "#B6B4FD" : "#666"} 
        />
        <Text style={[styles.navText, pathname === '/photoView' && styles.activeNavText]}>
          Ảnh
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => router.push('profileView')}
      >
        <Ionicons 
          name="person" 
          size={24} 
          color={pathname === '/profileView' ? "#B6B4FD" : "#666"} 
        />
        <Text style={[styles.navText, pathname === '/profileView' && styles.activeNavText]}>
          Tài khoản
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 65,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#B6B4FD',
  },
  captureButton: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOuter: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 26,
    backgroundColor: '#ABA9F0',
  },
  circleMiddle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C9C8F9',
  },
  circleInner: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#B1AFFF',
  },
}); 