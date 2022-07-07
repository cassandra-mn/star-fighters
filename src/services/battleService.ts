import * as battleRepository from '../repositories/battleRepository.js';

export async function getBattle(firstUser: string, secondUser: string) {

    const starsUser1 = await battleRepository.getStars(firstUser);
    const starsUser2 = await battleRepository.getStars(secondUser);

    console.log(starsUser1, starsUser2);

    return {starsUser1, starsUser2};
}