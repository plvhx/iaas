import { Router } from 'express';
import { getRandomInsult } from '../controllers/insultController';

const router = Router();

router.get('/', getRandomInsult);

export default router;
