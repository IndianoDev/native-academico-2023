import * as Yup from 'yup';

const fornecedoresValidator = Yup.object().shape({
  proprietario: Yup.string()
  .nonNullable()
  .min(2,'Valor muito pequeno')
  .required('Campo obrigatório'),
  cnpj: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email().required('Campo obrigatório'),
  cpf: Yup.string().required('Campo obrigatório'),
  telefone: Yup.string()
  })

export default fornecedoresValidator