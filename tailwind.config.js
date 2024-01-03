// See Styleguide:  https://www.figma.com/file/mQWFBK3mGzVQj5Hs2gPiW3/Curaleaf---New-Template-**?type=design&node-id=77-9768&mode=design&t=YBxmh5A3TvoMnzzb-0
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './utils/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        // EXAMPLE: Font size customization
        // 'display-1': [
        //   '64px',
        //   {
        //     lineHeight: '64px',
        //     letterSpacing: '-0.01'
        //   }
        // ],
        10: ['10px']
      },
      fontFamily: {
        // Example custom font.  Requires custom font to be loaded via expo-font.  See useCachedResources.ts and README.md.
        'sf-pro-rounded-regular': ['sf-pro-rounded-regular'],
        'sf-pro-rounded-bold': ['sf-pro-rounded-bold'],
        'sf-pro-rounded-semiBold': ['sf-pro-rounded-semiBold'],
        'sf-pro-rounded-medium': ['sf-pro-rounded-medium'],
        'sf-pro-rounded-light': ['sf-pro-rounded-light'],
        'sf-pro-rounded-black': ['sf-pro-rounded-black'],
        'sf-pro-rounded-thin': ['sf-pro-rounded-thin']
      },
      colors: {
        // TODO: Normally I would do themeing here
        // 'Primary-05': '#f5f1eb',
        // 'Primary-10': '#e5e2dd',
        // 'Primary-70': '#244d5a',
        // 'Primary-80': '#1d3037',
        // // Accent
        // 'Accent-1': '#f38231',
        // 'Accent-1-Darker': '#c65c10',
        // 'Accent-2': '#deead3',
        // 'Accent-2-Lighter': '#eef2e9',
        // // Feedback
        // 'Feedback-Error-Lighter': '#fdf2f3',
        // 'Feedback-Error': '#c5003e',
        // 'Feedback-Error-Darker': '#8d002c',
        // 'Feedback-Success-Lighter': '#dff6dd',
        // 'Feedback-Success': '#107c10',
        // 'Feedback-Success-Darker': '#075807',
        // 'Feedback-Warning-Lighter': '#fff0d2',
        // 'Feedback-Warning': '#ffa800',
        // 'Feedback-Warning-Darker': '#976400',
        // // Neutral
        // 'Neutral-White': '#ffffff',
        // 'Neutral-Grey-0': '#ffffff',
        // 'Neutral-Grey-10': '#f9f9f9',
        // 'Neutral-Grey-20': '#f1f1f1',
        // 'Neutral-Grey-30': '#e9e9e9',
        // 'Neutral-Grey-40': '#e1e1e1',
        // 'Neutral-Grey-50': '#d1d1d1',
        // 'Neutral-Grey-60': '#c9c9c9',
        // 'Neutral-Grey-70': '#a1a1a1',
        // 'Neutral-Grey-80': ' #5F5F5F',
        // 'Neutral-Grey-90': '#3a3a3a',
        // 'Neutral-Grey-100': '#222222',
        // 'Neutral-Black': '#000000'
      }
    }
  },
  plugins: []
};
