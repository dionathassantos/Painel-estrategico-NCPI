export const config = {
  firebase: {
    development: {
      apiKey: "AIzaSyBYcTwJLUA9YXfZsigyLGJy6WMsYKfdJXo",
      authDomain: "ncpi-102ca.firebaseapp.com",
      databaseURL: "https://ncpi-102ca-default-rtdb.firebaseio.com",
      projectId: "ncpi-102ca",
      storageBucket: "ncpi-102ca.firebasestorage.app",
      messagingSenderId: "592471971260",
      appId: "1:592471971260:web:acea66a4add39211d387b9",
      measurementId: "G-KR1NKD77R7"
    },
    production: {
      // Configurações de produção aqui
      // Recomendo usar variáveis de ambiente
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    }
  }
}; 