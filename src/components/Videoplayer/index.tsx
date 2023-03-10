import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused?: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = React.useState(true);

  return (
    <View>
      <Video
        source={{uri}}
        resizeMode={'cover'}
        muted={muted}
        repeat
        style={styles.video}
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          color={colors.white}
          size={20}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
  },
});

export default VideoPlayer;
