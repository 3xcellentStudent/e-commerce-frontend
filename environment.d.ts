declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      SERVER_ROUTE: string;
      PRODUCT_GET_ROUTE: string
      PRODUCT_GET_RECURSIVE_ROUTE: string
    }
  }
}

export {}
