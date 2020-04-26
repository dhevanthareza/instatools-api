import { Response } from 'express';

export class ResponseService {
  public static success(res: Response, message: string, result: any) {
    res.status(200).json({
      message,
      result,
    })
  }
  public static error({ res, message = 'Internal Server Error', code = 500, result = { 'message': 'Normal Error' } }: { res: Response, message: string, code: number, result?: any }) {
    res.status(code).json({
      message,
      result,
    })
  }
}