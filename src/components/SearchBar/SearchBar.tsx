// import { InputGroup, InputRightElement, Input } from '@chakra-ui/react';
// import { IconSearch } from '@tabler/icons';
import { Container } from './styles';

const SearchBar = () => {
  return (
    <>
      <Container>
        <h2>Libros</h2>
        {/* <InputGroup style={{ background: 'white', borderRadius: '3px' }}>
          <Input placeholder="Buscar..." />
          <InputRightElement children={<IconSearch />} />
        </InputGroup> */}
      </Container>
    </>
  );
};

export default SearchBar;
