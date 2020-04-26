class ApplicationError extends Error {
  code: number
  message: string
  constructor({ message = 'Internal Server Error', code = 400 }: { message: string, code?: number, data?: Map<any, any> }) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message ||
      'Internal Server Error';

    this.code = code || 500;
  }
}
export default ApplicationError;

