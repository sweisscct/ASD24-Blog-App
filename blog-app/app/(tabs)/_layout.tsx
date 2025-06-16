import { Stack, Tabs } from "expo-router";

const RootLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{ headerTitle: "Home Page", title: "Home" }}/>
            <Tabs.Screen name="second_page" />
        </Tabs>
    )
}

export default RootLayout;