/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerVendor from './CustomDrawerVendor';
import CustomDrawer from './CustomDrawer';
import AppStack from './AppStack';
import ProfileVendor from '../vendor/ProfileVendor';
import WelcomeVendor from '../vendor/WelcomeVendor';
import RegisterVendor from '../vendor/RegisterVendor';
import LoginVendor from '../vendor/LoginVendor';
import ForgotPasswordVendor from '../vendor/ForgotPasswordVendor';
import VerifiedVendor from '../vendor/VerifiedVendor';
import SuccessVendor from '../vendor/SuccessVendor';
import RegisterSuccessVendor from '../vendor/RegisterSuccessVendor';
import ChangePasswordVendor from '../vendor/ChangePasswordVendor';
import SignOutVendor from '../vendor/SignOutVendor';
import ResetCodeVendor from '../vendor/ResetCodeVendor';
import HomeVendor from '../vendor/HomeVendor';
import ShippingDetailsVendor from '../vendor/ShippingDetailsVendor';
import MessagesVendor from '../vendor/MessagesVendor';
import MessageDetails from '../screens/MessageDetails';
import MessageDetailsVendor from '../vendor/MessageDetailsVendor';
import Supermarket from '../screens/Supermarket';
import SupermarketVendor from '../vendor/SupermarketVendor';
import StoreDetails from '../screens/StoreDetails';
import StoreDetailsVendor from '../vendor/StoreDetailsVendor';
import Photos from '../screens/Photos';
import PhotosVendor from '../vendor/PhotosVendor';
import Reviews from '../screens/Reviews';
import ReviewsVendor from '../vendor/ReviewsVendor';
import Shipping from '../screens/Shipping';
import ShippingVendor from '../vendor/ShippingVendor';
import Pickup from '../screens/Pickup';
import PickupVendor from '../vendor/PickupVendor';
import Receipts from '../screens/Receipts';
import ReceiptsVendor from '../vendor/ReceiptsVendor';
import Transactions from '../screens/Transactions';
import TransactionsVendor from '../vendor/TransactionsVendor';
import About from '../screens/About';
import AboutVendor from '../vendor/AboutVendor';
import Chat from '../screens/Chat';
import ChatVendor from '../vendor/ChatVendor';
import Notifications from '../screens/Notifications';
import NotificationsVendor from '../vendor/NotificationsVendor';
import BlockBusiness from '../screens/BlockBusiness';
import BlockBusinessVendor from '../vendor/BlockBusinessVendor';
import ReportBusiness from '../screens/ReportBusiness';
import ReportBusinessVendor from '../vendor/ReportBusinessVendor';
import ReviewBusinessVendor from '../vendor/ReviewBusinessVendor';
import ShareBusiness from '../screens/ShareBusiness';
import ShareBusinessVendor from '../vendor/ShareBusinessVendor';
import MainPage from '../screens/MainPage';
import MainPageVendor from '../vendor/MainPageVendor';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Verified from '../screens/Verified';
import Success from '../screens/Success';
import SignOut from '../screens/SignOut';
import RegisterSuccess from '../screens/RegisterSuccess';
import ChangePassword from '../screens/ChangePassword';
import ResetCode from '../screens/ResetCode';
import Home from '../screens/Home';
import ShippingDetails from '../screens/ShippingDetails';
import Order from '../screens/Order';
import OrderVendor from '../vendor/OrderVendor';
import ReviewBusiness from '../screens/ReviewBusiness';

const Drawer = createDrawerNavigator();

const VendorStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="WelcomeVendor"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        DrawerNavigatorBarVisible: false,
      }}>
      <Drawer.Screen name="WelcomeVendor" component={WelcomeVendor} />
      <Drawer.Screen name="ProfileVendor" component={ProfileVendor} />
      <Drawer.Screen name="RegisterVendor" component={RegisterVendor} />
      <Drawer.Screen name="LoginVendor" component={LoginVendor} />
      <Drawer.Screen name="ForgotVendor" component={ForgotPasswordVendor} />
      <Drawer.Screen name="VerifiedVendor" component={VerifiedVendor} />
      <Drawer.Screen name="SuccessVendor" component={SuccessVendor} />
      <Drawer.Screen name="SignOutVendor" component={SignOutVendor} />
      <Drawer.Screen
        name="RegistersuccessVendor"
        component={RegisterSuccessVendor}
      />
      <Drawer.Screen name="ChangepassVendor" component={ChangePasswordVendor} />
      <Drawer.Screen name="ResetVendor" component={ResetCodeVendor} />
      <Drawer.Screen name="HomeVendor" component={HomeVendor} />
      <Drawer.Screen
        name="MessagedetailsVendor"
        component={MessageDetailsVendor}
      />
      <Drawer.Screen name="SupermarketVendor" component={SupermarketVendor} />
      <Drawer.Screen name="StoreDetailsVendor" component={StoreDetailsVendor} />
      <Drawer.Screen name="PhotosVendor" component={PhotosVendor} />
      <Drawer.Screen name="ReviewsVendor" component={ReviewsVendor} />
      <Drawer.Screen name="ShippingVendor" component={ShippingVendor} />
      <Drawer.Screen
        name="ShippingDetailsVendor"
        component={ShippingDetailsVendor}
      />
      <Drawer.Screen name="PickupVendor" component={PickupVendor} />
      <Drawer.Screen name="ReceiptsVendor" component={ReceiptsVendor} />
      <Drawer.Screen name="TransactionsVendor" component={TransactionsVendor} />
      <Drawer.Screen name="AboutVendor" component={AboutVendor} />
      <Drawer.Screen name="ChatVendor" component={ChatVendor} />
      <Drawer.Screen name="OrderVendor" component={OrderVendor} />
      <Drawer.Screen name="MessagesVendor" component={MessagesVendor} />
      <Drawer.Screen
        name="NotificationsVendor"
        component={NotificationsVendor}
      />
      <Drawer.Screen name="BlockVendor" component={BlockBusinessVendor} />
      <Drawer.Screen name="ReportVendor" component={ReportBusinessVendor} />
      <Drawer.Screen
        name="ReviewBusinessVendor"
        component={ReviewBusinessVendor}
      />
      <Drawer.Screen name="ShareVendor" component={ShareBusinessVendor} />
      <Drawer.Screen name="HomeDrawer" component={AppStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Forgot" component={ForgotPassword} />
      <Drawer.Screen name="Verified" component={Verified} />
      <Drawer.Screen name="Success" component={Success} />
      <Drawer.Screen name="SignOut" component={SignOut} />
      <Drawer.Screen name="Registersuccess" component={RegisterSuccess} />
      <Drawer.Screen name="Changepass" component={ChangePassword} />
      <Drawer.Screen name="Reset" component={ResetCode} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Messagedetails" component={MessageDetails} />
      <Drawer.Screen name="Supermarket" component={Supermarket} />
      <Drawer.Screen name="StoreDetails" component={StoreDetails} />
      <Drawer.Screen name="Photos" component={Photos} />
      <Drawer.Screen name="Reviews" component={Reviews} />
      <Drawer.Screen name="Shipping" component={Shipping} />
      <Drawer.Screen name="ShippingDetails" component={ShippingDetails} />
      <Drawer.Screen name="Pickup" component={Pickup} />
      <Drawer.Screen name="Receipts" component={Receipts} />
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Block" component={BlockBusiness} />
      <Drawer.Screen name="Report" component={ReportBusiness} />
      <Drawer.Screen name="ReviewBusiness" component={ReviewBusiness} />
      <Drawer.Screen name="Share" component={ShareBusiness} />
      <Drawer.Screen name="Main" component={MainPage} />
      <Drawer.Screen name="MainVendor" component={MainPageVendor} />
    </Drawer.Navigator>
  );
};

export default VendorStack;
