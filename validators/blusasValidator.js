import * as Yup from 'yup';

const blusasValidators = Yup.object().shape({
    marca: Yup.string()
    .nonNullable()
    .min(2,'Valor muito Baixo')
    .required('Campo obrigatório'),
    quantidade: Yup.number().max(100, 'Valor muito Alto').required('Campo obrigatório'),
    tamanho: Yup.string().required('Campo obrigatório'),
    cor: Yup.string().required('Campo obrigatório')
  })

export default blusasValidators