import axios from 'axios';
import { config } from '@app/core/config';

const TIME_OUT = 60 * 1000;

const DEFAULT_HEADERS = {
  accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJudmEiLCJleHAiOjE3NTk1NzY4NzJ9.PoB6VNtZbrmCcLZkXDjQoYfCFztl5onSJ5iZHbCQBbw',
};

export const axiosEmotionTracking = axios.create({
  baseURL: config().api.BASE_URL,
  timeout: TIME_OUT,
  headers: DEFAULT_HEADERS,
});
