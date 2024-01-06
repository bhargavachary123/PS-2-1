import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require('../assets/icon.png')} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Location:</Text>
        <Text style={styles.detailsText}>New York, USA</Text>

        <Text style={styles.detailsLabel}>Phone:</Text>
        <Text style={styles.detailsText}>(555) 555-5555</Text>

        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ProfileScreen;
