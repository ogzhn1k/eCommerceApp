import * as yup from "yup"

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email giriniz").required("Zorunlu alan"),
    password : yup.string().min(5,"Geçerli bir parola giriniz").required(),
    passwordConfirm : yup.string().oneOf([yup.ref('password')],"Parolalar eşleşmedi").required(),
})

export default validations;