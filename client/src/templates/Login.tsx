import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;

    * {
        flex-grow: 1
    }

    .image {
        background-color: black;
        color: #FFFF;
    }

    .container-login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: red;
    }

    form {
        border: 1 px solid  black;
        padding: 2rem;
    }

    div {
        margin-botton: 1rem;

        label {
            display: block;
            color: 
        }

    }
`

export default () => <>
    <Container>
        <div className="image">
        </div>
        <form>
            <div>
                <label>Login</label>
                <input name="login" />
            </div>
            <div>
                <label>Senha</label>
                <input type="password" name="password" />
            </div>
            <button>entrar</button>
            <button>recuperar senha</button>
        </form>
    </Container>
    </>