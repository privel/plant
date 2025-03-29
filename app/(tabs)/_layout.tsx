import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Главная' }} />
      <Tabs.Screen name="profile" options={{ title: 'Профиль' }} />
      <Tabs.Screen name="settings" options={{ title: 'Настройки' }} />
    </Tabs>
  );
}
