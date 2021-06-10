import {Container} from './styles'
import Validation from '../Validation'
import FormLogin from '../FormLogin'

import logo from '../../assets/logo.svg'

import {useState} from 'react'

const FormContainer = () => {
    const [validation, setValidation] = useState(false)
    const [loading, setLoading] = useState(false)

    const setButton = () => {
        setLoading(!loading)
    }

    const setMessage = () => {
        setValidation(!validation)
    }

    return (
        <Container>
            <header>
                <img src={logo} alt="Ioasys Logo" title="Ioasys Logo"/>
                <span>
                    Books
                </span>
            </header>
            <div>
                <FormLogin loading={loading} setButton={setButton} validation={validation} setMessage={setMessage}/>
                {validation && <Validation/>}
            </div>
        </Container>
    )
}

export default FormContainer