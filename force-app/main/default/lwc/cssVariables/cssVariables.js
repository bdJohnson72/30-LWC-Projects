/**
 * Created by bjohnson on 12/13/2021.
 */

import { LightningElement } from "lwc";
import { loadStyle } from 'lightning/platformResourceLoader';
import styles from '@salesforce/resourceUrl/css_vars'

export default class CssVariables extends LightningElement {
 style = ''
  connectedCallback() {
    loadStyle(this, styles)
      .catch((error) => console.log(error))
  }

  handleInputChange(event) {
    console.log('change');
    console.log(event.target.name);
    console.log(event.target.value);
    const suffix = event.dataset || '';
    console.log(suffix);
    const image = this.template.querySelector('img');
    /* image.style.setProperty(`--${event.target.name}`, event.target.value + suffix);*/
    const styleString = `--${event.target.name}: ${event.target.value}} + ${suffix}}`
    this.style = styleString
  }

  get styles(){
   return this.style;
  }



}