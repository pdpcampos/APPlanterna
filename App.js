import React, {useState, useEffect} from "react";
import {View, StyleSheet, image, TouchableOpacity} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";
const App = () =>{

  const [toggle, setToggle] = useState(false);
 
  const handlechangetoggle = () => setToggle(oldtoggle =>  !oldtoggle );

  useEffect(()=>{
    Torch.switchState(toggle);
    
    }, [toggle]);

    useEffect(() =>{
    const subscription = RNShake.addListener(() => {
      setToggle(oldtoggle =>  !oldtoggle );
    });
     return () => subscription.remove();

    },[]);

  return  <view style={ toggle ? style.containerLight :style.container}>
    <TouchableOpacity onPress={ handlechangetoggle}>
 
 <image style={toggle ? lightngON : style.lightngOff}
  source={toggle ? require("Assetes/icons/eco-light.png")
   : require("Assetes/icons/eco-light-off.png")}
 />

<image style={style.dioLogo}
  source={
    toggle 
    ? require("Assetes/icons/logo-dio.png")
   : require("Assetes/icons/logo-dio-white.png")}
 />
 </TouchableOpacity>
  </view>;
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightngON:{
    resizeMode:"contain",
    alignSelf: "center",
    width: 150,
    height: 150,
    
  },
  lightngOff:{
    resizeMode:"contain",
    alignSelf: "center",
    tintColor: "white",
    width: 150,
    height: 150,
    
  },
  
  dioLogo:{
    resizeMode:"contain",
    alignSelf: "center",
    width: 250,
    height: 250,
    
  },
 
});

