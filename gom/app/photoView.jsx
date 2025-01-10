import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

export default function PhotoView() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('titles');

  const eventsByTitle = [
    {
      id: 1,
      title: 'Sinh nhật của anh Toàn',
      images: Array(16).fill(require('../assets/images/birthday.jpg')),
    },
    {
      id: 2,
      title: 'Đám cưới của chị Bích',
      images: Array(16).fill(require('../assets/images/wedding.jpg')),
    },
  ];

  const eventsByDate = [
    {
      id: 1,
      title: '12/01/2024',
      images: Array(16).fill(require('../assets/images/birthday.jpg')),
    },
    {
      id: 2,
      title: '14/01/2024',
      images: Array(16).fill(require('../assets/images/wedding.jpg')),
    },
  ];

  const renderEventPhotos = (event) => (
    <View key={event.id} style={styles.eventSection}>
      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.photoGrid}>
        {event.images.map((image, index) => (
          <View key={index} style={styles.photoWrapper}>
            <Image
              source={image}
              style={styles.photoThumbnail}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ảnh</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'titles' && styles.activeTab]}
          onPress={() => setActiveTab('titles')}
        >
          <Text style={[styles.tabText, activeTab === 'titles' && styles.activeTabText]}>
            Tiêu đề kỷ niệm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'dates' && styles.activeTab]}
          onPress={() => setActiveTab('dates')}
        >
          <Text style={[styles.tabText, activeTab === 'dates' && styles.activeTabText]}>
            Ngày kỷ niệm
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'titles' 
          ? eventsByTitle.map(event => renderEventPhotos(event))
          : eventsByDate.map(event => renderEventPhotos(event))
        }
      </ScrollView>

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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 4,
    marginHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#B1AFFF',
  },
  tabText: {
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  eventSection: {
    marginBottom: 24,
  },
  eventTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8483BC',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  photoWrapper: {
    width: '25%',
    aspectRatio: 1,
    padding: 2,
  },
  photoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
}); 