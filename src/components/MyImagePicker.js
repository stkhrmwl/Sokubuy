import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  title: {
    color: '#7E7E7E',
    fontSize: 16,
  },
  imageContainer: {
    width: 240,
    height: 240,
    backgroundColor: '#BFBFBF',
    borderRadius: 6,
  },
  thumbnail: {
    width: 240,
    height: 240,
    borderRadius: 6,
    resizeMode: 'cover',
  },
});

const MyImagePicker = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>参考画像</Text>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={openImagePickerAsync}
        >
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>参考画像</Text>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={openImagePickerAsync}
      ></TouchableOpacity>
    </View>
  );
};

export default MyImagePicker;
