import {Request, Response} from 'express';

import * as service from '../services/battleService.js';

export async function postBattle(req: Request, res: Response) {
    const {firstUser, secondUser}: {firstUser: string, secondUser: string} = req.body;

    try {
        if (!firstUser || !secondUser) return res.sendStatus(422);

        const user1 = await service.getUser(firstUser);
        const user2 = await service.getUser(secondUser);
        console.log(user1);
        console.log(user2);

        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}