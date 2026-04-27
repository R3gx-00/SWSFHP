from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup as bs
from extract_data import scrap
import pandas as pd

options = Options()
options.debugger_address = "127.0.0.1:9222"

driver = webdriver.Chrome(options=options)

tabs = driver.window_handles

#otwarcie bazy danych (pliku csv)

df = pd.read_csv("database.csv") # headers: ID, PRICE, SIZE, ROOMS, DATE, OWNER, LOCATION

#gather rows of data
data_rows = []

for tab in tabs:
    driver.switch_to.window(tab)
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
df = pd.concat([df, new_df], ignore_index=True)
df = df.drop_duplicates(subset="ID", keep="first")
print(df)

