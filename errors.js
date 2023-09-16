export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.status = 404;
  }
}
export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = message;
    this.status = 400;
    this.message = message;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.status = 401;
    this.message = message;
  }
}
export class MethodNotAllowedError extends Error {
  constructor(message = "Method Not Allowed") {
    super(message);
    this.name = "NotAllowedError";
    this.status = 405;
  }
}


/**
 *
 * Sarah awik 9 - 16 -2023
 */
