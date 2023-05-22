 const errors = {}
import useValidators from './validators'
export default function useFormValidation() {
    const { isEmpty, minLength, isEmail } = useValidators();
    const validateNameField = (fieldName, fieldValue) => {
        errors[fieldName] = isEmpty(fieldName, fieldValue)
    }
    const validateSelectField = (fieldName, fieldValue) => {
      errors[fieldName] = isEmpty(fieldName, fieldValue)
  }
    const validateEmailField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
    }
    return { errors, validateNameField, validateEmailField,validateSelectField }
}
