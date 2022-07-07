import {Request, Response, NextFunction} from 'express';

const serviceErrorToStatusCode = {
    unauthorized: 401,
    conflict: 409,
};
  
export function unauthorizedError() {
    return { type: "unauthorized" };
}
  
export function conflictError() {
    return { type: "conflict" };
}

export async function errorHandler(error, req: Request, res: Response, next: NextFunction) {
    if (error.type) {
        res.sendStatus(serviceErrorToStatusCode[error.type]);
    }
    
    res.sendStatus(500);
}