import { browser, by, element } from 'protractor';
import { PageObjectBase } from './base.po';

export class AppPage extends PageObjectBase {
  constructor() {
    super('app-root', '/'); // page tag and page path parameters for the Base class
  }

  // navigateTo() { // Is covered by the base class's load() method
  //   return browser.get('/');
  // }

  // getPageTitle() { // Is covered by the base class's getTitle() method
  //   return element(by.css('ion-title')).getText();
  // }

}
