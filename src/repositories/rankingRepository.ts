import connection from '../config/database.js';

export async function getFighters() {
    const {rows} = await connection.query('SELECT * FROM fighters');
    return {fighters: rows};
}