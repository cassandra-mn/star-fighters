import express, {json} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

app.listen(6000, () => {
    console.log('Running on 6000');
})