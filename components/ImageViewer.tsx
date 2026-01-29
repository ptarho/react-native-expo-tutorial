import { Image, ImageStyle } from "expo-image";
import { StyleProp, StyleSheet } from "react-native";

type Props = {
  imgSource: string;
  imgStyles?: StyleProp<ImageStyle>;
};

export default function ImageViewer({ imgSource, imgStyles }: Props) {
  return <Image source={imgSource} style={[styles.image, imgStyles]} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
