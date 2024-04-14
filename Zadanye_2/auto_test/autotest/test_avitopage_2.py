def test_example_site_intercept(page):
    page.route("https://www.avito.st/remote-modules/eco-impact/75d4074/482.39a58132072a83276190.js",
               lambda route: route.fulfill(path="JS_files/tc_2.js"))

    page.goto("https://www.avito.ru/avito-care/eco-impact")

    page.wait_for_timeout(30 * 1000)
    page.evaluate('(scrollTo) => { window.scrollBy(0, scrollTo); }', 850)
    page.wait_for_timeout(30 * 1000)
    page.wait_for_selector('.desktop-impact-items-F7T6E')

    element = page.query_selector('.desktop-impact-items-F7T6E')

    bounding_box = element.bounding_box()

    if bounding_box:
        page.screenshot(
            path='output/tc_screen2.png',
            clip={
                'x': bounding_box['x'],
                'y': bounding_box['y'],
                'width': bounding_box['width'],
                'height': bounding_box['height']
            }
        )


