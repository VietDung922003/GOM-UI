import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import * as MediaLibrary from 'expo-media-library';
import { useRouter } from 'expo-router';
import Button from '../components/Button';

export default function cameraView() {
  const router = useRouter();
 const [cameraPermission, requestCameraPermission] = useCameraPermissions();
 const [mediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
 const [cameraProps,setCameraProps] = useState({
   zoom: 0,
   facing: 'front',
   flash: 'on',
   animateShutter: false,
   enableTorch: false
 });

 const [image, setImage] = useState(null);
 const cameraRef = useRef(null);

 if(!cameraPermission || !mediaLibraryPermission) {
   return <View />
 }

 if(!cameraPermission.granted || mediaLibraryPermission.status !== 'granted') {
   return <View style={styles.containerPer}>
     <Text>We need permission to continue</Text>
     <TouchableOpacity style={styles.button} onPress={()=> {
       requestCameraPermission();
       requestMediaLibraryPermission();
     }}>
       <Text>Grant permissions</Text>
     </TouchableOpacity>
   </View>
 }

 const toggleProperty = (prop, option1, option2) => {
   setCameraProps((current) => ({
     ...current,
     [prop]: current[prop] === option1 ? option2 : option1
   }));
 };

 const takePicture = async() => {
   if(cameraRef.current) {
     try {
       const picture = await cameraRef.current.takePictureAsync();
       setImage(picture.url);
     } catch (err) {
       console.log('Error while taking the picture: ', err);
     }
   }
 }

 return (
   <View style={styles.container}>
     <View style={styles.topControlsContainer}>
       <Button icon='arrow-back-circle-outline' onPress={() => router.back()}/>
       <Text style={styles.text}>GOM</Text>
       <View style={styles.smallContainer}>
         <Button icon={cameraProps.flash === 'on' ? 'flash-sharp' : 'flash-off-sharp'} onPress={()=>toggleProperty('flash', 'on', 'off')}/>
         <Button icon='alarm-sharp'/>
       </View>
     </View>
     <View style={styles.cameraContainer}>
       <CameraView
         style={styles.camera}
         zoom={cameraProps.zoom}
         facing={cameraProps.facing}
         flash={cameraProps.flash}
         enableTorch={cameraProps.enableTorch}
         ref={cameraRef}
       />
     </View>

     <View style={styles.bottomControlsContainer}>
       <View style={styles.imageContainer}>
       </View>
       <Button 
         icon='radio-button-on-outline'
         size={130}
         style={{height: 130}}
         onPress={takePicture}
       />
       <View style={{height: 58, width: 58, borderRadius: 90, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
         <Button
         icon='repeat-outline'
         size={38}
         color='#B1AFFF'
         onPress={()=> toggleProperty('facing', 'front', 'back')}

         />
       </View>
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#B1AFFF',
 },
 containerPer: {
  flex: 1,
  backgroundColor: '#B1AFFF',
  alignItems: 'center',
  justifyContent: 'center',
 },
 cameraContainer: {
   height: 550,
   borderRadius: 20,
   overflow: "hidden"
 },
 topControlsContainer: {
   height: 50,
   backgroundColor: '#B1AFFF',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingHorizontal: 20,
   marginTop: 35,
 },
 bottomControlsContainer: {
   height: 180,
   backgroundColor: '#B1AFFF',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center'
 },
 smallContainer: {
   flexDirection: 'row',
   gap: 15
 },
 imageContainer: {
   height: 58,
   width: 58,
   backgroundColor: '#FBFBFF',
   borderRadius: 10
 },
 button: {
   backgroundColor: '#B1AFFF',
   padding: 10,
   margin: 5,
   borderRadius: 5,
 },
 text: {
   fontFamily: 'Inter',
   fontWeight: 700,
   fontSize: 27,
   lineHeight: 27,
   color: "#fff"
 },
 camera: {
   flex: 1,
 }

});
