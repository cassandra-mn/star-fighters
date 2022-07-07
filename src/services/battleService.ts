import * as battleRepository from '../repositories/battleRepository.js';

export async function getUser(username: string) {
    const user = await battleRepository.getUser(username);

    return {user};
}