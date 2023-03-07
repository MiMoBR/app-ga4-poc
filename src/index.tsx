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

import {GASelectContents} from './shared/middleware/gaLogSelectContent';
import {GaLogEvents} from './shared/middleware/gaLogEvent';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {TestAlert} from './shared/middleware/test';

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

function IndexMain() {
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
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            GA4 & Looker to track events on APP.
            {/* agora vai ----Edit <Text style={styles.highlight}>App.tsx</Text> to
            change this screen and then come back to see your edits. */}
          </Section>
          <Section title="CTA test Alert">
            <Button title="Press me" onPress={TestAlert()} />
          </Section>
          <Section title="Cta Test 2">
            <Button
              title="CTA using logEvent"
              onPress={GaLogEvents({
                event_name: 'clicked_cta_test',
                date_event: new Date(),
                element_actived: 'app_sc_home_cta_test_2',
                app_instance_id: '',
              })}
            />
          </Section>
          <Section title="Cta Test 3">
            <Button
              title="CTA using selectContent"
              onPress={GASelectContents()}
            />
          </Section>
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

export default IndexMain;
