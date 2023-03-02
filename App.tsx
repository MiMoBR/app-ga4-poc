import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import type {PropsWithChildren} from 'react';
import React from 'react';
import analytics from '@react-native-firebase/analytics';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
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
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            agora vai ----Edit <Text style={styles.highlight}>App.tsx</Text> to
            change this screen and then come back to see your edits.
          </Section>
          <Section title="Cta Test 1">
            <Button
              title="Press me"
              onPress={() => {
                Alert.alert('Simple Button pressed');
                console.log('Clicou no CTA Test 1');
              }}
            />
          </Section>
          <Section title="Cta Test 2">
            <Button
              title="Add To Basket"
              onPress={async () => {
                await analytics().logEvent('click_CTA_POC_last', {
                  id: 3745092,
                  item: 'HERE ITEM INFO',
                  description: 'HERE THE DESCRIPTION',
                });
                console.log('Clicou no CTA Test 2');
                const appInstanceId = await analytics().getAppInstanceId();
                console.log(appInstanceId);
              }}
            />
          </Section>
          <Section title="Cta Test 3">
            <Button
              title="Press me 222"
              onPress={async () => {
                await analytics().logSelectContent({
                  content_type: 'TEST CONTENT 1 Last Test',
                  item_id: 'abcd11111',
                });
                console.log('Clicou no CTA Press me1111');
              }}
            />
          </Section>
          <Section title="Cta Test 3">
            <Button
              title="Press me 222"
              onPress={async () => {
                await analytics().logSelectContent({
                  content_type: 'TEST CONTENT 2 Last Test',
                  item_id: 'abcd22222',
                });
                console.log('Clicou no CTA Press me222');
              }}
            />
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
