# celem tego pliku jest utworzenie pliku csv, do ktorego beda trafiac dane, plik ten jest wykonywalny jedynie raz
# cechy danych ktore bedziemy zapisywac to: id, cena, metraz, data_wystawienia, biuro/, długość i szerokość geograficzną
import pandas as pd

init_database = pd.DataFrame(columns=["ID","PRICE","SIZE","DATE","OWNER"])
init_database.to_csv("database.csv")

created_database = pd.read_csv("database.csv")
print(created_database)
