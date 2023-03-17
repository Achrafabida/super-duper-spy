export class ApiError extends Error {
  statusCode: number
  constructor (statusCode: number, message: string, stack = '') {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = Error.name
    this.statusCode = statusCode

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }

    this.stack = this.stack
      ?.replace(/^.*(node:|node_modules).*/gm, '')
      .replace(/\n+/g, '\n')
      .replace(/\/usr\/src\/app/g, 'services/api')
  }
}
