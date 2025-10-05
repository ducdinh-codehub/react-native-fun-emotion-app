import { useNotification } from '@app/core/hooks/use-notification';
import { CreateEmotionSurveyParams } from '@app/services/emotionTracking/emotionBalanceSurvey/emotionBalanceSurvey.interface';
import { emotionBalanceSurveyService } from '@app/services/emotionTracking/emotionBalanceSurvey/emotionBalanceSurvey.services';
import { useMutation } from '@tanstack/react-query';

export const useCreateEmotionBalanceSurvey = () => {
  const { showNotification } = useNotification();
  return useMutation({
    // mutationKey: [],
    mutationFn: (body: CreateEmotionSurveyParams) => {
      console.log('JumpToService', body);

      return emotionBalanceSurveyService.createEmotionSurvey(body);
    },
    onSuccess: data => {
      console.log('onSuccess', data);
    },
    onError: data => {
      if (data.error_code !== 0) {
        console.log('data.error_msg', data);
        showNotification({
          message: data.message,
          type: 'danger',
        });
        return;
      }
    },
  });
};
