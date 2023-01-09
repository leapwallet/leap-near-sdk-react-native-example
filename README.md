# leap-near-sdk-react-native-example

The above example works for the webapp built using `leap-near-sdk` version 1.1.0 or above

Here, is the sample snippet needs to be used in your webapp to support the mobile.

```ts

  const setLeapRedirectURL = () => {
    const params = window.location.search.substr(1).split('&');
    params.forEach((param) => {
      if(param.split("=")[0] === 'leapRedirectURL') {
        localStorage.setItem('leapRedirectURL', param.split("=")[1])
      }  
    })
  }

  const autoLogin = async () => {
    setLeapRedirectURL();
    const sdk = await LeapNearSdk.init({ 
      auth_service: 'web3auth',
      authConfig: { appName: 'Leap near board',  theme: 'dark', isRedirect: true},
      networkId: 'testnet',
    })
    const token = await sdk.auth?.getUserToken();
    if(token) {
      await sdk.auth?.connectWithToken(token);
      const signedData =  await sdk?.auth?.getUser();
      console.log(signedData?.address);
      const redirectURL = localStorage.getItem('leapRedirectURL') || 'leap-near-react-native://';
      (window as Window).location = `${redirectURL}?LeapNearAddress=${signedData?.address}`;
    }
    else {
      await sdk?.auth?.mobileLogin()
    }
  }

autoLogin();

```



https://user-images.githubusercontent.com/110881421/211249655-5379f909-47c9-42dd-9216-359c4abc46ec.mov


