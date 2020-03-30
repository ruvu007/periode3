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
##
### XMLHttpRequest

[MDN XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).  
[W3SCHOOLS XMLHttpRequest](https://www.w3schools.com/js/js_ajax_http.asp).  
---   


## Opdracht

- Maak in je project een div aan met een id 'json'
- Maak een functie aan met de naam createJSON, geen argumenten nodig

- In de functie zet je een variabele die verwijst naar het json id van je HTML bestand.   
- Maak een <a> tag met createElement aan
- href wordt data
- download wordt de naam van het bestand (json.json)
- geef een tekst voor de link 
- Voeg het element toe aan je id (appendChild)
 
Deze functie doet nog niets omdat we geen data hebben. De volgende regel zal de gegevens aan de data toevoegen:    
`    let applicationData  = "application/json;charset=utf-8,"
        + encodeURIComponent(JSON.stringify(objectArray));`
