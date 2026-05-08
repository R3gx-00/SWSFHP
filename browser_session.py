from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup as bs
from selenium.webdriver.support.ui import WebDriverWait
import time
from extract_data import scrap
import pandas as pd

options = Options()
options.debugger_address = "127.0.0.1:9222"

driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 10)

tabs = driver.window_handles
#otwarcie bazy danych (pliku csv)

df = pd.read_csv("database.csv") #headers: ID, PRICE, SIZE, ROOMS, DATE, OWNER, LOCATION

#gather rows of data
data_rows = []

for tab in tabs:
    driver.switch_to.window(tab)
    #the site needs to load up, thats why we need to scroll down and wait a second, gpt

    #we choose which element we will scroll to (the map)
    element = driver.find_element(By.CLASS_NAME, "css-nkt06p.e1d73xdh0")
    driver.execute_script("arguments[0].scrollIntoView();", element)
    #wait until javascript finishes, gpt
    #find another way to wait
    time.sleep(5)

    soup = bs(driver.page_source, "lxml")

    data = scrap(soup) #otrzymane dane to id,cena,metraz,pokoje,data,wlasciciel,lat,lon
    data_rows.append({
        "ID":data[0],
        "PRICE":data[1],
        "SIZE":data[2], 
        "ROOMS":data[3], 
        "DATE":data[4], 
        "OWNER":data[5], 
        "LAT":data[6], 
        "LON":data[7]})

new_df = pd.DataFrame(data_rows)
print(new_df)
df = pd.concat([df, new_df], ignore_index=True)
df = df.drop_duplicates(subset="ID", keep="first")

#save to the file
df.to_csv("database.csv", index=False)


