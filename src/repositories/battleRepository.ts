import axios, {AxiosResponse} from 'axios';

export async function getStars(username: string) {
    const {data}: AxiosResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
    
    return data.reduce((count: number, repo) => count + repo.stargazers_count, 0);
}