/**
 * Created by Brooks Johnson on 11/12/2021.
 */

import {createElement} from 'lwc';
import Drumkit from 'c/drumkit'
import jest from "jest";

describe('c-drumkit', ()=> {
    beforeEach(() => {
        const element = createElement('c-drumkit', {
            is: Drumkit
        });
        document.body.appendChild(element)
    })
    test('attach event listener to window', ()=> {
        const drumkit = document.querySelector('c-drumkit');
        const element = drumkit.shadowRoot.querySelector('div[data-key="65"]');
        expect(element).not.toBeNull();
        const playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play')
            .mockImplementation( ()=>{})
       const keyPressEvent = new KeyboardEvent('keypress', {
           'keyCode': 65
       })
        window.dispatchEvent(keyPressEvent);
       return Promise.resolve().then( () => {
           const element = drumkit.shadowRoot.querySelector('div[data-key="65"]');
           console.log(element.innerHTML)
           expect(element.classList).toContain('playing');
       })
    })
    test('correct time', () => {
        const NOW = '2019-05-03T08:00:00.000Z';
        const mockDateNow = jest
            .spyOn(global.Date, 'now')
            .mockImplementation(() => new Date(NOW).getTime());
    })

})
