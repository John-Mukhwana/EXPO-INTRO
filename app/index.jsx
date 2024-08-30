import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View className="bg-green-900 flex-1 ">

     <Link href={'/login'}>
      <Text className="text-black text-2xl font-outfit-bold">GO TO Login Screen</Text>
     </Link>
    </View>
  );
}
