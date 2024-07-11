import { Image, StyleSheet } from 'react-native';

const MoviePoster = ({ path, posterURL, width, height, marginBottom }) => {
  const styles = StyleSheet.create({
    image: {
      width: width,
      height: height,
      marginBottom: marginBottom,
    },
  });

  if (!path) {
    return (
      <Image
        resizeMode={'contain'}
        style={styles.image}
        source={require('../assets/No_Movie_Poster.jpg')}
      />
    );
  }

  const uri = posterURL + path;

  return (
    <Image
      resizeMode={'contain'}
      style={styles.image}
      source={{
        uri: uri,
      }}
    />
  );
};

export default MoviePoster;
