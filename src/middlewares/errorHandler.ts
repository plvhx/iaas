import { Request, Response } from 'express';

export interface AppError extends Error {
    status?: number;
}

export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response
) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};
