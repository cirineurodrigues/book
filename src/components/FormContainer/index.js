import {Container} from './styles'
import Validation from '../Validation'
import FormLogin from '../FormLogin'

import Logo from '../../assets/Logo.svg'

import {useState} from 'react'

const FormContainer = () => {
    const [validation, setValidation] = useState(false)
    const [loading, setLoading] = useState(false)

    const setButton = () => {
        setLoading(!loading)
    }

    return (
        <Container>
            <header>
                <img src={Logo} alt="Ioasys Logo" title="Ioasys Logo"/>
                <span>
                    Books
                </span>
            </header>
            <div>
                <FormLogin loading={loading} setButton={setButton}/>
                {validation && <Validation/>}
            </div>
        </Container>
    )
}

export default FormContainer