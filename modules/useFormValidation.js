import { ref } from 'vue'
const errors = ref({});
import useValidators from './validators'
export default function useFormValidation() {
    const { isEmpty, minLength, isEmail } = useValidators();
    const validateNameField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 4)
    }
    const validateEmailField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
    }
    const validateSelectField = (fieldName, fieldValue) => {
        errors[fieldName] = isEmpty(fieldName, fieldValue)
    }
    return { errors, validateNameField, validateEmailField,validateSelectField}
}
