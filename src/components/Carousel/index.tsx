import {
  Image,
  FlatList,
  useWindowDimensions,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './../FeedPost/styles';
import colors from './../../theme/colors';
import DoublePressable from '../DoublePress';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'center',
        }}>
        {images.map((_, i) => (
          <View
            key={i}
            style={{
              width: 10,
              aspectRatio: 1,
              backgroundColor:
                activeImageIndex === i ? colors.primary : colors.white,
              borderRadius: 5,
              margin: 7,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
