# LEERDOEL
## Maak een download link
## Gebruik van JSON
## Gebruik maken van localStorage
## XMLHttpRequest
---   


### Download link
[download link](https://www.w3schools.com/howto/howto_html_download_link.asp)

## JSON
### stringify
### parse
[MDN JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).  
 [W3SCHOOLS JSON](https://www.w3schools.com/js/js_json_stringify.asp).  
 
---   

## localStorage
### `localStorage.setItem('backgroundColor', 'red');`  
### `localStorage.getItem('backgroundColor');`
[MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).  
[W3SCHOOLS localStorage](https://www.w3schools.com/html/html5_webstorage.asp).  

---   
## Request
### XMLHttpRequest
[MDN XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).  
[W3SCHOOLS XMLHttpRequest](https://www.w3schools.com/js/js_ajax_http.asp).   

---   


## Opdracht 1.
- Maak in je project een div aan met een id 'json'
- Maak een functie aan met de naam createJSON, geen argumenten nodig

- In de functie zet je een variabele die verwijst naar het json id van je HTML bestand.   
- Maak een variabele (json) aan waarin je een <a> tag met createElement maakt
- Voeg aan deze variabel een data attribute, een download attribute en innerHTML met de tekst van je link aan toe
     
- download wordt de naam van het bestand (json.json)
- geef een tekst voor de link 
- Voeg het element toe aan je id (appendChild)
 
Deze functie doet nog niets omdat we geen data hebben. De volgende regels zal de gegevens aan je link toevoegen:    
`    let applicationData  = "application/json;charset=utf-8,"
        + encodeURIComponent(JSON.stringify(objectArray));`.    
        
`json.href      = 'data:' + applicationData;`.    


## Opdracht 2.
Om deze opdracht te maken lees de links die hierboven staan voor JSON, en localStorage
- Schrijf je gehele array naar de localStorage. Hiervoor gebruik je de JSON method om variabelen naar tekst te converteren. Gebruik als key een geschikte naam voor het item.
- Schrijf een object uit je array naar de localStorage. Gebruik als key de naam van de afbeelding.
- Maak een object aan met gegevens die jij met behulp van localStorage gaat gebruiken voor je project the Wall. Denk bijvoorbeeld aan gebruikersnamen, styling. Gebruik je fantasie.
- Schrijf dit object ook weg in de localStorage. Gebruik je hiervoor de stringify method of juist niet?


- Haal je gegevens op uit de localStorage en toon de inhoud op de console of in een alert.

## Opdracht 3.
- Maak een object aan waarin je een afbeeldingsnaam en het aantal likes opgeeft.

