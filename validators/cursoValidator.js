import React from 'react'
import * as Yup from 'yup';


const cursoValidator = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Valor muito baixo!')
        .max(10, 'Valor muito alto!')
        .required('campo obrigatorio'),

    duracao: Yup.number(),
    modalidade: Yup.string(),


})

export default cursoValidator