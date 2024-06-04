declare module 'swagger-ui-express' {
    import { RequestHandler } from 'express';
  
    interface SwaggerUiOptions {
      explorer?: boolean;
      swaggerOptions?: {
        [key: string]: any;
      };
      customCss?: string;
      customJs?: string;
      customfavIcon?: string;
      customSiteTitle?: string;
    }
  
    function setup(
      swaggerDoc: object,
      options?: SwaggerUiOptions,
      customCss?: string,
      customJs?: string,
      customfavIcon?: string,
      customSiteTitle?: string
    ): RequestHandler;
  
    function serve(req: any, res: any, next: any): void;
  
    export { setup, serve };
  }
  