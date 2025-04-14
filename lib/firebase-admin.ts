import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const firebaseAdminConfig = {
  credential: cert({
    projectId: "ncpi-102ca",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvKVNI+SMuttd6\n15kJ748AmmF9BSp/UtIt4+4Q12N6GGX1Ur9f5QWS9G2a/iy+gU81RyEiATMaocSJ\nw7T8qT5BvuOJQmsSawZLHWpRF3P4NnqfJoVkPReOmV2FvXRM5NbnbwuivfXt9EQN\nDSL/+j2TriTnDdUY8f9RtOqOF44sZKvLYwKtu/HkQ9UZUN1qdJzeMlWSCnPD7mpa\nySViCBGaqemjBML7PeMIRTPj+RHzcu0WQqmCGmTDHKHXyDzhIFLodBsyMWa23TwR\nz1GlXCGsXR/xW3NboYA1jnj+9JAFLvW1QnGatMWImJ8Aih0cM4A2WO8L+FWEhvu2\ncCulQWq/AgMBAAECggEAIieRuNnzlUlLzQU7LyfKH5j6x3D5b2hL2WznX9tP51/Y\nibR/4of6xUPqF13WhbMbKc1b1ZCcUWYXt7E0mku5+wHoxjvwOuApkv4CXBuRnmWp\nFV1ih0AuVrzq8ogVpGS+ztPlVe9qg+KsXksgdv9pgGFlirQ0yC9v1JPNZLWNIHSR\nzwhcNfVXBmi7XTTYwCwAJ1f97Myxb9FpqkyUxwNjecaNkEOcKuruWD3Jg1pTt48o\nFg1CqRrzPHoErW+T2mfD1ivUDhXfcJ3VUe9nMxx4IU0wlYmnZmGBs5Y9XIiW+Pp5\nYoD2L4ji9mnh/4s9daDcC1WxxChLG2plmszIPU7W6QKBgQDrBt06qfMr21N+UEN8\nWlPvfrIYbjYwDfmjdmCVDkm7QeqN/1AWA+f7mogYRa+3FXiOT89yDqtUMb5xj7WR\nbguTtgC8/ukC3wdXwBtiwJLHZCfKpznjeIFESPs07Tvb+xPvaB1uxjQs1Q3LChZw\nXUvRhmqWUccCwbgSKzRmPUh9ewKBgQC+ytl+aFu3CQs6R6K+vH7TP5DM9cf/6MhV\nl5PVTvPLk2IUAW+iPO2B6y6PFb7oCn5alYr7OYvx/ThDZ2ESlD465ruunS2OM+vP\nIQdOqRhgoxdOYjnSt1YAKgmKfUJHY83FRm03OeMg0ZMdA5axMhZs9JvjqICgy3ju\nSah9GxCKjQKBgEtUweghvQ2bmSFtfJQJJ8ol49Osz7WLZS6drMtZ7wwUTqgA45yK\n1/pvR5vwCig2u5NxxV4bkZLE9vPTSjE5AoDv30C0u97tuZ7Itn5qlyFN2us7unRM\nlbJbahlGyN7zlSoxRu3QnbyY9XjU3OhbHwgje1p/D7i0etln+72hevCtAoGBALT9\nhVku8mIuCCKfNjmuYrlPQbPNLI8Nao4Xnrvpi8iA5beIrTfAiKaITcCapmFFIxwX\nZKJxsto6lpcKiMGxM1945m382OxfQMFa2a27J071J/TJpYTJOqIpPqfLr4Y9nUQZ\nTR3oohfN97q8XsV1eGSfnwpWHL9shim2Yklb1VM5AoGAfJIyxoXFv4K4EDInvSXA\n/DoLPIfF+gl8T6jv5ivw5Ym5p7VqGVQMGS1gxWx/K93qHzG4VEQE+t0Vn72o93px\nEuCzXv5ajzErNC40XcSMNqMjYoX9X4pCzYslRn5lcoN2U0ANGdEYWyDJRD/Ao25w\nQPFMQKkjUKFsMS35svG+CEc=\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-fbsvc@ncpi-102ca.iam.gserviceaccount.com",
  }),
  storageBucket: "ncpi-102ca.appspot.com",
};

// Initialize Firebase Admin
const adminApp = getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApps()[0];
const adminDb = getFirestore(adminApp);
const adminAuth = getAuth(adminApp);

export { adminApp, adminDb, adminAuth }; 