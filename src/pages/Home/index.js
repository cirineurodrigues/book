import {Container} from './styles'

import HomeHeader from '../../components/HomeHeader'
import BooksList from '../../components/BooksList'

const Home = () => {
    return (
        <Container>
            <HomeHeader/>
            <BooksList/>
        </Container>
    )
}

export default Home