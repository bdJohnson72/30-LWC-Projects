/**
 * Created by Brooks Johnson on 11/11/2021.
 */

import {LightningElement} from 'lwc';
import Boom from '@salesforce/resourceUrl/sounds_boom';
import Clap from '@salesforce/resourceUrl/sounds_clap';
import Hihat from '@salesforce/resourceUrl/sounds_hihat';
import Kick from '@salesforce/resourceUrl/sounds_kick';
import Openhat from '@salesforce/resourceUrl/sounds_openhat'
import Ride from '@salesforce/resourceUrl/sounds_ride';
import Snare from '@salesforce/resourceUrl/sounds_snare';
import Tink from '@salesforce/resourceUrl/sounds_tink';
import Tom from '@salesforce/resourceUrl/sounds_tom'
export default class Drumkit extends LightningElement {
    wavMap = new Map();

    constructor() {
        super();
        this.wavMap.set(65, Clap);
        this.wavMap.set(83, Hihat);
        this.wavMap.set(68, Kick);
        this.wavMap.set(70, Openhat);
        this.wavMap.set(71, Boom);
        this.wavMap.set(72, Ride);
        this.wavMap.set(74, Snare);
        this.wavMap.set(75, Tom);
        this.wavMap.set(76, Tink)
    }

    connectedCallback() {
        window.addEventListener('keypress', (event) => {
            this.playSound(event)
        })
    }

    disconnectedCallback() {
        window.removeEventListener("keypress", (event) => {
            this.playSound(event) })
    }

    playSound(event) {
        const sound = new Audio(this.wavMap.get(event.keyCode));
        if (!sound){
            return;
        }
        const element = this.template.querySelector(`[data-key="${event.keyCode}"]`);
        sound.currentTime = 0;
        sound.play();
        element.classList.add('playing')
    }

    removeTransition(event){
       if (event.propertyName !== 'transform'){
           return;
       }
        event.target.classList.remove('playing');
    }
}