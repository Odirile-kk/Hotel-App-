import express from 'express';
import { initiatePayment } from '../controllers/payment.js';

const router = express.Router();

router.post('/initiate-payment', initiatePayment);

export default router;
