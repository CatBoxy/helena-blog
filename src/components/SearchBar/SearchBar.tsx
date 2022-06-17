import {InputGroup, InputRightElement, Input} from '@chakra-ui/react'
import { IoSearchSharp } from "react-icons/io5";
import {Container} from './styles';

const SearchBar = () => {
    return (
        <>
            <Container>
                <h2>Libros</h2>
                <InputGroup style={{background: 'white', borderRadius: '0.375rem'}}>
                    <Input placeholder='Buscar...' />
                    <InputRightElement children={<IoSearchSharp />} />
                </InputGroup>
            </Container>
        </>
    );
};

export default SearchBar;