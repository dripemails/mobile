import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'org.dripemails.mobile',
  appName: 'DripEmails',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: ['https://dripemails.org/*', 'https://*.dripemails.org/*']
  },
  android: {
    allowMixedContent: true
  },
  ios: {
    allowsLinkPreview: false,
    scrollEnabled: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#0f0e17'
    }
  }
}

export default config
