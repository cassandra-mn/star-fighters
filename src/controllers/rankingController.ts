import {Request, Response} from 'express';
import {getFighters} from '../repositories/rankingRepository.js';

export async function getRanking(req: Request, res: Response) {
    const ranking = await getFighters();
    res.status(200).send(ranking);
}