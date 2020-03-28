import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from '../../containers/pages';

const HomeStack = createStackNavigator(
	{
		Home,
	},
	{
		headerMode: 'none',
		initialRouteParams: 'Home'
	}
)

const Router = createSwitchNavigator(
	{
		HomeStack,
	},
	{
		headerMode: 'none',
		initialRouteParams: 'HomeStack'
	}
);
  
export default createAppContainer(Router);