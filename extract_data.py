# celem tego pliku jest wywoływanie go dla otwartej sesji w przeglądarce dla każdej strony
# ten plik ma za zadanie zczytywać dane z kodu html strony i dodawać go do ogólnego pliku z całą informacją
from bs4 import BeautifulSoup as bs

def scrap(soup):
    #ID
    id = soup.find("div", class_="css-j7qwjs e1uonnrl1").p.text.split()[1]

    #PRICE
    cena = soup.find("strong", class_="css-1o51x5a").text.split()
    cena.pop()
    cena = ''.join(cena)
    print(cena)
    cena = int(cena)

    #CZYNSZ może go nie być
    try:
        czynsz = soup.find("div", class_="css-1mwdge5 elm6lnc5").text.split()[2]
        czynsz = int(czynsz)
    except:
        czynsz = 0

    cena = cena+czynsz

    #data
    date = soup.find("p", class_="FxCMd hq-7O CgHmQ css-1xm0deg eylxo5j5").text.split()[2]
    
    #obsługa tablicy z informacjami
    info_table = soup.find_all("div", class_="css-1okys8k e178zspo0")
    for i in range(len(info_table)):
        info_table[i] = info_table[i].text

    #aby odnaleźć informację w tej tablicy szukamy słowa kluczowego i wybieramy kolejny element,
    #jeśli kolejny element posiada ":" to nie ma tej informacji
    #słowa kluczowe w tablicy:
    #Powierzchnia: Liczba pokoi: Ogrzewanie: Piętro: Stan wykończenia: Dostępne od: Czynsz: Kaucja: Typ ogłoszeniodawcy:
    #Informacje dodatkowe:

    pokoje_index = info_table.index("Liczba pokoi:")
    metraz_index = info_table.index("Powierzchnia:")
    owner_index = info_table.index("Typ ogłoszeniodawcy:")
    pokoje = info_table[pokoje_index+1]
    metraz = info_table[metraz_index+1].split()[0]
    owner = info_table[owner_index+1]

    #coordinates 
    # są dwie opcje pokazania lokalizacji: pinezka i obszar


    try:
        # koordynaty dla pinezki:
        location = soup.find("gmp-advanced-marker")["position"].split(",")
    except:
        # koordynaty dla obszaru
        perimiter = soup.find("div", class_="gm-style")
        link = perimiter.find("a")["href"].split("=")[1]
        location = link[:-2].split(',')


    return(id,cena,metraz,pokoje,date,owner,location[0],location[1])

