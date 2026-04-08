# ten plik ma za zadanie zczytywać dane z kodu html strony i dodawać go do ogólnego pliku z całą informacją
from bs4 import BeautifulSoup as bs

with open("sites/ts1.html","r", encoding="utf-8") as f:
    html= f.read()

soup = bs(html, "lxml")
#odnajdywanie informacji w plikach

cena = soup.find("strong", class_="css-1o51x5a elm6lnc1").text

#może nie być
czynsz = soup.find("div", class_="css-1mwdge5 elm6lnc5").text

info_table = soup.find_all("div", class_="css-1okys8k e178zspo0")
for i in range(len(info_table)):
    info_table[i] = info_table[i].text

print(info_table)
metraz = info_table[1]

print(metraz)


