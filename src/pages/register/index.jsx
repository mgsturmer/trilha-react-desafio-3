import { useNavigate } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";
import { api } from '../../services/api';

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, RowLogin, TitleWords, Wrapper, InputError } from './styles';

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.post('/users', formData);

            // Sucesso no cadastro, navegar para login ou feed
            if (data) {
                alert('Conta criada com sucesso!');
                navigate('/login');
            }
        } catch (e) {
            alert('Erro ao criar a conta');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        Venha fazer parte dessa mudança! Com a DIO, <TitleWords>você</TitleWords> vai
                        aprender com <TitleWords>experts</TitleWords> e conquistar as <TitleWords>oportunidades</TitleWords> dos seus sonhos.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                            {errors.nome && <InputError>Nome completo é obrigatório</InputError>}

                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <InputError>E-mail é obrigatório</InputError>}

                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <InputError>Senha é obrigatória</InputError>}

                            <Button title="Criar minha conta grátis" variant="secondary" type="submit" />
                        </form>

                        <Row>
                            <span>
                                Ao clicar em "Criar minha conta", declaro que aceito as{' '}
                                <a href="/privacy-policy">Política de Privacidade</a> e os{' '}
                                <a href="/terms">Termos de Uso</a> da DIO.
                            </span>
                        </Row>
                        <RowLogin>
                            <span>
                                Já tenho conta,{' '}
                                <a href="/login">Fazer login</a>
                            </span>
                        </RowLogin>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Register };
