import axios, {AxiosResponse} from 'axios';

export async function getUser(username: string) {
    const {data}: AxiosResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

    console.log(data);
    return data;
}