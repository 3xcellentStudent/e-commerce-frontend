declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      SERVER_ROUTE: string;
      PRODUCT_GET_ROUTE: string
      PRODUCT_GET_RECURSIVE_ROUTE: string;
      NEXT_PUBLIC_CLIENT_MAIN: string;
      NEXT_PUBLIC_CLIENT_PRODUCT: string;
      NEXT_PUBLIC_CLIENT_PURCHASE: string;
    }
  }
}

export {}
