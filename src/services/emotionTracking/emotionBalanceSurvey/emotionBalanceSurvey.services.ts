import { axiosEmotionTracking } from '@app/services/axios/axios-config';
import { CreateEmotionSurveyParams } from './emotionBalanceSurvey.interface';

const API_PATH = {
  BASE: 'emotionBalance',
  BASE_SERVICE: '',
  CREATE_EMOTION_SURVEY: '/create-emotion-survey',
};
const createEmotionSurvey = async (
  body: CreateEmotionSurveyParams,
): Promise<any> => {
  console.log('createEmotionSurvey', body);
  const data = await axiosEmotionTracking.post(
    API_PATH.BASE + API_PATH.CREATE_EMOTION_SURVEY,
    body,
  );

  console.log('createEmotionSurvey456', data);
  console.log('createEmotionSurvey123', data.request);

  return data;
};

export const emotionBalanceSurveyService = {
  createEmotionSurvey,
};
