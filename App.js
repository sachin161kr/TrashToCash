import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from './assets/logo2.png';

const Stack = createNativeStackNavigator();

import CategoryScreen from './screens/Category';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import PickupScreen from './screens/Pickup';
import GuestScreen from './screens/Guest';
import GuestPickupScreen from './screens/GuestPickup';
import SubCategoryScreen from './screens/SubCategory';

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Category Screen"
          component={CategoryScreen}
          options={
            {
             title: '',
             header : ()=>{
               return(
                 <>
                     <View
                         style={
                           {
                              
                              flexDirection : "row",
                              justifyContent : "center",
                           }
                         }
                     >
                       <Image
                          source={logo} 
                          style = {
                            {
                               height : 75,
                               width : 80,
                               
                            }
                          }                      
                       />
                       <Text
                          style = {
                            {
                               fontSize : 25,
                               marginTop : 18,
                            }
                          }
                       >Barter-Mate</Text>
                     </View>
                 </>
               )
             },
                      
             
            }
        }
        />
        <Stack.Screen
          name="Guest Screen"
          component={GuestScreen}
          options={{
            title: '',
          }
           
        }
        />
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{
            title: '',
          
          }}
        />
        <Stack.Screen
          name="Register Screen"
          component={RegisterScreen}
          options={{
            title: '',
          
          
          }}
        />
        <Stack.Screen
          name="SubCategory Screen"
          component={SubCategoryScreen}
          options={{
            title: '',
            
          
          }
        }
        />
        <Stack.Screen
          name="Pickup Screen"
          component={PickupScreen}
          options={{
            title: 'Provide Pickup Location',
            headerBackVisible : false,
           
          
          }}
        />
        <Stack.Screen
          name="Guest Pickup Screen"
          component={GuestPickupScreen}
          options={{
            title: '',
            
          
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
