import { Image } from 'react-native';

export default Logo = () => {
  return (
    <Image
      style={{ height: 40, width: 40, margin: 7 }}
      source={require('../assets/Movie_Tokens_Logo_reduced_size.png')}
    />
  );
};
