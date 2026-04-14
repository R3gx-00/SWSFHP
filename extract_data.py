# celem tego pliku jest wywoływanie go dla otwartej sesji w przeglądarce dla każdej strony
# ten plik ma za zadanie zczytywać dane z kodu html strony i dodawać go do ogólnego pliku z całą informacją
from bs4 import BeautifulSoup as bs

def scrap(soup):
    #ID
    id = soup.find("div", class_="css-j7qwjs e1uonnrl1").p.text.split()[1]

    #PRICE
    cena = soup.find("strong", class_="css-1o51x5a elm6lnc1").text.split()
    cena = cena[0]+cena[1]
    cena = int(cena)

    #może nie być
    try:
        czynsz = soup.find("div", class_="css-1mwdge5 elm6lnc5").text.split()[2]
        czynsz = int(czynsz)
    except:
        czynsz = 0

    cena = cena+czynsz

    #tą tablice ma konwertować na słownik, bo dokładnie w takim stylu jest on stworzony
    info_table = soup.find_all("div", class_="css-1okys8k e178zspo0")
    for i in range(len(info_table)):
        info_table[i] = info_table[i].text

    pokoje = info_table[3]
    metraz = info_table[1].split()[0]

    #data
    date = soup.find("p", class_="FxCMd hq-7O CgHmQ css-1xm0deg eylxo5j5").text.split()[2]

    #owner
    owner = info_table[17]

    #coordinates (may not work)
    #oprócz pinezki może też być zaznaczony obszar, trzeba rozważyć też tą opcję

    # marker = soup.find("gmp-advanced-marker")["position"].split(",")

    print(id,cena,metraz,pokoje,date,owner)


with open("sites/not_added/site2.html","r", encoding="utf-8") as f:
    html= f.read()

