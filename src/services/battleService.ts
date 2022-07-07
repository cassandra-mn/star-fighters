import * as battleRepository from '../repositories/battleRepository.js';

export async function getBattle(firstUser: string, secondUser: string) {
    const starsUser1 = await battleRepository.getStars(firstUser);
    const starsUser2 = await battleRepository.getStars(secondUser);

    const battle = starsUser1 > starsUser2 ? {
        winner: firstUser,
        loser: secondUser,
        draw: false
    } : starsUser1 < starsUser2 ? {
        winner: secondUser,
        loser: firstUser,
        draw: false
    } : {
        winner: null,
        loser: null,
        draw: true
    }

    console.log(battle);

    return battle;
}