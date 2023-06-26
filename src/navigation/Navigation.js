import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnBoardingScreen/OnboardingScreen";
import WelcomeScreen from "../screens/OnBoardingScreen/WelcomeScreen";
import LoginScreen from "../screens/Authentications/Login&Forgot/LoginScreen";
import ForgotPasswordScreen from "../screens/Authentications/Login&Forgot/ForgotPasswordScreen";
import ForgotPasswordCodeConfirmationScreen from "../screens/Authentications/Login&Forgot/ForgotPasswordCodeConfirmationScreen";
import CreateNewPasswordScreen from "../screens/Authentications/Login&Forgot/CreateNewPasswordScreen";
import RegisterScreenName from "../screens/Authentications/Register/RegisterScreenName";
import RegisterDetailsScreen from "../screens/Authentications/Register/RegisterDetailsScreen";
import RegisterCreatePasswordScreen from "../screens/Authentications/Register/RegisterCreatePasswordScreen";
import RegisterUploadPhotoScreen from "../screens/Authentications/Register/RegisterUploadPhotoScreen";
import Tabs from "./Tabs";
import PlanYourDeliveryScreen from "../screens/PlanTheDelivery/PlanYourDeliveryScreen";
import PlanMapScreen from "../screens/PlanTheDelivery/PlanMapScreen";
import SchedulePickupScreen from "../screens/PlanTheDelivery/SchedulePickupScreen";
import ChoosePaymentMethodScreen from "../screens/PlanTheDelivery/ChoosePaymentMethodScreen";
import MapTrackingScreen from "../screens/Tracking Package/MapTrackingScreen";
import ActivityDeliveryDetails from "../screens/Activity/ActivityDeliveryDetails";
import DriverChatScreen from "../screens/Tracking Package/DriverChatScreen";
import ScheduleScreen from "../screens/Schedule/ScheduleScreen";
import PromotionScreen from "../screens/TabScreens/PromotionScreen";
import AccountDetailScreen from "../screens/Profile/AccountDetailScreen";
import AddressBookScreen from "../screens/Profile/AddressBookScreen";
import PaymentMethodProfileScreen from "../screens/Profile/PaymentMethodProfileScreen";
import AddnewCardScreen from "../screens/Profile/AddnewCardScreen";
import LanguageSelectionScreen from "../screens/Profile/LanguageSelectionScreen";
import NotificationScreen from "../screens/TabScreens/NotificationScreen";
import HelpCenterScreen from "../screens/TabScreens/HelpCenterScreen";
import HeaderBack from "../components/HeaderBack";
import PrivacyPolicyScreen from "../screens/Profile/PrivacyPolicyScreen";
import RegisterVehicleModelScreen from "../screens/Authentications/Register/RegisterVehicleModelScreen";
import RegisterUploadInsurencePhotoScreen from "../screens/Authentications/Register/RegisterUploadInsurencePhotoScreen";
import RegisterUploadRegistrationPhotoScreen from "../screens/Authentications/Register/RegisterUploadRegistrationPhotoScreen";
import RegisterUploadSelfieScreen from "../screens/Authentications/Register/RegisterUploadSelfieScreen";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      */}
     {/* Login and Forgot Password Screen */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotPasswordCodeConfirmationScreen" component={ForgotPasswordCodeConfirmationScreen} />
        <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} />
         
        {/* Register Screens */}
        <Stack.Screen name="RegisterScreenName" component={RegisterScreenName} />
        <Stack.Screen name="RegisterDetailsScreen" component={RegisterDetailsScreen} />
        <Stack.Screen name="RegisterCreatePasswordScreen" component={RegisterCreatePasswordScreen} />
        <Stack.Screen name="RegisterUploadPhotoScreen" component={RegisterUploadPhotoScreen} />
        <Stack.Screen name="RegisterVehicleModelScreen" component={RegisterVehicleModelScreen} />
        <Stack.Screen name="RegisterUploadInsurencePhotoScreen" component={RegisterUploadInsurencePhotoScreen} />
        <Stack.Screen name="RegisterUploadRegistrationPhotoScreen" component={RegisterUploadRegistrationPhotoScreen} />
        <Stack.Screen name="RegisterUploadSelfieScreen" component={RegisterUploadSelfieScreen} />
        
      
        {/* Tab screens */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="tabs" component={Tabs} />

        {/* Promotions */}
        <Stack.Screen name="PromotionScreen" component={PromotionScreen} />
        
        {/* Plan The delivery */}
        <Stack.Screen name="PlanYourDeliveryScreen" component={PlanYourDeliveryScreen} />
        <Stack.Screen name="PlanMapScreen" component={PlanMapScreen} />
        <Stack.Screen name="SchedulePickupScreen" component={SchedulePickupScreen} />
        <Stack.Screen name="ChoosePaymentMethodScreen" component={ChoosePaymentMethodScreen} />
        
        {/* Tracking */}
        <Stack.Screen name="MapTrackingScreen" component={MapTrackingScreen} />
        <Stack.Screen name="DriverChatScreen" component={DriverChatScreen} />
        
        {/* Activity */}
        <Stack.Screen name="ActivityDeliveryDetails" component={ActivityDeliveryDetails} />
        
        {/* Schedule Screen */}
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
        
        {/* Profile  */}
        <Stack.Screen name="AccountDetailScreen" component={AccountDetailScreen} />
        <Stack.Screen name="AddressBookScreen" component={AddressBookScreen} />
        <Stack.Screen name="PaymentMethodProfileScreen" component={PaymentMethodProfileScreen} />
        <Stack.Screen name="AddnewCardScreen" component={AddnewCardScreen} />
        <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
