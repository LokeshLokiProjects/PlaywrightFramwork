import { Locator, Page } from "@playwright/test";
export default class ElementUtils {


    constructor(public page: Page) {

    }


    public async delayinSeconds(time: number) {

        let milliSeconds = time * 1000
        return await this.page.waitForTimeout(milliSeconds)
    }

    public async switchToWindow(clickAblelocator: string) {

        if (clickAblelocator.length < 2) {
            const [tabs] = await Promise.all([

                this.page.waitForEvent('popup'),
                this.page.click(clickAblelocator[0])
            ])

            return tabs

        }

}


}