import * as Yup from 'yup';

const tenisValidators = Yup.object().shape({
    marca: Yup.string()
    .nonNullable()
    .min(2,'Valor muito Baixo')
    .required('Campo obrigatório'),
    quantidade: Yup.string()
    .nonNullable()
    .min(2,'Valor muito Baixo')
    .required('Campo obrigatório'),

    modelo: Yup.string().required('Campo obrigatório'),
    tamanho: Yup.number().required('Campo obrigatório')
  })

export default tenisValidators