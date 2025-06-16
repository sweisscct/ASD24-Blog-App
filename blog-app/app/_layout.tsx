import { Stack, Tabs } from "expo-router"

const TabLayout = () => {
    return(
    <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="third_page" />
    </Stack>
    )

}

export default TabLayout;