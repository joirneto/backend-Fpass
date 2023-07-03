
import * as yup from 'yup';

export const postSchema = yup.object().shape({
    nome: yup.string().required(),
    favoritar: yup.boolean().required(),
});

export const validateSchema = async (req, schema) => {
    try {
    await schema.validate(req.body, { abortEarly: false });
    return false
    } catch (error) {
    return { error: error.message }
    }
}
