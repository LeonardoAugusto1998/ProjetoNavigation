
import React from 'react';
import AudioProvider from './src/Context/AudioProvider';
import AudioTabNavigation from './src/AudioTabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AudioTabNavigation/>
      </NavigationContainer>
    </AudioProvider>
  );
}


