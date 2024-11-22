import React from 'react';
import FastImage from 'react-native-fast-image';

interface CustomImageProps {
  uri: string;
}

const CustomImage = ({ uri }: CustomImageProps) => {
  return <FastImage
    style={{ width: 200, height: 200 }}
    source={{
      uri,
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />;
};

export default CustomImage;
