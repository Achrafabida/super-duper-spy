export class AppError extends Error {
  statusCode: number

  constructor (statusCode: number, message: string) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = Error.name
    this.statusCode = statusCode

    // Error.captureStackTrace(this)
    this.stack = this.stack
      ?.replace(/^.*(node:|node_modules).*/gm, '')
      .replace(/\n+/g, '\n')
  }
}
