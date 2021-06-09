import {Container} from './styles'
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <Container>
            <ClipLoader color={'#fff'} size={25}/>
        </Container>
    )
}

export default Spinner