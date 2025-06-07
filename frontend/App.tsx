import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Colors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  dark: '#1f2937',
  light: '#f9fafb',
  white: '#ffffff',
  black: '#000000',
  gray: '#6b7280',
  success: '#10b981',
};

type SectionProps = PropsWithChildren<{
  title: string;
  onPress?: () => void;
}>;

function FeatureCard({
  children,
  title,
  onPress,
}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: isDarkMode ? Colors.dark : Colors.white,
          shadowColor: isDarkMode ? Colors.white : Colors.black,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.cardTitle,
          {
            color: isDarkMode ? Colors.white : Colors.dark,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.cardDescription,
          {
            color: isDarkMode ? Colors.gray : Colors.gray,
          },
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.light,
  };

  const handleFeaturePress = (featureName: string) => {
    Alert.alert('Feature Pressed', `You pressed: ${featureName}`);
  };

  const incrementCounter = () => {
    setCount(prev => prev + 1);
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text
            style={[
              styles.title,
              {color: isDarkMode ? Colors.white : Colors.dark},
            ]}>
            🚀 DoubleRN App
          </Text>
          <Text style={[styles.subtitle, {color: Colors.gray}]}>
            A modern React Native experience
          </Text>
        </View>

        {/* Counter Section */}
        <View style={styles.counterSection}>
          <TouchableOpacity
            style={[styles.counterButton, {backgroundColor: Colors.primary}]}
            onPress={incrementCounter}>
            <Text style={styles.counterButtonText}>Tap me! Count: {count}</Text>
          </TouchableOpacity>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresContainer}>
          <FeatureCard
            title="🎨 Beautiful UI"
            onPress={() => handleFeaturePress('Beautiful UI')}>
            Modern design with dark mode support and smooth animations
          </FeatureCard>

          <FeatureCard
            title="⚡ Fast Performance"
            onPress={() => handleFeaturePress('Fast Performance')}>
            Optimized for speed with React Native's latest features
          </FeatureCard>

          <FeatureCard
            title="📱 Cross Platform"
            onPress={() => handleFeaturePress('Cross Platform')}>
            Works seamlessly on both iOS and Android devices
          </FeatureCard>

          <FeatureCard
            title="🔧 Easy to Customize"
            onPress={() => handleFeaturePress('Easy to Customize')}>
            Simple to modify and extend with your own features
          </FeatureCard>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, {color: Colors.gray}]}>
            Built with ❤️ using React Native
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  counterSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  counterButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  counterButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  featuresContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;
