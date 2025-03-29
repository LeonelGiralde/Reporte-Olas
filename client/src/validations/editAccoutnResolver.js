import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
   name: yup
   .string("El nombre debe ser un texto")
   .required("Debe ingresar un nombre")
   .required("Debe ingresar un nobmre"),
   email: yup
   .string("El email debe ser un texto")
   .required("Debe ingresar un email")
   .email("Debe ingresar un email valido"),
   /*role : yup
   .string("EL debe ser un texto")
   .required("Debe ingresar un nombre")
     . oneOf(Object.keys(roles),"El ROL NO ES VALIDO")
   */
   });

export default yupResolver(schema);
