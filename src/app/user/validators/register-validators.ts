import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {

    //static is good for creating a utility method
    static match(controlName: string, matchingControlName: string) : ValidatorFn {

        return(group: AbstractControl) : ValidationErrors | null => {
            const control = group.get(controlName)
            const matchingControl = group.get(matchingControlName)
    
            if(!control || !matchingControl) {
                console.error('Form controls can not be found in the form group.')
                return { controlNotFound: false }
            }
    
            const error = control.value === matchingControl.value ?
                null:
                {
                    notMatch: true
                }

            matchingControl.setErrors(error)

            return error
        }
    }

}
