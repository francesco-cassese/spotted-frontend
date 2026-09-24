# Spotted — Frontend

Sito pubblico di **Spotted**, una directory di piccole attività locali (negozi, artigiani, locali, servizi) raccontate con la loro storia, la categoria e i tratti che le rendono speciali.

È una single page application in **React** che legge i dati dall'API REST del backend Laravel ([`spotted`](https://github.com/francesco-cassese/spotted)). Questo repository contiene solo la parte pubblica: per creare e modificare i contenuti serve il backoffice del backend.

Il progetto è l'esame finale del corso Full Stack.

## Funzionalità

- **Homepage** con un banner di presentazione e l'elenco di tutte le attività
- **Filtro per categoria**: cliccando una categoria la lista mostra solo le attività di quella categoria; "Tutte" toglie il filtro
- **Pagina di dettaglio** di ogni attività, raggiungibile da un indirizzo leggibile (`/businesses/panificio-il-grano-antico`): foto, categoria, tratti distintivi, storia, indirizzo e contatto telefonico
- **Messaggi di caricamento e di errore** per ogni richiesta all'API (anche se il backend è spento o lo slug non esiste)
- Layout adattabile allo schermo, con la griglia di Bootstrap

## Stack tecnologico

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8 per sviluppo e build
- [React Router](https://reactrouter.com/) 7 (`react-router-dom`) per le pagine
- [Bootstrap](https://getbootstrap.com/) 5.3 e Bootstrap Icons
- **CSS Modules** per gli stili specifici di ogni componente
- ESLint con le regole per gli hook di React

## Requisiti

- Node.js `^20.19` oppure `22.12` o superiore (richiesto da Vite 8)
- [pnpm](https://pnpm.io/)
- Il **backend** [`spotted`](https://github.com/francesco-cassese/spotted) installato e in esecuzione su `http://127.0.0.1:8000`, con il database popolato (`php artisan migrate --seed`)

## Installazione e avvio

1. Installare le dipendenze:

   ```bash
   pnpm install
   ```

2. Avviare il backend Laravel (nell'altro repository):

   ```bash
   php artisan serve
   ```

3. Avviare il frontend:

   ```bash
   pnpm dev
   ```

4. Aprire **http://localhost:5173**.

> Il frontend va aperto proprio da `http://localhost:5173`: è l'unica origine che il backend accetta (CORS). Aprendolo da un altro indirizzo o porta le richieste all'API vengono bloccate dal browser.

## Configurazione

L'indirizzo dell'API è nel file `.env`, già presente nel repository:

```dotenv
VITE_API_URL=http://127.0.0.1:8000/api
```

- Vite espone al codice solo le variabili che iniziano con `VITE_`; il valore viene letto in `src/utils/db_utils.js` con `import.meta.env.VITE_API_URL`.
- Le variabili sono lette all'avvio: dopo aver modificato il `.env` riavvia `pnpm dev`.
- Il valore contiene solo un indirizzo, mai dati riservati: finisce nel codice pubblico della build.
- Si usa `127.0.0.1` al posto di `localhost` perché su alcuni computer Windows `localhost` aggiunge un ritardo a ogni nuova connessione.

## Comandi disponibili

| Comando | Cosa fa |
|---|---|
| `pnpm dev` | Avvia il server di sviluppo su `http://localhost:5173` |
| `pnpm build` | Crea la versione ottimizzata in `dist/` |
| `pnpm preview` | Serve la build in locale (porta 4173, non tra le origini CORS del backend) |
| `pnpm lint` | Controlla il codice con ESLint |

## Pagine

| Percorso | Pagina |
|---|---|
| `/` | Homepage: banner, filtro per categoria ed elenco delle attività |
| `/businesses/:slug` | Dettaglio di un'attività |

## API utilizzata

| Endpoint | Usato per |
|---|---|
| `GET /api/businesses` | Elenco delle attività (con la loro categoria) |
| `GET /api/businesses/{slug}` | Pagina di dettaglio (con categoria e tratti distintivi) |
| `GET /api/categories` | Pillole del filtro per categoria |

Tutte le risposte hanno la forma `{ "success": true, "data": … }`; le richieste passano da `src/utils/db_utils.js`, che lancia un errore se la risposta non è valida.

## Struttura del progetto

```
src/
  main.jsx               punto d'ingresso: monta React e il router
  App.jsx                rotte dell'applicazione e intestazione
  pages/
    Homepage.jsx         banner e lista
    BusinessDetail.jsx   pagina di dettaglio
  components/
    BusinessesList.jsx   elenco, filtro e stati di caricamento/errore
    CategoryFilter.jsx   pillole delle categorie
    CardBusiness.jsx     card di un'attività
    Header.jsx           logo
    LoadingMessage.jsx   messaggio di caricamento
    ErrorMessage.jsx     messaggio di errore
  hooks/
    useFetch.js          hook per leggere i dati dall'API
  utils/
    db_utils.js          funzione che chiama l'API
  assets/                immagini importate dal codice
  index.css              variabili di colore e stili globali
public/                  logo e favicon
```

Ogni componente ha il suo file `.module.css` accanto.

## Scelte progettuali

- **Un hook per i dati**: `useFetch` restituisce `data`, `loading` ed `error`, così ogni componente mostra il messaggio giusto senza ripetere la logica.
- **Stato nel genitore**: la categoria scelta sta in `BusinessesList`, che filtra la lista già scaricata; `CategoryFilter` si limita a mostrare i bottoni e avvisare il padre.
- **Slug negli indirizzi** invece degli id, perché sono leggibili e sono ciò che cerca l'API.
- **Nessuna nuova richiesta quando si filtra**: le attività sono già state scaricate tutte.
- **Componenti di presentazione** senza stato né richieste (`CardBusiness`, `LoadingMessage`, `ErrorMessage`).
