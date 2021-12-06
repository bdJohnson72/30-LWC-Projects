/**
 * Created by Brooks Johnson on 12/6/2021.
 */

/**
 * Created by Brooks Johnson on 12/5/2021.
 */

import {LightningElement} from 'lwc';

export default class CustomRadioButtons extends LightningElement {

    invalid;
    screen1 = true;
    screen2;

    handleClick(event){
        const radioArray = Array.from(this.template.querySelectorAll('input'));
        let valid = radioArray.filter((input) => input.checked);
        if (valid.length === 0){
            radioArray[0].classList.add('invalid');
            this.invalid = true;
        }else {
            this.screen1 = false;
            this.screen2 = true;
        }
    }

    handleRadioClick(event){
        console.log(event.target)
        const radioArray = Array.from(this.template.querySelectorAll('input'));
        radioArray.forEach(radio => radio.classList.remove('invalid'))
        this.invalid = false;
    }
}