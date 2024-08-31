import { View, Text ,Image, Pressable} from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen () {

  useWarmUpBrowser()
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {

      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])
  return (
    <View className=" h-full bg-white  ">

     <Image source = {require('./../../assets/images/login.png')}
       className="w-full h-[500px] " />

      < View className="flex p-5 items-center">

        <Text className="text-3xl text-center font-[outfit-bold]"  >
          Ready to make a new friend ?
        </Text>
        <Text className="text-center font-[outfit] text-[18px] text-gray-500  ">Lets adopt the pet which you like and make there life happy again</Text>
       
        <Pressable onPress={onPress} className="p-[14px] mt-[50px] w-full bg-primary rounded-[14px]">
          <Text className="font-[outfit-medium] text-[20px] text-center">Get Started</Text>
        </Pressable>
      </View>

    </View>
  )
}