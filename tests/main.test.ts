import test from "../Constants/Fixtures.ts";
import { frameConstants } from "../Constants/FrameConstants.ts";


test("window handling", async ({page , element}) => {
    
    await page.goto("https://www.google.com/")

    const ele = await element.switchToWindow("//a[normalize-space()='About']")

    console.log(ele?.url())


    
})