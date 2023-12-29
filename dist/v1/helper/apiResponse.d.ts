import { Response } from "express";
export declare const successResponse: (res: Response, msg: String, data: any) => Promise<Response<any, Record<string, any>>>;
export declare const errorMessage: (res: Response, statusCode: number, msg: string) => Promise<Response<any, Record<string, any>>>;
