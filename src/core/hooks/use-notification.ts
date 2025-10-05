import { useCallback } from 'react';
import { Icon, MessageOptions, showMessage } from 'react-native-flash-message';
import { View } from 'react-native';

export interface NotificationParams extends MessageOptions {
  message: string;
  type?: ColorType;
}

export const useNotification = (): {
  showNotification: (params: NotificationParams) => void;
} => {
  const showNotification = useCallback((params: NotificationParams): void => {
    const {
      message,
      type = 'success',
      duration = 2500,
      position = 'top',
      ...other
    } = params;

    showMessage({
      ...other,
      message,
      duration,
      position,
      titleStyle: { fontWeight: '600', fontSize: 15 },
      color: 'red',
      icon: type,
      backgroundColor: 'white',
    });
  }, []);
  return { showNotification };
};
