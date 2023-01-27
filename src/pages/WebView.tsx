import {View} from 'react-native';
import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

export default function Webview() {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://example.com/'}} />
    </View>
  );
}
