# 📝 Guida alla gestione dei Contenuti

Il sito utilizza **Keystatic**, un pannello di amministrazione visuale che ti permette di modificare i contenuti in modo semplice e sicuro, senza dover toccare il codice o i file JSON.

## 🚀 Accesso al Pannello

### In Locale (durante lo sviluppo)
1. Assicurati che il sito sia avviato (`npm run dev` o `pnpm dev`).
2. Vai su: **[http://localhost:3002/keystatic](http://localhost:3002/keystatic)**
3. Le modifiche vengono salvate direttamente nel tuo file system.

### In Produzione (sito online)
1. Vai all'indirizzo del tuo sito aggiungendo `/keystatic` alla fine (es: `https://dilettarobuschi.com/keystatic`).
2. Ti verrà chiesto di fare il login con il tuo account **GitHub**.
3. Quando modifichi qualcosa:
   - Keystatic crea automaticamente un "commit" nel repository GitHub.
   - Questo "commit" avvia una nuova procedura di **deploy** automatico su Vercel.
   - Dopo circa 1-2 minuti, le modifiche saranno visibili online.

---

## 📂 Cosa puoi modificare

Dalla dashboard principale troverai diverse sezioni chiamate "Collections" e "Singletons":

### 1. Home Page
- **Home (Italian)**: Modifica titolo, sottotitolo e immagine hero della versione italiana.
- **Home (English)**: Modifica i contenuti della versione inglese.

### 2. Chi Sono / About
- **About (Italian)**: Modifica testo e immagine della pagina "Chi Sono".
- **About (English)**: Modifica testo e immagine della pagina "About".

### 3. Lavori / Works
Questa è una "Collection", ovvero una lista di elementi. Qui puoi gestire il portfolio dei lavori.
- **Aggiungi nuovo**: Clicca su "Add" per creare una nuova scheda lavoro.
- **Modifica**: Clicca sul titolo di un lavoro esistente per modificarlo.

Campi disponibili per ogni lavoro:
- **Titolo**: Il nome del lavoro (genera automaticamente l'URL).
- **Thumbnail**: L'immagine di copertina.
- **Descrizione**: Testo descrittivo (supporta formattazione ricca come grassetto, corsivo, link).
- **Dettagli**: Durata, Luogo/Evento.
- **Crediti**: Lista dei ruoli e nomi (es. Regia: Diletta Robuschi). Puoi aggiungere quanti ne vuoi.
- **Ensembles**: Lista delle compagnie coinvolte.
- **Links**: Link esterni (es. Vimeo, YouTube).
- **Media**: Galleria di immagini aggiuntive del progetto.

## 💾 Salvataggio

Quando hai finito le modifiche:
1. Clicca sul pulsante **Save** (o "Create") in alto a destra.
2. In **Produzione**, questo avvierà il processo di aggiornamento del sito.

---
_In caso di problemi tecnici o se il pannello non dovesse caricarsi, contatta il tuo sviluppatore._
