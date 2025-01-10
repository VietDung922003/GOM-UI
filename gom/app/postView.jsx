import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import { useRouter } from 'expo-router';

const SCREEN_HEIGHT = Dimensions.get("window").height;

const POSTS = [
  {
    id: 1,
    date: "T4, 01/01/2024",
    location: "Phố cổ Hà Nội",
    time: "11:11 AM",
    description:
      "Tôi cùng gia đình đã có 1 chuyến tham quan đầy thú vị tại phố cổ Hà Nội, các con của chúng tôi đã rất thích thú khi nhìn thấy những món đồ chơi, tôi và chồng đã mua cho cho Linh 1 con búp bê và Khang 1 chiếc ô tô nhỏ. Chúng đã rất vui với những món quà đó.",
  },
  {
    id: 2,
    date: "T3, 31/12/2023",
    location: "Công viên Thống Nhất",
    time: "15:30 PM",
    description:
      "Chiều nay cả nhà đi dạo ở công viên Thống Nhất. Thời tiết mát mẻ, các bé chạy nhảy vui đùa rất thích. Chúng tôi đã có một buổi chiều thật đáng nhớ.",
  },
  {
    id: 3,
    date: "T2, 30/12/2023",
    location: "Nhà hàng Việt Nam",
    time: "18:45 PM",
    description:
      "Bữa tối sum họp gia đình tại nhà hàng. Các món ăn rất ngon, đặc biệt là món phở truyền thống. Các con rất thích món tráng miệng chè hạt sen.",
  },
  {
    id: 4,
    date: "CN, 29/12/2023",
    location: "Bảo tàng Dân tộc học",
    time: "10:00 AM",
    description:
      "Hôm nay cả nhà đi tham quan bảo tàng. Các con được học về văn hóa các dân tộc Việt Nam. Chúng tỏ ra rất hứng thú với các hiện vật cổ.",
  },
  {
    id: 5,
    date: "T7, 28/12/2023",
    location: "Công viên nước",
    time: "09:15 AM",
    description:
      "Một ngày vui chơi tại công viên nước. Các bé thích thú với các trò chơi dưới nước. Chúng tôi đã có những giây phút thư giãn tuyệt vời.",
  },
  {
    id: 6,
    date: "T6, 27/12/2023",
    location: "Vườn bách thú",
    time: "14:20 PM",
    description:
      "Tham quan vườn bách thú, các con được xem nhiều loài động vật thú vị. Bé Linh đặc biệt thích những chú hươu cao cổ, còn Khang thì mê các chú khỉ tinh nghịch.",
  },
  {
    id: 7,
    date: "T5, 26/12/2023",
    location: "Khu vui chơi trẻ em",
    time: "16:00 PM",
    description:
      "Buổi chiều vui chơi tại khu giải trí. Các con được thử nhiều trò chơi mới. Đặc biệt là khu vực xây dựng sáng tạo khiến các bé rất hứng thú.",
  },
  {
    id: 8,
    date: "T4, 25/12/2023",
    location: "Nhà sách",
    time: "13:40 PM",
    description:
      "Ghé thăm nhà sách lớn, chọn sách cho các con. Linh thích những cuốn truyện cổ tích, còn Khang chọn sách về khoa học. Thật vui khi thấy các con yêu thích đọc sách.",
  },
];

export default function PostView() {
  const [currentDotIndex, setCurrentDotIndex] = useState(7); // Start from most recent (last dot)
  const scrollViewRef = useRef(null);
  const router = useRouter();

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const postHeight = SCREEN_HEIGHT - 200; // Approximate height of each post
    const index = Math.min(
      7,
      Math.max(0, 7 - Math.floor(scrollPosition / postHeight))
    );
    setCurrentDotIndex(index);
  };

  const renderTimelineDot = (index) => {
    const isActive = index === currentDotIndex;
    return (
      <View
        key={index}
        style={[styles.timelineDot, isActive && styles.timelineDotActive]}
      />
    );
  };

  const renderPost = (post) => (
    <View key={post.id} style={styles.postContent}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{post.date}</Text>
        {post.id === 1 && (
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => router.push('addPost')}
          >
            <Text style={styles.addButtonText}>Thêm kỷ niệm</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.location}>{post.location}</Text>
      <Text style={styles.time}>{post.time}</Text>
      <Text style={styles.description}>{post.description}</Text>

      <View style={styles.imageGrid}>
        <View style={styles.imageRow}>
          <View style={[styles.image, styles.imageLarge]} />
          <View style={styles.imageColumn}>
            <View style={styles.imageSmall} />
            <View style={styles.imageSmall} />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Memory Book</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={styles.scrollView}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {POSTS.map((post) => renderPost(post))}
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.timeline}>
        <View style={styles.timelineBar}>
          <View style={styles.timelineDots}>
            {[...Array(8)].map((_, i) => renderTimelineDot(i))}
          </View>
          <Text style={styles.timelineTextLeft}>Quá khứ</Text>
          <Text style={styles.timelineTextRight}>Hiện tại</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: "#B1AFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    padding: 5,
  },
  addButton: {
    backgroundColor: '#B1AFFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  dateText: {
    fontSize: 20,
    color: "#B1AFFF",
  },
  postContent: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
  },
  imageGrid: {
    marginTop: 15,
  },
  imageRow: {
    flexDirection: "row",
    gap: 10,
  },
  imageColumn: {
    flex: 1,
    gap: 10,
  },
  imageLarge: {
    flex: 2,
    height: 300,
    backgroundColor: "#808080",
    borderRadius: 10,
  },
  imageSmall: {
    flex: 1,
    height: 145,
    backgroundColor: "#808080",
    borderRadius: 10,
  },
  timeline: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: "#B1AFFF",
    borderRadius: 50,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 60,
  },
  timelineBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  timelineDots: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    transform: [{ translateY: -5 }],
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    opacity: 0.5, // Làm mờ các dot không active
    transform: [{ scale: 1 }], // Default scale
  },
  timelineDotActive: {
    opacity: 1, // Dot active sẽ sáng hơn
    transform: [{ scale: 1.3 }], // Dot active sẽ lớn hơn 30%
  },
  timelineTextLeft: {
    position: "absolute",
    left: 15,
    bottom: 5,
    color: "#fff",
    fontSize: 12,
  },
  timelineTextRight: {
    position: "absolute",
    right: 15,
    bottom: 5,
    color: "#fff",
    fontSize: 12,
  },
});
