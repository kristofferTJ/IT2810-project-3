# Introduksjon


# Hvordan kjøre prosjektet

## Klone prosjektet

Åpne et tomt prosjekt i programmet du ønsker å kjøre prosjektet fra (F.eks. Visual Studio Code)

Åpne en terminal i denne mappen og skriv:

    git clone https://gitlab.stud.idi.ntnu.no/it2810-h20/team-41/prosjekt-3.git
    cd prosjekt-3



Nå må du kjøre både frontend og backend i hver sin terminal for å starte prosjektet

NB: For å kjøre prosjektet må du være koblet til NTNU nettet (evt. via vpn)    

## Kjøre Frontend

    cd client
    npm install
    npm start

## Kjøre Backend

    cd backend
    npm install
    nodemon server

Du kan nå åpne prosjektet på:

http://localhost:3000/

# Funksjonalitet

# Frontend/design

# Teknologier

## Stack

## React

## Redux

Vi valgte å bruke Redux til state management, selv om MobX kanskje hadde passet bedre for et lite prosjekt som dette. Dette er fordi Redux er laget for å 
håndtere state for større prosjekter, og brukes dermed mer av større selskaper. Redux virket derfor som mer relevant å lære for oss og det vi ville få størst 
utbytte av å kunne i ettertid. I tillegg har Redux bedre dokumentasjon, og det gjør det enklere å finne løsninger på problemer underveis. Vi valgte å strukturere 
Redux filene våre ved bruk av "ducks" pattern, som innebærer å samle all logikken til en state i en “duck”. Denne inneholder da alt av types, actions, reducers og 
action creators for denne staten. Oversikt over “ducks” brukt i prosjektet:

**commentDuck:** Styrer logikken for å lagre en ny kommentar i databasen.

**counterDuck:** Gir ut et tall på hvor mange restauranter i databasen som passer med søk og filter, for å hele tiden har riktig antall sider med restauranter å bla mellom.

**cuisineFilterDuck:** Har kontroll på hvilke cuisiner som brukeren har krysset av for at skal vises.

**priceFilterDuck:** Har kontroll på hvilke priskategorier som brukeren har krysset av for at skal vises.

**regionFilterDuck:** Har kontroll på hvilke regioner som brukeren har krysset av for at skal vises.

**restaurantDuck:** Styrer all logikken for henting av restauranter fra databasen basert på de ulike valgene brukeren kan gjøre. (Filter, søk, sortering, bla mellom sider for å få opp flere resultater)

**searchDuck:** Holder kontroll på hva som er skrevet inn i søkefeltet.

**skipDuck:** Holder kontroll på hvor mange restauranter som skal skippes i backend etter hvilken Pagination knapp brukeren trykker på.

**sortingDuck:** Holder kontroll på hvilken parameter brukeren har valgt å sortere resultatene på, default er navn.




## Backend

## Database

# Testing

## Systematisk enhetstesting

**Hvordan kjøre testene**

## Automatisert end-to-end testing

Vi har valgt å bruke Cypress til end-to-end testene, siden det ble anbefalt. Vi har 4 end-to-end tester som tester ulik funksjonalitet på nettsiden. 
Vi har en som tester filtreringen vår ved å trykke på et filter og sjekke at de resultatene som dukker opp på nettsiden er riktig. Vi har en test for søking som skriver 
inn et restaurant navn i søkefeltet og sjekker at det kun kommer opp ett resultat på nettsiden, og at dette resultatet stemmer med navnet vi søkte på. Vi har en test 
som tester sorteringen av resultatene ved å trykke på en ny sortering og sjekke at restaurantene som dukker opp er riktig og i riktig rekkefølge. I tillegg har vi en 
end-to-end test som tester hovedsiden vår, mainPage. Denne sjekker at alle komponentene som skal ligge på denne siden er synlige, og at det kommer opp riktig antall 
knapper for sortering og filtrering med riktig navn. 


![End-to-End tester](./end-to-end-testing.PNG "End-to-End testing"")



**Hvordan kjøre testene**

For å kjøre testene må du først kjøre både backend og frontend. Hvordan du gjør dette er beskrevet lengre opp.

Deretter skriver du i terminalen: 

    cd client
    npm run cypress

Trykk på “Run all specs” i vinduet som dukker opp


# Inspirasjon (acknowledgement)

