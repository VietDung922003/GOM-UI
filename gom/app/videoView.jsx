import { CameraView, useCameraPermissions } from 'expo-camera';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import * as MediaLibrary from 'expo-media-library';
import {Ionicons} from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import Button from './../components/Button';

export default function videoView() {
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
   <View style={{width: '100%', height: 35}}></View>
   <View style={styles.topControlsContainer}>

     <View style={{position: 'absolute', top: 60, right: 15, width: 40, height: 40, zIndex: 2} }>
       <Button icon='alarm-sharp' size={30} color='#B1AFFF'/>
     </View>

     <View style={styles.buttonPosition}>
       <Button icon='arrow-back-circle-outline' size={30} color='#B1AFFF' onPress={()=> router.back()}/>
       <View style={{height: 40, width: 160, borderRadius: 24, backgroundColor: '#B1AFFF24', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5}}>
         <Ionicons size={20} color={'#B1AFFF'} name="musical-notes"/>
         <Text style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 17, lineHeight: 22, textAlign: 'center', color: '#B1AFFF'}}>Thêm âm thanh</Text>
       </View>
       <Button icon='repeat-outline' size={30} color='#B1AFFF'  onPress={()=> toggleProperty('facing', 'front', 'back')}/>
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
   </View>
   
  

   <View style={styles.bottomControlsContainer}>
     <View style={styles.imageContainer}>
       
     </View>
     <Button 
       icon='radio-button-on-outline'
       size={150}
       style={{height: 150}}
       onPress={takePicture}
     />

     <View style={{flexDirection: 'row', gap: 7}}>
       <View style={{height: 58, width: 58, borderRadius: 90, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
       </View>

       <View style={{height: 60, width: 30, borderTopLeftRadius: 90, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 90, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
       </View>
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
  justifyContent: 'center'
 },
 cameraContainer: {
   height: 650,
   
   borderRadius: 20,
   overflow: "hidden"
 },
 topControlsContainer: {
   position: 'relative',
 },
 bottomControlsContainer: {
   height: 150,
   backgroundColor: '#B1AFFF',
   flexDirection: 'row',
   justifyContent: 'flex-end',
   alignItems: 'center',
   gap: 20
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
 },
 buttonPosition: {
   width: '90%',
   marginLeft: 20,
   position: 'absolute',
   top: 20,
   left: 0,
   zIndex: 2,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'
 }

});