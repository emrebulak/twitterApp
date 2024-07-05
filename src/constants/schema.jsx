import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().required('E-mail alanı zorunludur').email('Geçerli bir e-mail adresi giriniz'),
  password: yup.string().required('Parola alanı zorunludur').min(6, 'Parola alanı en az 6 karakter olmalıdır'),
});
