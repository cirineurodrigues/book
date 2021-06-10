import {Header} from './styles'

import logo_black from '../../assets/logo_black.svg'
import {FiLogOut} from 'react-icons/fi'

const HomeHeader = () => {
    return (
        <Header>
            <h1>
                <img src={logo_black} alt="Ioasys Logo" title="Ioasys Logo"/>
                <span>
                    Books
                </span>
            </h1>
            <div>
                <p>Bem vindo, <span>Guilherme</span></p>
                <button>
                    <FiLogOut/>
                </button>
            </div>
        </Header>
    )
}

export default HomeHeader