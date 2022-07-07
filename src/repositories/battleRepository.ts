import axios, {AxiosResponse} from 'axios';
import connection from '../config/database.js';

export async function getStars(username: string) {
    const {data}: AxiosResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
    return data.reduce((count: number, repo) => count + repo.stargazers_count, 0);
}

export async function insertBattle(battle: {winner: string, loser: string, draw: boolean}) {
    const {winner, loser, draw} = battle;
    await connection.query('INSERT INTO battles (winner, loser, draw) VALUES ($1, $2, $3)', [winner, loser, draw]);
}