import * as Yup from 'yup';

const clientesValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('Campo obrigatório'),
    idade: Yup.number().min(1,'Valor muito pequeno').max(100,'Valor muito grande'),
    email: Yup.string().email().required('Campo obrigatório'),
    cpf: Yup.string().required('Campo obrigatório'),
    telefone: Yup.string()
  })

export default clientesValidator