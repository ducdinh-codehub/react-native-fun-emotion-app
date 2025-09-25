import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'react-native';
import { useSession } from '../../auth-client';

const App = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <Button
          title="Press Me"
          onPress={() => console.log('Button pressed!')}
          color="#F8F8F8"
        />
      )}
    </>
  );
};

export const Route = createFileRoute('/')({
  component: App,
});
