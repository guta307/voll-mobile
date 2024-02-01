import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "../pages/main";
import Queries from "../pages/queries";
import Profile from "../pages/Profile";
import Explorer from "../pages/explorer";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF",
};

const tabs = [
  { name: "Main", component: Main, icon: "home" },
  { name: "Queries", component: Queries, icon: "calendar" },
  { name: "Profile", component: Profile, icon: "person" },
  { name: "Search", component: Explorer, icon: "search" },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((value, index) => {
        return (
          <Tab.Screen
            key={index}
            name={value.name}
            component={value.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={value.icon} color={color} size={size} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
