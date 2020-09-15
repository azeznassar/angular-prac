import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

//Each Component/Page should have it's own page object which inherits from the base in order to make the specs cleaner
//More info on the Page object e2e testing pattern : https://ionicframework.com/docs/angular/testing

export class TabsPage extends PageObjectBase {
    constructor() {
        super('app-tabs', '/'); // page tag and page path parameters for the Base class
    }
    
    getSelectedLabelText() {
        return element(by.css(".tab-selected ion-label")).getText();
    }

    clickTab(tab) {
        return element(by.css(`[tab=${tab}]`)).click()
    }

    sleep() {
        browser.driver.sleep(500);
    }

    waitForError() {
        browser.wait(
            ExpectedConditions.presenceOf(element(by.css('.error'))),
            3000
        );
    }

    getErrorMessage() {
        return element(by.css('.error')).getText();
    }

    enterEMail(email: string) {
        this.enterInputText('#email-input', email);
    }

    enterPassword(password: string) {
        this.enterInputText('#password-input', password);
    }

    clickSignIn() {
        this.clickButton('#signin-button');
    }
}