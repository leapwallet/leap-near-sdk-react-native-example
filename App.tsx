/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { encode as btoa} from 'base-64';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Linking, Alert } from 'react-native'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'

const getDeepLink = (scheme = '') => {
  const prefix = Platform.OS == 'android' ? `${scheme}://my-host/` : `${scheme}://`
  return prefix
}


const createWallet =  async () => {
  const deepLink = getDeepLink('leap-near-react-native') // your app deeplink
  // const config = { 
  //   auth_service: 'web3auth',
  //   authConfig: { 
  //     appName: 'Growfitter',  
  //     theme: 'dark', 
  //     isRedirect: true, 
  //     isMainnet: false,
  //     // isMainnet: true, 
  //     domain: 'https://stage-auth.leapwallet.io',
  //     // domain: 'https://auth.leapwallet.io',
  //     firebaseConfig: {
  //       apiKey: "AIzaSyAFbbUkVTigTNyIYfjFK_pT6gOikqfZO9Q",
  //       authDomain: "fitkitv3.firebaseapp.com",
  //       projectId: "fitkitv3",
  //       storageBucket: "fitkitv3.appspot.com",
  //       messagingSenderId: "685235115769",
  //       appId: "1:685235115769:web:c882bde4667a1a65643428"
  //     },
  //     Web3AuthClientId: 'BEAIDglbsURIEaAkEB8GWl6srbjhGm2ejnG0zF0XxzfvsPK8FzjmjwsBJ6iAQk7xtgf5JH9J97_N6bsVg_h8FGQ',
  //     // Web3AuthClientId: 'BAEuPzlRHDfRulPoogbIRGVPVrOu33Vdv2yCR1eUm5ur6_divYKGBwa88JNc8Ce6-wz9JQll-_Lfury6dqIID70',
  //     JWTVerifier: {
  //       name: "Grow fitter",
  //       verifier: "growfitter-web3-auth",
  //       typeOfLogin: "jwt",
  //       clientId: 'BEAIDglbsURIEaAkEB8GWl6srbjhGm2ejnG0zF0XxzfvsPK8FzjmjwsBJ6iAQk7xtgf5JH9J97_N6bsVg_h8FGQ'
  //       // clientId: 'BAEuPzlRHDfRulPoogbIRGVPVrOu33Vdv2yCR1eUm5ur6_divYKGBwa88JNc8Ce6-wz9JQll-_Lfury6dqIID70'
  //     }
  //   },
  //   tenantId: '1',
  //   clientId: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MSwiaWF0IjoxNjc1ODU5MDYyfQ.88KX9U-7EtqKRQo7pF1i_ut5XjWjrhFvZRDBYLI2PuY',
  //   // clientId: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MiwiaWF0IjoxNjc1OTIwNjQ1fQ.yMfC8n_5yEYiBEFVUMx9OERdHELm-ZVJkj3fJfucBQQ',
  //   networkId: 'testnet',
  //   // networkId: 'mainnet',
  //   collectionId: 3,
  //   leapRedirectURL: `${deepLink}`
  // }

  const config = { 
    auth_service: 'web3auth',
    authConfig: { 
      appName: 'Growfitter',  
      theme: 'dark', 
      isRedirect: true, 
      web3AuthNetwork: 'aqua',
      domain: 'https://auth.leapwallet.io',
      firebaseConfig: {
        apiKey: "AIzaSyAFbbUkVTigTNyIYfjFK_pT6gOikqfZO9Q",
        authDomain: "fitkitv3.firebaseapp.com",
        projectId: "fitkitv3",
        storageBucket: "fitkitv3.appspot.com",
        messagingSenderId: "685235115769",
        appId: "1:685235115769:web:c882bde4667a1a65643428"
      },
      Web3AuthClientId: 'BF25qPiUp9eIylPua-y120JDgekurLeb6sEd0KoLBy8Lajda4KC-yK_VLk8Uqg49ZPCYQJ2j2La7NijQpAOrG8M',
      JWTVerifier: {
        name: "Grow fitter",
        verifier: "growfitter-web3-auth",
        typeOfLogin: "jwt",
        clientId: 'BF25qPiUp9eIylPua-y120JDgekurLeb6sEd0KoLBy8Lajda4KC-yK_VLk8Uqg49ZPCYQJ2j2La7NijQpAOrG8M'
      }
    },
    tenantId: '2',
    clientId: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MiwiaWF0IjoxNjc1OTIwNjQ1fQ.yMfC8n_5yEYiBEFVUMx9OERdHELm-ZVJkj3fJfucBQQ',
    networkId: 'mainnet',
    collectionId: 3,
    leapRedirectURL: `${deepLink}`
  }
  const encodedConfig =   btoa(encodeURIComponent(JSON.stringify(config)))
  const url = `https://auth.leapwallet.io/?leapConfig=${encodedConfig}` // your webapp url
  try {
    if (await InAppBrowser.isAvailable()) {
      InAppBrowser.openAuth(url, deepLink, {
        // iOS Properties
        ephemeralWebSession: false,
        // Android Properties
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false
      }).then((response) => {
        if (
          response.type === 'success' &&
          response.url
        ) {
          Linking.openURL(response.url)
        }
      })
    } else Linking.openURL(url)
  } catch (error) {
    Linking.openURL(url)
  }
}

const mintNFT =  async () => {
  const deepLink = getDeepLink('leap-near-react-native') // your app deeplink
  const config = { 
    auth_service: 'web3auth',
    authConfig: { 
      appName: 'Growfitter',  
      theme: 'dark', 
      isRedirect: true, 
      web3AuthNetwork: 'aqua',
      domain: 'https://auth.leapwallet.io',
      firebaseConfig: {
        apiKey: "AIzaSyAFbbUkVTigTNyIYfjFK_pT6gOikqfZO9Q",
        authDomain: "fitkitv3.firebaseapp.com",
        projectId: "fitkitv3",
        storageBucket: "fitkitv3.appspot.com",
        messagingSenderId: "685235115769",
        appId: "1:685235115769:web:c882bde4667a1a65643428"
      },
      Web3AuthClientId: 'BF25qPiUp9eIylPua-y120JDgekurLeb6sEd0KoLBy8Lajda4KC-yK_VLk8Uqg49ZPCYQJ2j2La7NijQpAOrG8M',
      JWTVerifier: {
        name: "Grow fitter",
        verifier: "growfitter-web3-auth",
        typeOfLogin: "jwt",
        clientId: 'BF25qPiUp9eIylPua-y120JDgekurLeb6sEd0KoLBy8Lajda4KC-yK_VLk8Uqg49ZPCYQJ2j2La7NijQpAOrG8M'
      }
    },
    tenantId: '2',
    clientId: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MiwiaWF0IjoxNjc1OTIwNjQ1fQ.yMfC8n_5yEYiBEFVUMx9OERdHELm-ZVJkj3fJfucBQQ',
    networkId: 'mainnet',
    collectionId: 3,
    leapRedirectURL: `${deepLink}`
  }
  const encodedConfig =   btoa(encodeURIComponent(JSON.stringify(config)))
  const url = `https://auth.leapwallet.io/mintnftCollection.html?leapConfig=${encodedConfig}` // your webapp url
  console.log(url);
  // return;
  try {
    if (await InAppBrowser.isAvailable()) {
      InAppBrowser.openAuth(url, deepLink, {
        // iOS Properties
        ephemeralWebSession: false,
        // Android Properties
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false
      }).then((response) => {
        if (
          response.type === 'success' &&
          response.url
        ) {
          Linking.openURL(response.url)
        }
      })
    } else Linking.openURL(url)
  } catch (error) {
    Linking.openURL(url)
  }
}


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [walletAddress, setWalletAddress] = useState('')

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleURL = (url:any) => {
    if(url) {
      console.log(url.url);
      const address = url.url.split('LeapNearAddress=')[1];
      
      if(address) {
        Alert.alert(address)
        setWalletAddress(address)
      }
      else {
        const mintStatus = url.url.split('mintStatus=')[1];
        Alert.alert(mintStatus)
      }
    }
    Linking.removeAllListeners('url');
  }

  useEffect(() => {
    Linking.addEventListener('url', handleURL); // Deeplink callback
  })

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Login via Web3Auth">
            {
              walletAddress && 
              <Text>{walletAddress}</Text>
            }
            {
              !walletAddress && 
              <Button title='Create Wallet' onPress={() => { createWallet(); }} />
            }
          </Section>
          {
            walletAddress && 
              <Section title="Mint NFT">
                <Button title='Mint Nft' onPress={() => { mintNFT(); }} />
              </Section>
          }
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
