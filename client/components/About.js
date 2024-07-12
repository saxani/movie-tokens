import { Text, View, StyleSheet } from 'react-native';

const About = ({ movieDetails }) => {
  let genres = '';

  movieDetails.genres &&
    movieDetails.genres.forEach((genre, idx) => {
      if (idx < movieDetails.genres.length - 1) {
        genres += `${genre.name}, `;
      } else {
        genres += genre.name;
      }
    });

  return (
    <View>
      <Text style={styles.text}>{movieDetails.tagline}</Text>

      <Text style={styles.text}>{movieDetails.overview}</Text>
      <Text style={styles.text}>{genres}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: '#fff',
    marginBottom: 15,
  },
});

export default About;
