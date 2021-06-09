import {Container} from './styles'
import Logo from '../../assets/Logo.svg'

const FormLogin = () => {
    return (
        <Container>
            <header>
                <img src={Logo} alt="Ioasys Logo" title="Ioasys Logo"/>
                <span>
                    Books
                </span>
            </header>
            <form>
                <div>
                    <label>Email</label>
                    <input></input>
                </div>
                <div>
                    <label>
                        Senha
                    </label>
                    <input
                        type="password"
                    ></input>
                    <button>Entrar</button>
                </div>
            </form>
        </Container>
    )
}

export default FormLogin