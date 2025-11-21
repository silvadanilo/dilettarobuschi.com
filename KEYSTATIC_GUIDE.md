# Guida a Keystatic CMS

Hai ora a disposizione un CMS (Content Management System) integrato direttamente nel tuo sito!
Questo ti permette di modificare testi, immagini e lavori senza toccare il codice.

## 🏠 Come usarlo in Locale (sul tuo computer)

1. Assicurati che il server di sviluppo sia attivo (`npm run dev`).
2. Vai su: [http://localhost:3000/keystatic](http://localhost:3000/keystatic)
3. Vedrai una dashboard dove puoi modificare:
   - **About (Italian)**: La biografia in italiano.
   - **About (English)**: La biografia in inglese.
   - **Works**: Tutti i tuoi lavori. Puoi aggiungerne di nuovi o modificare quelli esistenti.

Le modifiche fatte qui vengono salvate istantaneamente nei file del tuo progetto (nella cartella `src/content`).

## 🚀 Come usarlo su Vercel (Online)

Per poter modificare il sito direttamente da Vercel (online), devi collegare Keystatic al tuo repository GitHub.

### 1. Crea una GitHub App
Per permettere a Keystatic di scrivere sul tuo repository, devi creare una GitHub App (è gratis e veloce).

1. Vai su [GitHub Developer Settings > GitHub Apps](https://github.com/settings/apps).
2. Clicca **New GitHub App**.
3. Compila i campi:
   - **GitHub App Name**: `Diletta Robuschi CMS` (o simile).
   - **Homepage URL**: `https://dilettarobuschi.com` (il tuo dominio Vercel).
   - **Callback URL**: `https://dilettarobuschi.com/api/keystatic/github/oauth/callback` (Sostituisci `dilettarobuschi.com` con il tuo dominio reale se diverso).
   - **Webhook URL**: Deseleziona "Active" (non serve).
4. **Permissions**:
   - Vai su **Repository permissions**.
   - **Contents**: Seleziona `Read and write`.
   - **Metadata**: `Read-only` (default).
5. Clicca **Create GitHub App**.

### 2. Ottieni le Chiavi
Dopo aver creato l'app, vedrai una pagina con i dettagli.
1. Trova il **Client ID**. Copialo.
2. Clicca su **Generate a new client secret**. Copia il **Client Secret**.

### 3. Installa l'App
1. Nella barra laterale sinistra, clicca **Install App**.
2. Clicca **Install** accanto al tuo account.
3. Seleziona il repository `dilettarobuschi.com`.
4. Clicca **Install**.

### 4. Configura Vercel
1. Vai sul tuo progetto su Vercel.
2. Vai su **Settings > Environment Variables**.
3. Aggiungi queste due variabili:
   - `KEYSTATIC_GITHUB_CLIENT_ID`: Incolla il Client ID copiato prima.
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`: Incolla il Client Secret copiato prima.
   - `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`: Incolla il nome della tua app (es. `diletta-robuschi-cms` - lo trovi nell'URL della pagina dell'app su GitHub).
4. Rideploya il sito (o aspetta il prossimo push).

Ora, andando su `tuosito.com/keystatic`, potrai fare il login con GitHub e modificare i contenuti direttamente online!
