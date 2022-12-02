import { createStackNavigator } from 'react-navigation-stack'
import ForgotPassword from './SettingsScreen'

const AuthNavigation = createStackNavigator(
  {
    SettingsScreen: { screen: SettingsScreen }
    
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation