Kassan har fyra delar som ska visa datan i `cartItems`. Vi bygger dem med `map`, en uppgift i taget. Uppgift 1 och 2 går vi igenom steg för steg. Uppgift 3 och 4 löser vi mer på egen hand.

Så här börjar vi:

- Öppna `index.html` i webbläsaren och `script.js` i VS Code.
- Öppna Console: högerklicka på sidan, välj `Inspect` (`Granska`) och klicka på fliken `Console`.
- Spara `script.js` och ladda om sidan efter varje steg.

---

# Uppgift 1: Namnen i paketet

I rutan `Leverans` står det `Produktnamnen visas här`. Där ska namnen på alla produkter stå.

**Steg 1.** Skriv koden under kommentaren `// Uppgift 1` i `script.js`:

```javascript
const productNames = cartItems.map((item) => {
  return item.product.name;
});

console.log(productNames);
```

`map` kör callbacken en gång för varje produkt. Det som callbacken returnerar hamnar i den nya arrayen `productNames`.

Console ska visa:

```plaintext
['Trådlösa hörlurar', 'Mekaniskt tangentbord', 'USB-C-hubb']
```

**Steg 2.** Slå ihop namnen till en enda sträng:

```javascript
const namesText = productNames.join(", ");
```

`join(", ")` sätter ett komma och ett mellanslag mellan namnen.

**Steg 3.** Visa strängen på sidan:

```javascript
const packageNamesElement = document.querySelector("#package-names");

packageNamesElement.textContent = namesText;
```

Vi använder `textContent` eftersom det bara är vanlig text, ingen HTML.

**Klart när:** Rutan visar `I paketet: Trådlösa hörlurar, Mekaniskt tangentbord, USB-C-hubb`.

---

# Uppgift 2: Raderna i ordersammanfattningen

I den svarta rutan finns en rad som är skriven för hand. Vi gör en rad per produkt i stället.

**Steg 1.** Leta upp kommentaren som börjar med `<!-- Exempelrad` i `index.html`. Kopiera hela `<li>`-elementet under den:

```html
<li class="flex justify-between gap-4">
  <span class="text-stone-300">2 × Trådlösa hörlurar</span>
  <span class="font-semibold">598 kr</span>
</li>
```

**Steg 2.** Skapa `summaryRows` under `// Uppgift 2` i `script.js`. Klistra in `<li>` mellan backticks efter `return`:

```javascript
const summaryRows = cartItems.map((item) => {
  const lineTotal = calculateLineTotal(item);

  return `
    <li class="flex justify-between gap-4">
      <span class="text-stone-300">2 × Trådlösa hörlurar</span>
      <span class="font-semibold">598 kr</span>
    </li>
  `;
});
```

`lineTotal` är det totala priset för produkten, alltså priset gånger antalet.

**Steg 3.** Byt ut de tre fasta värdena mot värden från `item`:

```javascript
    <li class="flex justify-between gap-4">
      <span class="text-stone-300">${item.quantity} × ${item.product.name}</span>
      <span class="font-semibold">${lineTotal} kr</span>
    </li>
```

`${}` lägger in ett värde i strängen. Nu får varje rad sin egen produkt.

**Steg 4.** Visa raderna på sidan:

```javascript
const summaryRowsElement = document.querySelector("#summary-rows");

summaryRowsElement.innerHTML = summaryRows.join("");
```

`join("")` slår ihop raderna utan något mellan dem. `innerHTML` gör om strängen till riktiga HTML-element.

**Steg 5.** Ta bort exempelraden och kommentaren ur `index.html`. Sidan ska se likadan ut efteråt.

**Klart när:** Rutan visar tre rader:

```plaintext
2 × Trådlösa hörlurar        598 kr
1 × Mekaniskt tangentbord    849 kr
1 × USB-C-hubb               399 kr
```

---

# Uppgift 3: Produktkorten i varukorgen

Nu gör vi samma sak som i uppgift 2, men med det stora kortet under `Varukorg`. Den här gången skriver vi mer själva.

**Steg 1.** Kopiera hela `<article>` under kommentaren som börjar med `<!-- Exempelkort` i `index.html`.

**Steg 2.** Skapa `cartCards` under `// Uppgift 3 och 4` och klistra in kortet efter `return`, precis som i uppgift 2. Bilden har vi redan bytt ut här som exempel:

```javascript
const cartCards = cartItems.map((item) => {
  const lineTotal = calculateLineTotal(item);

  return `
    <article class="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <img class="h-24 w-24 rounded-xl object-cover" src="${item.product.image}" alt="Trådlösa hörlurar" />
      <!-- Resten av kortet från index.html -->
    </article>
  `;
});
```

**Steg 3.** Byt ut resten av de fasta värdena. Det är sex ställen kvar. Fråga för varje text i kortet: ändras den från produkt till produkt? Då ska den komma från `item`.

Låt de två `<span>` med `Brusreducering` och `30 h batteri` vara kvar. Dem fixar vi i uppgift 4.

**Steg 4.** Visa korten i `#cart-items`. Koden ser ut som i steg 4 i uppgift 2. Ta sedan bort exempelkortet ur `index.html`.

[Du hittar mer hjälp på vägen genom att följa guiden på kurssidan istället](https://course.biggerpixel.com/workshops/ms77bhtgapy5wrc3c8bgraa9ps8fqjva/segments/nd71xnb5kgsc9yhbtwxxt8jnjs8h0s81?placementId=j574n2mv5qw8vgt7dbdj12px6n8h4vhb)

**Klart när:** Tre kort syns, med rätt bild, namn, varumärke, antal och pris. Alla tre korten visar fortfarande `Brusreducering` och `30 h batteri`. Det är rätt just nu.

Om korten inte syns: kontrollera att `#` finns med i `querySelector("#cart-items")` och att Console inte visar något rött fel.

---

# Uppgift 4: Egna egenskaper på varje kort

Varje produkt har en array som heter `features`. Så här ser den ut för hörlurarna:

```javascript
features: ["Brusreducering", "30 h batteri"],
```

Varje kort ska visa sina egna egenskaper. En egenskap ska se ut så här i HTML:

```html
<span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">Brusreducering</span>
```

Egenskaperna ska in här i kortet, i stället för de två fasta `<span>`:

```html
<div class="mt-2 flex flex-wrap gap-2">
  <!-- Här ska egenskaperna in -->
</div>
```

**Uppgiften:**

1. Skapa variabeln `featureTags` inne i callbacken för `cartCards`, före `return`.
2. Använd `map` på `item.product.features` så att varje egenskap blir en `<span>` som den ovanför.
3. Lägg in `featureTags` i kortet där kommentaren står, ihopslagen till en sträng.

Det nya här är en `map` inne i en annan `map`. Den yttre går igenom produkterna. Den inre går igenom egenskaperna för en produkt.

Testa med `console.log(featureTags)` inne i callbacken. Console ska visa tre arrayer, en per produkt. Den första ska innehålla två `<span>`-strängar.

[Du hittar mer hjälp på vägen genom att följa guiden på kurssidan istället](https://course.biggerpixel.com/workshops/ms77bhtgapy5wrc3c8bgraa9ps8fqjva/segments/nd71xnb5kgsc9yhbtwxxt8jnjs8h0s81?placementId=j574n2mv5qw8vgt7dbdj12px6n8h4vhb)

**Klart när:**

- Hörlurarna visar `Brusreducering` och `30 h batteri`.
- Tangentbordet visar `Svenska tangenter`, `RGB-belysning` och `USB-C`.
- USB-C-hubben visar `4 portar` och `HDMI 4K`.
- Inga kommatecken syns mellan egenskaperna.

**Klar tidigt?** Summan `1846 kr` är skriven för hand i `index.html`. Räkna ut den i `script.js` med `forEach` och `calculateLineTotal`, och visa den i `#order-total`. Lägg sedan till en fjärde produkt i `cartItems` och kontrollera att hela kassan uppdateras.
