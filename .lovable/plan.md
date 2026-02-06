

# Portfolio-klon för Emma Viitanen

En exakt kopia av portfoliot på emmaviitanen.myportfolio.com med samma mörka estetik, röda accenter och bildgalleri-layout.

---

## Sidor som byggs

### 1. Startsida (Home)
- **Header**: Logo "EMMA VIITANEN" till vänster, navigation till höger (HOME, BIO, CONTACT)
- **Hero-sektion**: Fullskärms projektgrid med 6 projekt
  - "THE HIGHEST SUMMITS" (featured i mitten)
  - "BRAND IDENTITY"
  - "COCA-COLA"
  - "MOVIE POSTER"
  - "ILLUSTRATION"
  - "PHOTOGRAPHY"
- **Footer**: Copyright och sociala länkar (LinkedIn, e-post)
- Hover-effekter på projektkorten med röd overlay

### 2. Bio-sida
- Layout i två kolumner: bild till vänster, text till höger
- Titel: "Hi, I'm Emma" med introduktionstext
- "Let's work together" CTA-knapp (röd accent)
- Samma header och footer

### 3. Kontakt-sida
- Kontaktformulär med fält för:
  - Namn
  - E-post
  - Meddelande
- Skicka-knapp (frontend demo - visar bekräftelse utan att faktiskt skicka)
- E-postlänk och LinkedIn-ikon

### 4. Projektsidor (6 st)
Varje projekt får en egen detaljsida med:
- Tillbaka-pil för navigation
- Projekttitel
- Bildgalleri (vertikalt scrollande)
- Projektbeskrivning

---

## Design & Styling

- **Färgpalett**: 
  - Bakgrund: Mycket mörk grå (#1a1a1a)
  - Text: Vit
  - Accent: Röd (#e63946)
- **Typografi**: Sans-serif, clean och modern
- **Animationer**: Subtila hover-effekter, smooth övergångar
- **Responsivt**: Anpassas för mobil, tablet och desktop

---

## Teknisk struktur

- 9 sidor totalt (Home, Bio, Contact + 6 projektsidor)
- React Router för navigation
- Tailwind CSS för styling
- Bilder hämtas från originalportfoliot
- Statiskt innehåll (ingen databas behövs)

