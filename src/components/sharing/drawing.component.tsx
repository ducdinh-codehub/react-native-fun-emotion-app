import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { PencilKitView, PencilKitViewRef } from 'expo-pencilkit-ui';
import { StyleSheet } from 'react-native';

const Drawing = () => {
  const pencilKitRef = useRef<PencilKitViewRef>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pencilKitRef.current) {
        pencilKitRef.current.setupToolPicker();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <PencilKitView
        ref={pencilKitRef}
        style={styles.canvas}
        onDrawStart={event => console.log('Drawing started')}
        onDrawEnd={event => console.log('Drawing ended')}
        onCanUndoChanged={event =>
          console.log('Can undo:', event.nativeEvent.canUndo)
        }
        onCanRedoChanged={event =>
          console.log('Can redo:', event.nativeEvent.canRedo)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  canvas: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
});

export default Drawing;
