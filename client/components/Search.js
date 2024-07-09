import { useState } from 'react';
import Input from './Input';

const Search = () => {
  const [text, setText] = useState('');

  const handleText = (newText) => {
    setText(newText);
  };

  return (
    <Input
      onChangeText={handleText}
      placeholder='Search for films...'
      text={text}
    />
  );
};

export default Search;
