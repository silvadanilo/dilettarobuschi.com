# 📝 Come Modificare i Contenuti del Sito

Questa guida spiega come modificare i contenuti del sito senza dover programmare.

## Pagina About / Chi Sono

I contenuti della pagina "Chi sono" si trovano in questi file:

- **Italiano**: `src/content/about.it.md`
- **Inglese**: `src/content/about.en.md`

### Come modificare il testo

1. Apri il file corrispondente alla lingua che vuoi modificare
2. Modifica il testo usando la **sintassi Markdown**
3. Salva il file
4. Le modifiche appariranno automaticamente sul sito!

### Sintassi Markdown - Guida Rapida

```markdown
# Titolo Principale (H1)
## Titolo Secondario (H2)
### Titolo Terziario (H3)

**Testo in grassetto**
*Testo in corsivo*

- Elemento lista 1
- Elemento lista 2
- Elemento lista 3

> Citazione in blocco
> Continua la citazione

Un normale paragrafo di testo.
```

### Come cambiare l'immagine

All'inizio del file troverai questa sezione:

```markdown
---
image: "https://files.supersite.aruba.it/media/..."
---
```

Per cambiare l'immagine:
1. Carica la nuova immagine sul tuo hosting
2. Copia l'URL completo della nuova immagine
3. Sostituisci l'URL tra le virgolette dopo `image:`
4. Salva il file

## Pagina Lavori / Works

I dati dei lavori si trovano in:
- `src/data/works.json`

Questo è un file JSON strutturato. Ogni lavoro ha questa struttura:

```json
{
  "id": "1",
  "title": "Titolo del lavoro",
  "slug": "titolo-del-lavoro",
  "thumbnail": "URL dell'immagine di anteprima",
  "description": "Descrizione del lavoro",
  "duration": "Durata (opzionale)",
  "venue": {
    "event": "Nome evento",
    "name": "Nome venue (opzionale)",
    "location": "Città, Paese (opzionale)"
  },
  "credits": [
    {
      "role": "Ruolo",
      "name": "Nome Cognome"
    }
  ],
  "ensembles": [
    "Nome ensemble 1",
    "Nome ensemble 2"
  ],
  "media": [
    "URL immagine 1",
    "URL immagine 2"
  ]
}
```

### Aggiungere un nuovo lavoro

1. Copia un lavoro esistente
2. Modifica tutti i campi con i nuovi dati
3. Assicurati che lo `slug` sia unico e in formato URL (es: `mio-nuovo-lavoro`)
4. Salva il file

## Supporto Markdown

Il Markdown supporta:
- ✅ Titoli (H1, H2, H3)
- ✅ Grassetto e corsivo
- ✅ Liste puntate
- ✅ Citazioni
- ✅ Paragrafi
- ✅ Link: `[testo del link](https://url.com)`

## Bisogno di Aiuto?

Se hai bisogno di assistenza per modificare i contenuti, contatta il tuo sviluppatore web.
