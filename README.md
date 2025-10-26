# GlowMart
## Project Introduction
GlowMart is a mobile shopping application specializing in lighting products, designed and developed for **Saint Mediterranean Lux**. This mobile-first platform provides customers with an intuitive and seamless shopping experience for browsing, ordering, and managing their lighting product purchases.

## Motivation
### Value for Users
- **Convenient Shopping**: Browse and purchase lighting products anytime, anywhere from your mobile device
- **Order Transparency**: Track your orders in real-time from placement to delivery
- **Easy Navigation**: Intuitive menu system and product catalog for effortless browsing
- **Bill Management**: Access and retrieve bills and invoices directly from the app
- **Mobile-Optimized UX**: Smooth, responsive interface designed specifically for mobile devices

### Value for Company
- **Enhanced Customer Engagement**: Direct mobile channel for customer interaction
- **Streamlined Operations**: Automated order tracking and bill management
- **Market Expansion**: Reach customers through mobile-first approach
- **Brand Presence**: Modern digital platform strengthening Saint Mediterranean Lux's market position

## Main Features
- **Order Tracking**: Real-time monitoring of order status from confirmation to delivery
- **Intuitive Menus**: Well-organized navigation for easy product discovery
- **Bill Retrieval**: Quick access to purchase history and invoices
- **Product Catalog**: Browse comprehensive lighting product catalog with detailed information
- **Mobile UX**: Responsive design optimized for seamless mobile experience
- **User Authentication**: Secure login and account management

## Tech Stack
GlowMart is built using modern mobile development technologies:
- **React Native**: Cross-platform mobile application framework
- **JavaScript**: Core programming language for app logic
- **Ruby**: Backend dependencies and configuration
- **Objective-C**: iOS native module integration
- **Firebase**: Backend services for authentication and data management

## Installation and Usage
### Requirements
- Node.js (v14 or higher)
- npm or Yarn package manager
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

### Setup Steps
1. Clone the repository
```bash
git clone https://github.com/Adnane-Ahroum/GlowMart.git
cd GlowMart
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (macOS only)
```bash
cd ios
pod install
cd ..
```

4. Configure Firebase
- Add your `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
- Update `firebaseConfig.js` with your Firebase credentials

5. Run the application

For iOS:
```bash
npx react-native run-ios
```

For Android:
```bash
npx react-native run-android
```

## Project Structure
```
GlowMart/
├── src/               # Source code
├── android/           # Android native code
├── ios/               # iOS native code
├── __tests__/         # Test files
├── App.js             # Main application component
├── firebaseConfig.js  # Firebase configuration
└── package.json       # Project dependencies
```

## Contact
**Adnane Ahroum**
- GitHub: [@Adnane-Ahroum](https://github.com/Adnane-Ahroum)
- Repository: [GlowMart](https://github.com/Adnane-Ahroum/GlowMart)

For questions, feedback, or collaboration opportunities, please feel free to reach out through GitHub.
