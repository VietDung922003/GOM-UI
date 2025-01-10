import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddPost() {
  const router = useRouter();
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const emojis = [
    { id: 1, icon: '😊' },
    { id: 2, icon: '🥺' },
    { id: 3, icon: '😢' },
    { id: 4, icon: '😐' },
    { id: 5, icon: '😃' },
    { id: 6, icon: '😎' },
    { id: 7, icon: '😠' },
    { id: 8, icon: '😵' },
  ];

  return (
    <>
      <StatusBar backgroundColor="#B1AFFF" barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => {
              // Xử lý lưu bài post
              router.back();
            }}
          >
            <Text style={styles.saveButtonText}>Lưu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.captionContainer}>
            <TextInput
              style={styles.captionInput}
              placeholder="Hãy nói gì đó về bức ảnh này..."
              multiline
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.addImagePlaceholder}>
              <Ionicons name="add-circle-outline" size={40} color="#666" />
              <Text style={styles.addImageText}>Thêm ảnh</Text>
            </View>
          </View>

          <View style={styles.emojiContainer}>
            <View style={styles.emojiRow}>
              {emojis.map((emoji) => (
                <TouchableOpacity
                  key={emoji.id}
                  style={[
                    styles.emojiButton,
                    selectedEmoji === emoji.id && styles.selectedEmoji,
                  ]}
                  onPress={() => setSelectedEmoji(emoji.id)}
                >
                  <Text style={styles.emojiText}>{emoji.icon}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.emojiIndicator} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#B1AFFF',
    height: 60,
  },
  backButton: {
    padding: 8,
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveButtonText: {
    color: '#B1AFFF',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  captionContainer: {
    margin: 16,
    backgroundColor: '#B1AFFF',
    borderRadius: 12,
    padding: 2,
  },
  captionInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#000000',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  imageContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImageText: {
    marginTop: 8,
    color: '#666',
    fontSize: 16,
  },
  emojiContainer: {
    backgroundColor: '#B1AFFF',
    paddingBottom: 34,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  emojiButton: {
    padding: 8,
    borderRadius: 20,
  },
  selectedEmoji: {
    backgroundColor: '#9897DB',
  },
  emojiText: {
    fontSize: 24,
  },
  emojiIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 8,
  },
}); 