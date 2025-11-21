# 🚀 Guida al Deploy su Vercel

## Prerequisiti
- Account GitHub (gratuito)
- Account Vercel (gratuito)

## 📋 Passo 1: Preparare il Repository GitHub

### Se NON hai ancora un repository GitHub:

1. Vai su [github.com](https://github.com) e crea un account (se non ce l'hai)
2. Crea un nuovo repository chiamato `dilettarobuschi.com`
3. Nel terminale, nella cartella del progetto, esegui:

```bash
git init
git add .
git commit -m "Initial commit - Diletta Robuschi website"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/dilettarobuschi.com.git
git push -u origin main
```

**Sostituisci `TUO-USERNAME` con il tuo username GitHub!**

### Se hai già un repository GitHub:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push
```

---

## 🌐 Passo 2: Deploy su Vercel

1. **Vai su [vercel.com](https://vercel.com)**
2. **Clicca "Sign Up"** e scegli "Continue with GitHub"
3. **Autorizza Vercel** ad accedere ai tuoi repository
4. **Clicca "Import Project"**
5. **Seleziona il repository** `dilettarobuschi.com`
6. **Vercel rileverà automaticamente** che è un progetto Next.js
7. **Clicca "Deploy"** - Fatto! ✨

Il deploy richiederà circa 2-3 minuti.

---

## 🔗 Passo 3: Configurare il Dominio Custom

### Dopo il primo deploy:

1. Vai nelle **Settings** del progetto su Vercel
2. Clicca su **Domains**
3. Aggiungi il dominio: `dilettarobuschi.com`
4. Vercel ti darà dei **record DNS** da configurare

### Configurare i DNS (su Aruba o altro provider):

Aggiungi questi record DNS nel pannello del tuo provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Nota:** I valori esatti ti verranno forniti da Vercel nel passaggio 3.

---

## ⚡ Deploy Automatici

Da ora in poi, **ogni volta che fai push su GitHub**, Vercel farà automaticamente il deploy della nuova versione!

```bash
# Dopo aver modificato i file:
git add .
git commit -m "Descrizione delle modifiche"
git push
```

---

## 🎯 URL del Sito

Dopo il deploy avrai:
- **URL temporaneo Vercel**: `dilettarobuschi.vercel.app`
- **Dominio custom** (dopo configurazione DNS): `dilettarobuschi.com`

---

## 📝 Modificare i Contenuti Dopo il Deploy

Per modificare i contenuti della pagina About:

1. Modifica i file `src/content/about.it.md` o `about.en.md`
2. Salva le modifiche
3. Esegui:
   ```bash
   git add .
   git commit -m "Aggiornato contenuto About"
   git push
   ```
4. Vercel farà automaticamente il deploy in 2-3 minuti!

---

## 🆘 Problemi Comuni

### Il sito non si aggiorna dopo il push?
- Controlla lo stato del deploy su vercel.com
- Aspetta 2-3 minuti per il completamento del build

### Errori durante il build?
- Controlla i log su Vercel Dashboard
- Verifica che tutte le dipendenze siano in `package.json`

### Il dominio custom non funziona?
- Aspetta 24-48 ore per la propagazione DNS
- Verifica che i record DNS siano corretti

---

## ✅ Checklist Finale

- [ ] Repository GitHub creato e codice pushato
- [ ] Account Vercel creato
- [ ] Progetto importato su Vercel
- [ ] Primo deploy completato con successo
- [ ] (Opzionale) Dominio custom configurato
- [ ] Testato il sito all'URL Vercel

---

## 🎉 Fatto!

Il tuo sito è ora online e professionale! Ogni modifica che farai sarà automaticamente pubblicata.

**Hai bisogno di aiuto?** Contatta il supporto Vercel o il tuo sviluppatore.
