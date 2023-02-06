import  { Request, Response, NextFunction } from 'express';
export class BaseError extends Error{
    status = 1
    constructor(status: number,message: string, ) {
        super(message)
        this.status = status
        this.message = message
    }

    respond(res: Response) {
        res.status(this.status).send({error: this.message})
    }
}
export class Unauthorized extends BaseError {
    constructor() {
        super(401, "401 Unauthorized")
    }
}

export class BadRequest extends BaseError {
    constructor() {
        super(400, "400 Bad Request")
    }
}

export class InvalidID extends BaseError {
  constructor() {
    super(400, "400 Invalid ID")
  }
}

export class NotFound extends BaseError {
    constructor() {
        super(404, "404 Not Found")
    }
}

export class InternalServerError extends BaseError {
    constructor() {
        super(500, "500 Internal Server Error")
    }
}