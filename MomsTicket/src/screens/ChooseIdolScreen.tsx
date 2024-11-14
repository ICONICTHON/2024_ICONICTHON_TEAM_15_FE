import React, { useState } from 'react';
import SelectIdolButton from '../components/SelectIdolButton.tsx';
import { View, Text,Image, StyleSheet, Dimensions,ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function MyChooseIdolScreen({navigation})  {
    const [title, setTitle] = useState("임영웅");

    const handleButtonPress = (newTitle) => {
        setTitle(newTitle);
    };
    const sendTitleToServer = async ()=> {
        try{
            const idol_id =123;
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
                <TouchableOpacity style = {styles.changimg} onPress={()=>navigation.goBack()}>
                <Image source ={require('../assets/images/Vector.png')} />
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

            <View style={[styles.lines, { flexDirection: 'row' }]}>
                <View style={styles.innerBoxL}>
                    <SelectIdolButton image={require('../assets/images/youngung_idol_image.png')} onPress={() => handleButtonPress("임영웅")}>
                        <Text>임영웅</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>임영웅</Text>
                </View>
                <View style={styles.innerBox}>
                    <SelectIdolButton image={require('../assets/images/chanwon_idol_image.png')} onPress={() => handleButtonPress("이찬원")}>
                        <Text >이찬원</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>이찬원</Text>
                </View>
                <View style={styles.innerBoxR}>
                    <SelectIdolButton image={require('../assets/images/dongwon_idol_image.png')} onPress={() => handleButtonPress("정동원")}>
                        <Text >정동원</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>정동원</Text>
                </View>
            </View>

            <View style={[styles.lines, {flexDirection: 'row'}]}>
                <View style={styles.innerBoxL}>
                    <SelectIdolButton image={require('../assets/images/youngtak_idol_image.png')} onPress={() => handleButtonPress("영탁")}>
                        <Text style={styles.basic}>영탁</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>영탁</Text>
                </View>
                <View style={styles.innerBox}>
                    <SelectIdolButton image={require('../assets/images/minho_idol_image.png')} onPress={() => handleButtonPress("민호")}>
                        <Text style={styles.basic}>민호</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>민호</Text>
                </View>
                <View style={styles.innerBoxR}>
                    <SelectIdolButton image={require('../assets/images/hwijae_idol_image.png')} onPress={() => handleButtonPress("희재")}>
                        <Text style={styles.basic}>희재</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>희재</Text>
                </View>
            </View>

            <View style={[styles.lines,{flexDirection:'row'}]}>
                <View style={styles.innerBoxL}>
                    <SelectIdolButton image={require('../assets/images/youngung_idol_image.png')} onPress={() => handleButtonPress("임영웅")}>
                        <Text>임영웅</Text>
                    </SelectIdolButton>
                    <Text style={styles.basic}>임영웅</Text>
                </View>
                <View style={styles.innerBox}>
                    <SelectIdolButton image={require('../assets/images/chanwon_idol_image.png')} onPress={() => handleButtonPress("이찬원")}>
                        <Text style={styles.basic}>이찬원</Text>
                    </SelectIdolButton>
                        <Text style={styles.basic}>이찬원</Text>
                </View>
                <View style={styles.innerBoxR}>
                    <SelectIdolButton image={require('../assets/images/dongwon_idol_image.png')} onPress={() => handleButtonPress("정동원")}>
                        <Text style={styles.basic}>정동원</Text>

                    </SelectIdolButton>
                        <Text style={styles.basic}>정동원</Text>
                </View>
            </View>
            <View style = {[styles.endline,{flexDirection:'column'}]}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style = {styles.boxButton} onPress ={sendTitleToServer}>
                <Text style={styles.boxButtonText}> 선택하기 </Text>
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
  innerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  innerBoxL:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginLeft: 10,
    marginRight: 0,
      },
  innerBoxR:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginLeft: 0,
    marginRight: 10,
      },
  lines: {
    flex: 1.0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginBottom: 10,

  },
  endline: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 24,
    marginBottom: 15,

  },
  basic: {
    fontSize: 16,
  },
  boxButton:{
      marginBottom:50,
      borderRadius: 20,
      width: '40%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3E95FF',
      },
  boxButtonText:{
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      fontSize:20,
      fontFamily: 'NanumSquareRoundEB',
      },
changimg:{
        position: 'absolute',
        right: 0,
        },
  header:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
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
      }
});

