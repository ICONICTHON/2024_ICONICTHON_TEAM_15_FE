import React, { useState } from 'react';
import SelectIdolButton from '../components/SelectIdolButton.tsx';
import { View, Text, Image,Button,StyleSheet, Dimensions,ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function IdolSelectionScreen({navigation}){
  const idols = [
    { name: '임영웅', image: require('../assets/images/youngung_idol_image.png') },
    { name: '이찬원', image: require('../assets/images/chanwon_idol_image.png') },
    { name: '정동원', image: require('../assets/images/dongwon_idol_image.png') },
    { name: '영탁', image: require('../assets/images/youngtak_idol_image.png') },
    { name: '장민호', image: require('../assets/images/minho_idol_image.png') },
  ];
    const sendTitleToServer = async ()=> {
            try{
                const response = await fetch('https://localhost:8080/idol/{idol_id}', {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',},
                    });
        if (response.ok) {
              const responseData = await response.json();
              Alert.alert('성공', `서버에 데이터가 전송되었습니다: ${responseData.message}`);
            } else {
              Alert.alert('오류', '서버로 데이터를 전송하는 중 오류가 발생했습니다.');
            }
          } catch (error) {
            console.error(error);
            Alert.alert('오류', '네트워크 오류가 발생했습니다.');
          }
        };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < idols.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else if(currentIndex === idols.length-1){
        setCurrentIndex(currentIndex -idols.length+1);
        }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else if(currentIndex === 0){
        setCurrentIndex(currentIndex + idols.length-1)}
  };

    return (
        <View style={styles.container}>
        <ImageBackground
                source={require('../assets/images/background_idol.png')} // 배경 이미지 경로
                style={styles.backgroundImage}
                resizeMode="cover"
              >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
            style = {styles.gradientOverlay}
            />
            <View style={styles.head}>
            <View style={styles.header}>
                <Text style ={styles.uptitle}>
                아이돌 선택하기
                </Text>
                <TouchableOpacity style = {styles.changimg} onPress={()=>navigation.navigate('Choose')}>
                <Image source ={require('../assets/images/changetonormal.png')} />
                </TouchableOpacity>
            </View>
            <View style={[styles.words, {flexDirection: 'column'}]}>
                <Text style = {styles.sen}>
                좋아하는 가수를
                </Text>
                <Text style = {styles.sen}>
                선택해주세요.
                </Text>
            </View>
            </View>
            <View style={styles.main}>
                <Image source ={idols[(currentIndex-1+idols.length)%idols.length].image} style = {styles.sideimage}/>
                <TouchableOpacity onPress={handlePrev} style ={styles.arrowButton}>
                <Text style = {styles.arrowText}> {'<'}</Text>
                </TouchableOpacity>
                <Image source={idols[currentIndex].image} style= {styles.image}/>
                <TouchableOpacity onPress={handleNext} style ={styles.arrowButton}>
                <Text style = {styles.arrowText}> {'>'}</Text>
                </TouchableOpacity>
                <Image source={idols[(currentIndex+1)%idols.length].image} style = {styles.sideimage}/>
                </View>
            <Text style={styles.nameText}>{idols[currentIndex].name}</Text>
            <View style = {Button}>
                <TouchableOpacity style={styles.selectButton} onPress ={sendTitleToServer}>
                <Text style={styles.selectButtonText}>선택하기</Text>
                </TouchableOpacity>
            </View>



            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  gradientOverlay:{
      ...StyleSheet.absoluteFillObject,
   },
  backgroundImage:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '106%',
    },
  head: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
  },
    changimg:{
        position: 'absolute',
        right: 0,
        },
  header:{
      flex: 1.3,
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row',
      width: '90%',
      },
  words:{
      flex:1,
      width: '80%',
      justifyContent: 'flex-start',
      alignItems:'left',
      paddingTop: 20,
      },
  uptitle:{
      fontSize: 24,
      fontFamily: 'NanumSquareRoundB',
      },
  sen:{
      fontSize: 20,
      },
  main:{
      width: '95%',
      justifyContent: 'center',
      flex: 3.5,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'visible',
      },
    arrowText: {
      fontSize: 40,
    color: '#000000',
    },
arrowButton:{
    marginLeft: 10,
    marginRight: 10,
    },
    image: {
      width: '61%',
      height: '61%',
      borderRadius: 10,

    },
sideimage: {
      width: '60%',
      height: '60%',
      borderRadius: 10,
      opacity: 0.4,
    },
    nameText: {
      marginTop: 10,
      fontSize: 24,
      fontFamily: 'NanumSquareRoundEB'
    },
    selectButton: {
      marginTop: 5,
      backgroundColor: '#3E95FF',
      paddingVertical: 10,
      paddingHorizontal: 60,
      width: '50%',
      height: '28%',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    selectButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'NanumSquareRoundEB'
    },
    Button:{
        width: '100%',
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        },
  });


