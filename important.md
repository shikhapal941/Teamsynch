# installation

npx create-expo-app@latest . --template blank-typescript
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage
npm install --save-dev @types/react @types/react-native
npx expo start

# git

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shikhapal941/Teamsynch.git
git push -u origin main
