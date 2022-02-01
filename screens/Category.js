import React, {useState,useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import { FloatingAction } from "react-native-floating-action";
import SplashScreen from 'react-native-splash-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import {BottomSheet} from 'react-native-btr';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';


import glassBottle from '../assets/glassBottle.png';
import plasticIcon from '../assets/plasticIcon.png';
import metalIcon from '../assets/metalIcon.png';
import paperIcon from '../assets/paperIcon.png';
import electronicIcon from '../assets/electronicIcon.png';
import question from "../assets/question.png";
import new_banner from "../assets/new_banner.jpeg"
import people from "../assets/people.jpg"

const categoryList = [
  {
    key: 0,
    image: glassBottle,
    text: 'Glass',
    description:
      'Glass is found in municipal solid waste (MSW), primarily in the form of containers such as beer and soft drink bottles; wine and liquor bottles, etc.',
  },

  {
    key: 1,
    image: metalIcon,
    text: 'Metal',
    description:
      'Since the industrial revolution period has taken place, our consumption levels skyrocketed due to the mass production of goods and the resulting low unit price.',
  },

  {
    key: 2,
    image: plasticIcon,
    text: 'Plastic',
    description:
      'Plastic waste is the accumulation of plastic objects in the Earth’s environment that adversely affects wildlife, wildlife habitat, and humans.',
  },

  {
    key: 3,
    image: paperIcon,
    text: 'Paper',
    description:'Post-consumer waste is material discarded after consumer use, such as old magazines, and newspapers. Paper suitable for recycling is called "scrap paper".',
  },

  {
    key: 4,
    image: electronicIcon,
    text: 'Electronics',
    description:
      'E-waste is electronic products that are unwanted and nearing or at the end of their “useful life.” Computers, televisions, VCRs, stereos, etc',
  },

  // {
  //   key: 5,
  //   image: copper,
  //   text: 'Copper Items',
  //   description:
  //     'Copper scrap is smelted in primary (concentrate) and secondary (scrap) smelters. Primary smelters mainly smelt concentrate. ... The main smelting product is molten black copper (80% Cu), which is converted to rough copper (96% Cu) then fire refined and cast into anodes (98.5% Cu).',
  // },

  // {
  //   key: 6,
  //   image: iron,
  //   text: 'Iron Items',
  //   description:
  //     "Iron and steel scrap also known as 'ferrous metal scrap' is a recyclable material which is left- over during the production of iron and steel products and fabrication of ferrous materials or generated at end of life of the ferrous products. Ferrous scrap is normally recycled during steelmaking.",
  // },
];



const CategoryScreen  = ({navigation}) => {

  const [loading,setLoading] = useState(true);
  
  const [images,setImages] = useState([

  ]);
  //var images = [];
  

  useEffect(() => {
    try {
      axios
        .get(
          'https://enigmatic-bayou-48428.herokuapp.com/admin/registration-api/image'
        )
        .then((res) => 
        {  
          setLoading(false);
          setImages(res.data.data.image);
          //images = res.data.data.image,
          
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  },[]);


  console.log(images);
  

 
  



 
 
  //const sheetRef = React.useRef(null);

  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(visible => !visible);  
  }

  const [description,setDescription] = useState("");
  const [itemSelected,setItem] = useState("");
  const [subCategory, setSubCategory] = useState('Choose Sub-Category');
  

  const [loginStatus, setLogin] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  const getUser = async () => {
    var tempLoginStatus = await AsyncStorage.getItem('loginStatus');
    var tempUsername = await AsyncStorage.getItem('User');
    var tempAddress = await AsyncStorage.getItem('address');
    var tempEmail = await AsyncStorage.getItem('email');
    var tempPhone = await AsyncStorage.getItem('phone');
    var tempLandmark = await AsyncStorage.getItem('landmark');
    var tempPincode = await AsyncStorage.getItem('pincode');

    setLogin(tempLoginStatus);
    setName(tempUsername);
    setAddress(tempAddress);
    setEmail(tempEmail);
    setPhone(tempPhone);
    setLandmark(tempLandmark);
    setPincode(tempPincode);
  };

  getUser();

  //loadBannerImage();

  const setUser = async () => {
    await AsyncStorage.setItem('loginStatus', 'false');
    await AsyncStorage.setItem('User', 'Guest');
  };

  const action = [
    //  {
    //    text : "About",
    //    position : 2,
    //    name : "bt_about",
    //    color : "#FFFFFF",
       
    //  },
     {
      text : "Contact",
      position : 1,
      name : "bt_contact",
      color : "#FFFFFF"
    }
  ]

  return (
    <>
      <StatusBar
         backgroundColor="#A363A9"
      />
      <ScrollView style={styles.container}>
     <ScrollView
        horizontal = {true}
        style = {
          {
            height: verticalScale(280),
            
            
          }
        }
        
     >
    <View
       style = {
         {
           justifyContent : "space-evenly",
           flexDirection : "row",
           
           marginLeft : scale(25),
           
         }
       }
    >



     {  
        loading==true?
        <View
        style = {
          {
           height: verticalScale(280),
           width: scale(360),
           justifyContent : "center",
          
          }
        }
        >
          <ActivityIndicator
             color="#A363A9"
             size={'large'}

          />
          </View>:
        images.map(
          (item)=>
            <View 
            style = {
              {
               height: verticalScale(250),
               width: scale(360),
               alignSelf : "center",
               
               
              }
            }
         >
         <Image
            source={
               {
                 uri : `https://enigmatic-bayou-48428.herokuapp.com${item.image}`
               }
            } 
            style = {
              {
                resizeMode : "stretch",
                height: verticalScale(250),
                width: scale(300),
                borderRadius : moderateScale(10),
              }
            }
         />
         
        
         
         </View>
          
        )
     } 
    
     
      
    </View>
     </ScrollView>
        <Text
          style={{
            fontSize: moderateScale(30),
            marginTop: verticalScale(30),
            marginLeft: scale(30),
            fontWeight: 'bold',
            color : '#758283'
          }}>
          Categories
        </Text>
        <View style={styles.gridContainer}>
          {categoryList.map(key => (
            <TouchableOpacity
              key={key.key}
              onPress={() => {
                setItem(key.text);
                setDescription(key.description);
                toggle();
                setSubCategory('Choose Sub-Category');
                // console.log(`${key.text} Clicked`);
                // navigation.navigate('SubCategory Screen', {
                //   text: `${key.text}`,
                //   imageSelected: key.image,
                //   description: key.description,
                // });
              }}>
              <View style={styles.viewGroup}>
                <Image source={key.image} style={styles.image} />

                <Text style={styles.text}>{key.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <BottomSheet
          visible={visible}
          onBackButtonPress={toggle}

          onBackdropPress={toggle}
          >
          <View style={styles.card}>
            <Text
              style={{
                color: '#000000',
                alignSelf: 'center',
                fontSize: moderateScale(25),
                fontWeight: 'bold',
                marginTop : verticalScale(40),
              }}>
              {itemSelected}
            </Text>
            <Text
              style={{
                fontSize : moderateScale(25),
                height : verticalScale(120),
                color: '#758283',
                textAlign: 'center',
                //margin: 23,
                marginTop : verticalScale(10),
                paddingHorizontal : moderateScale(15),
                fontSize: moderateScale(18),
                fontStyle: 'italic',
              }}>
              {description}
            </Text>
            {/* <View style={styles.pickerStyle}>
          {itemSelected == 'Glass' ? (
            <Picker
              style={{
                color: '#A363A9',
              }}
              dropdownIconColor="#A363A9"
              dropdownIconRippleColor="#A363A9"
              onTouchCancel={true}
              mode="dropdown"
              selectedValue={subCategory}
              onValueChange={(itemValue) => {
                setSubCategory(itemValue);
              }}>
              <Picker.Item label="Choose Sub-Category" value="Choose Sub-Category" />  
              <Picker.Item label="Bottles" value="Bottles" />
              <Picker.Item label="Mirrors" value="Mirrors" />
            </Picker>
          ) : itemSelected == 'Metal' ? (
            <Picker
              style={{
                color: '#A363A9',
              }}
              dropdownIconColor="#A363A9"
              dropdownIconRippleColor="#A363A9"
              onTouchCancel={true}
              mode="dropdown"
              selectedValue={subCategory}
              onValueChange={(itemValue) => {
                setSubCategory(itemValue);
              }}>
              <Picker.Item label="Choose Sub-Category" value="Choose Sub-Category" />   
              <Picker.Item label="Steel" value="Steel" />
              <Picker.Item label="Brass" value="Brass" />
              <Picker.Item label="Motor" value="Motor" />
              <Picker.Item label="Aluminium" value="Aluminium" />
              <Picker.Item label="Copper" value="Copper" />
              <Picker.Item label="Iron" value="Iron" />
              <Picker.Item
                label="Beer/Beverage Cans"
                value="Beer/Beverage Cans"
              />
            </Picker>
          ) : itemSelected == 'Paper' ? (
            <Picker
              style={{
                color: '#A363A9',
              }}
              dropdownIconColor="#A363A9"
              dropdownIconRippleColor="#A363A9"
              onTouchCancel={true}
              mode="dropdown"
              selectedValue={subCategory}
              onValueChange={(itemValue) => {
                setSubCategory(itemValue);
              }}>
              <Picker.Item label="Choose Sub-Category" value="Choose Sub-Category" />   
              <Picker.Item label="Mil Board" value="Mil Board" />
              <Picker.Item label="Magazine" value="Magazine" />
              <Picker.Item
                label="Gatta/Corrugated Board"
                value="Gatta/Corrugated Board"
              />
              <Picker.Item label="Newspaper" value="Newspaper" />
              <Picker.Item label="Books" value="Books" />
            </Picker>
          ) : itemSelected == 'Plastic' ? (
            <Picker
              style={{
                color: '#A363A9',
              }}
              dropdownIconColor="#A363A9"
              dropdownIconRippleColor="#A363A9"
              onTouchCancel={true}
              mode="dropdown"
              selectedValue={subCategory}
              onValueChange={(itemValue) => {
                setSubCategory(itemValue);
              }}>
              <Picker.Item label="Choose Sub-Category" value="Choose Sub-Category" />   
              <Picker.Item label="Milk Pouch" value="Milk Pouch" />
              <Picker.Item label="Plastic Bottles" value="Plastic Bottles" />
            </Picker>
          ) : (
            <Picker
              style={{
                color: '#A363A9',
              }}
              dropdownIconColor="#A363A9"
              dropdownIconRippleColor="#A363A9"
              onTouchCancel={true}
              mode="dropdown"
              selectedValue={subCategory}
              onValueChange={(itemValue) => {
                setSubCategory(itemValue);
              }}>
              <Picker.Item label="Choose Sub-Category" value="Choose Sub-Category" />   
              <Picker.Item label="Black Battery" value="Black Battery" />
              <Picker.Item label="White Battery" value="White Battery" />
              <Picker.Item
                label="Single-Door Fridge"
                value="Single-Door Fridge"
              />
              <Picker.Item
                label="Double-Door Fridge"
                value="Double-Door Fridge"
              />
              <Picker.Item label="Air Conditioner" value="Air Conditioner" />
              <Picker.Item label="Washing Machine" value="Washing Machine" />
            </Picker>
          )}
        </View> */}
        <View 
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent : "space-evenly",
              marginTop : verticalScale(8),
            }}
        >
        <View style={styles.loginBtn}>
          <TouchableOpacity
           onPress={() => {
             toggle();
            console.log('Register Button Clicked');
            navigation.navigate('Register Screen',{
              itemSelected : `${itemSelected}`,
              subCategory : `${subCategory}`,
            });
          }}
            >
            {loginStatus == 'true' ? (
                <>
              </>
              
            ) : (
             
                <Text
                style={{
                  fontSize: moderateScale(27),
                  height : verticalScale(60),
                  width : scale(150),
                  color : "#A363A9",
                  borderColor : "#A363A9",
                  borderWidth : 1,
                  textAlign : "center",
                  paddingTop : verticalScale(10),
                  borderRadius : moderateScale(100),
                  
                }}>
                Sign-Up
              </Text>
              
              
            )}
          </TouchableOpacity>
        </View>

        {loginStatus == 'true' ? (
          <>
          </>
        ) : (
          <View style={styles.guestRegister}>
            <TouchableOpacity
              onPress={() => {
                  toggle();
                  navigation.navigate('Guest Pickup Screen', {
                    itemSelected: `${itemSelected}`,
                    subCategory : `${subCategory}`,
                  });
                }
            }
              >
              <Text
                style={{
                  fontSize: moderateScale(30),
                  alignSelf: 'center',
                  color: '#A363A9',
                  borderWidth : 1,
                  height : verticalScale(60),
                  width : scale(150),
                  textAlign : "center",
                  paddingTop : verticalScale(8),
                  borderRadius : moderateScale(100),
                  borderColor : '#A363A9',
                  borderRadius : moderateScale(100),
                               
                }}>
                Guest
              </Text>
            </TouchableOpacity>
          </View>
          )}
        </View>
       {
          loginStatus=='true'?
          <TouchableOpacity
            onPress={() => {
              toggle();
              if (loginStatus == 'true') {

                
                navigation.navigate('Pickup Screen', {
                  name: `${username}`,
                  itemSelected: `${itemSelected}`,
                  subCategory : `${subCategory}`,
                  address: `${address}`,
                  email: `${email}`,
                  phone: `${phone}`,
                  landmark: `${landmark}`,
                  pincode: `${pincode}`,
                });
              } 
              else {
               
                navigation.navigate('Login Screen', {
                  itemSelected: `${itemSelected}`,
                  subCategory : `${subCategory}`,
                });
              }
            
            
            
          }}
       
       >
       <LinearGradient
        colors={['#A363A9', '#FAB06D']}
        style = {
          {
           borderRadius: moderateScale(100),
           height : verticalScale(60),
           width : scale(320),
           marginLeft : scale(2),
           marginBottom : verticalScale(25),
           alignSelf : "center",
          
                             
          }
        }
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
       >
       <Text
          style = {
            {  
              color : "#FFFFFF",
        
              fontSize : moderateScale(20),

             paddingTop : verticalScale(15),
              textAlignVertical : "center",
              textAlign : "center",
            }
          }
        >Login As {username}</Text> 
       </LinearGradient>
       </TouchableOpacity>:
       <TouchableOpacity
       onPress={() => {
         toggle();
         if (loginStatus == 'true') {

           
           navigation.navigate('Pickup Screen', {
             name: `${username}`,
             itemSelected: `${itemSelected}`,
             subCategory : `${subCategory}`,
             address: `${address}`,
             email: `${email}`,
             phone: `${phone}`,
             landmark: `${landmark}`,
             pincode: `${pincode}`,
           });
         } 
         else {
          
           navigation.navigate('Login Screen', {
             itemSelected: `${itemSelected}`,
             subCategory : `${subCategory}`,
           });
         }
       
       
       
     }}
  
  >
  <LinearGradient
       colors={['#A363A9', '#FAB06D']}
       style = {
         {
          borderRadius: moderateScale(100),
          height : verticalScale(60),
          width : scale(320),
          marginLeft : scale(2),
          marginBottom : verticalScale(25),
          alignSelf : "center",
         
                            
         }
       }
       start={{x: 0, y: 0}} 
       end={{x: 1, y: 0}}
  >
  <Text
     style = {
       {  
          color : "#FFFFFF",
        
          fontSize : moderateScale(30),
         paddingTop : verticalScale(7),
          textAlignVertical : "center",
          textAlign : "center",
       
          
         
         
       }
     }
   >Login</Text> 
  </LinearGradient>
  </TouchableOpacity>
       }
        {
           loginStatus=='true'?
           <TouchableOpacity
              onPress={()=>{
               
                setUser();
                toggle();
                Alert.alert('You are logged out!');

              }}
           >
              <Text
                 style={
                   {
                     fontSize : moderateScale(20),
                     color : '#A363A9',
                     alignSelf : 'center',
                     marginTop : verticalScale(5),
                     marginBottom : verticalScale(44), 
                   }
                 }
              >Logout</Text>
              </TouchableOpacity> : 
              <></>
        }
          </View>
        </BottomSheet>
        <FloatingAction
            color='#FFFFFF'
            actions={action}
            floatingIcon={question}
            iconHeight={verticalScale(30)}
            iconWidth={scale(30)}
            onPressItem={name=>{
                if(name=="bt_contact")
                {
                   Alert.alert("Phone - (+91)88-2626-7661\nEmail - info@bartermate.in");
                }
                else
                {
                  Alert.alert("Welcome To Barter-Mate");
                }
            }}
            // onPressMain={()=>{
            //   Alert.alert("Buttom");
            // }}

            
            
        />
      </ScrollView>
    </>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#FFFFFF",
  },

  gridContainer: {
    flex: 1,
    //margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  pickerStyle: {
    marginLeft: 70,
    marginRight: 70,
    borderWidth : 1,
    borderRadius : 25,
    borderColor : '#A363A9',
    marginLeft : 25,
    marginRight : 25,
  },

  card: {
    backgroundColor: '#fff',
    height: verticalScale(370),
    borderTopRightRadius : moderateScale(40),
    borderTopLeftRadius : moderateScale(40),
  },

  viewGroup: {
    // borderWidth: 2,
    //borderColor: '#758283',
    //elevation : 4,
    borderRadius : moderateScale(15),

    marginTop: verticalScale(30),
    backgroundColor : "#F5F5F5",
    padding: moderateScale(10),
    overflow: 'hidden',
    elevation : 3,
    marginBottom : verticalScale(20),


  },

  image: {
    height: verticalScale(80),
    width: scale(100),
    margin: moderateScale(10),
    overflow: 'hidden',
    //padding : 30,
  },

 

  
  text: {
    fontSize : moderateScale(18),
    textAlign: 'center',
    marginBottom: verticalScale(4),
    color: '#000000',
    //padding: 5,
  },
});
