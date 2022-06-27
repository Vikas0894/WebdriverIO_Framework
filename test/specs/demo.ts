import { Given, When, Then } from "@cucumber/cucumber";



Given(/^Google page is opened$/, async function () {



    console.log('Before opening the browser...')

    await browser.url("https://mvnrepository.com/")

    await browser.pause(10000)

    console.log('After opening the browser...')

})



When(/^Search with <.*>$/, async function (SearchItem) {



    console.log('>> searchItem: ${SearchItem}');

    let ele = await $('[id=query]')

    await ele.setValue(SearchItem)

    await browser.keys("Enter")

})



Then(/^Click on the first search result$/, async function () {
    let ele = await $('<h3>')

    ele.click()
});