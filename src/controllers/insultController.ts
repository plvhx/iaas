import { Request, Response } from 'express';
import { insults } from '../models/insult';

export const getRandomInsult = (req: Request, res: Response) => {
    const index: number = Math.floor(Math.random() * (insults.length - 1));
    res.json(insults[index]);
};
