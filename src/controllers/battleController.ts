import {Request, Response} from 'express';

import * as service from '../services/battleService.js';

export async function postBattle(req: Request, res: Response) {
    const {firstUser, secondUser}: {firstUser: string, secondUser: string} = req.body;
    if (!firstUser || !secondUser) return res.sendStatus(422);
    await service.getBattle(firstUser, secondUser);
    res.sendStatus(200);
}