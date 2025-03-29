import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
   newPassword: yup
   .string("La contraseña tiene que ser un texto")
   .required("Tenes que ingresar una contraseña")
   .min(6, "La contraseña tiene que tener como minimo 6 caracteres")
});

export default yupResolver(schema);
