// https://ionicframework.com/docs/angular/testing

// https://www.protractortest.org/#/tutorial

// https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-an-introduction/


import { TabsPage } from '../po/tabs.po';

describe('tabs', () => {
    let tabs: TabsPage;

    beforeEach(() => {
        tabs = new TabsPage();
    });

    it("the Tab 1 tab is displayed by default", () => {
        tabs.load();
        expect(tabs.getSelectedLabelText()).toContain("Tab 1");
    });

    it("the user can navigate to the Tab 2 tab", async () => {
        await tabs.clickTab("tab2");

        tabs.sleep();

        expect(tabs.getSelectedLabelText()).toContain("Tab 2");
    });

    it("the user can navigate to the Tab 3 tab", async () => {
        await tabs.clickTab("tab3");

        tabs.sleep();

        expect(tabs.getSelectedLabelText()).toContain("Tab 3");
    });

    it("the user can navigate to the Tab 1 tab", async () => {
        await tabs.clickTab("tab1");

        tabs.sleep();

        expect(tabs.getSelectedLabelText()).toContain("Tab 1");
    });
});