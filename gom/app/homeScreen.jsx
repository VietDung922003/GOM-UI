import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  const services = [
    {
      id: 1,
      title: 'Kỷ niệm',
      image: require('../assets/images/anniversary.jpg'),
    },
    {
      id: 2,
      title: 'Sinh nhật',
      image: require('../assets/images/birthday.jpg'),
    },
    {
      id: 3,
      title: 'Đám cưới',
      image: require('../assets/images/wedding.jpg'),
    },
    {
      id: 4,
      title: 'Đám hỏi',
      image: require('../assets/images/prewedding.jpg'),
    },
  ];

  const events = [
    {
      id: 1,
      date: '12/1',
      title: 'Lễ thành hôn của bạn An & Bích',
      image: require('../assets/images/event1.jpg'),
    },
    {
      id: 2,
      date: '14/1',
      title: 'Tiệc kỷ niệm 10 năm ngày cưới của Cường & Dung',
      image: require('../assets/images/event2.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Bạn đang tìm kiếm gì?"
              placeholderTextColor="#666"
            />
          </View>

          {/* Services Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Tìm lại những ký ức của mình</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Xem tất cả »</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
              {services.map((service) => (
                <TouchableOpacity key={service.id} style={styles.serviceCard}>
                  <Image source={service.image} style={styles.serviceImage} />
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

         

          {/* Events Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Sự kiện sắp tới</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Xem tất cả »</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.eventsContainer}>
              {events.map((event) => (
                <TouchableOpacity key={event.id} style={styles.eventCard}>
                  <View style={styles.eventDateContainer}>
                    <Text style={styles.eventDate}>{event.date}</Text>
                  </View>
                  <Image source={event.image} style={styles.eventImage} />
                  <Text style={styles.eventTitle}>{event.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Thêm padding bottom để tránh content bị che bởi navigation bar */}
          <View style={{ height: 80 }} />
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home" size={24} color="#007AFF" />
            <Text style={[styles.navText, styles.activeNavText]}>Trang chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="calendar" size={24} color="#666" />
            <Text style={styles.navText}>Ký ức</Text>
          </TouchableOpacity>

          {/* Nút chụp hình ở giữa */}
          <TouchableOpacity 
            style={styles.captureButton}
            onPress={() => router.push('cameraView')}
          >
            <View style={styles.captureButtonInner}>
              <Ionicons name="camera" size={24} color="#FFF" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="images" size={24} color="#666" />
            <Text style={styles.navText}>Ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person" size={24} color="#666" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007AFF',
  },
  servicesScroll: {
    paddingLeft: 16,
  },
  serviceCard: {
    marginRight: 16,
    width: 120,
  },
  serviceImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  qrSection: {
    backgroundColor: '#FFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photosIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  qrContent: {
    flex: 1,
  },
  qrTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  qrInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  qrInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  qrButton: {
    padding: 8,
  },
  eventsContainer: {
    paddingHorizontal: 16,
  },
  eventCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  eventDateContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
    zIndex: 1,
  },
  eventDate: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF3B30',
  },
  eventImage: {
    width: '100%',
    height: 150,
  },
  eventTitle: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
  },
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
    color: '#007AFF',
  },
  captureButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  captureButtonInner: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
}); 