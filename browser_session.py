from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup as bs
from extract_data import scrap

options = Options()
options.debugger_address = "127.0.0.1:9222"

driver = webdriver.Chrome(options=options)

tabs = driver.window_handles

for tab in tabs:
    driver.switch_to.window(tab)
    soup = bs(driver.page_source, "lxml")
    # tutaj zostanie wykonywany skrypt pobierający dane
    scrap(soup)
