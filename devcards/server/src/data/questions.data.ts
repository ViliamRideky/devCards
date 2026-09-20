import { Question } from "../types/question";

export const beMockQuestions: Question[] = [
  {
    id: "1",
    question: "Čo je to Virtual DOM a ako funguje v Reacte?",
    answer:
      "Virtual DOM je ľahká kópia reálneho DOMu v pamäti. React pri zmene stavu vytvorí nový Virtual DOM tree, porovná ho s predchádzajúcim (proces zvaný diffing) a do reálneho DOMu zapíše iba tie zmeny, ktoré sa skutočne zmenili.",
    level: "junior",
    category: "react",
  },
  {
    id: "2",
    question:
      "Čo znamená, keď má hook useEffect prázdny pole závislostí (empty dependency array [])?",
    answer:
      "Znamená to, že efekt sa spustí iba raz – hneď po prvom vykreslení (mount) komponentu do DOMu. Neprebehne pri žiadnom ďalšom re-renderi.",
    level: "junior",
    category: "react",
  },
  {
    id: "3",
    question: "Kedy a prečo použiť hook useMemo?",
    answer:
      "useMemo sa používa na memoizáciu (uloženie do pamäte) výsledku náročného výpočtu. Zabraňuje opätovnému prepočítavaniu tejto hodnoty pri každom re-renderi, pokiaľ sa nezmenia jeho závislosti.",
    level: "junior",
    category: "react",
  },
  {
    id: "4",
    question:
      "Čo je to conditional rendering (podmienené vykresľovanie) v Reacte?",
    answer:
      "Je to spôsob, ako na základe podmienky (napr. stavu alebo props) zobraziť rôzne JSX prvky. Najčastejšie sa používa ternárny operátor (condition ? <A /> : <B />) alebo logický operátor AND (condition && <A />).",
    level: "junior",
    category: "react",
  },
  {
    id: "5",
    question: "Čo v TypeScript-e predstavuje typ ReactNode?",
    answer:
      "ReactNode je široký typ reprezentujúci čokoľvek, čo môže React vykresliť. Zahrňuje React prvky (JSX), reťazce (string), čísla, boolean, null, undefined alebo ich polia (napr. pre prop children).",
    level: "junior",
    category: "react",
  },
  {
    id: "6",
    question: "Aký je hlavný rozdiel medzi state a props v Reacte?",
    answer:
      "Props sú dáta odovzdávané z rodičovského komponentu nadol a sú len na čítanie (read-only). State sú vnútorné dáta komponentu, ktoré spravuje a mení samotný komponent.",
    level: "junior",
    category: "react",
  },
  {
    id: "7",
    question:
      "Prečo by sme pri vykresľovaní zoznamov (lists) nemali používať index ako prop 'key'?",
    answer:
      "Použitie indexu ako kľúča môže spôsobiť chyby v UI a nečakané správanie stavu komponentov, ak sa položky zoznamu preusporiadajú, pridajú alebo vymažú.",
    level: "junior",
    category: "react",
  },
  {
    id: "8",
    question: "Aký je rozdiel medzi null a undefined v JavaScript-e?",
    answer:
      "Undefined znamená, že premenná bola deklarovaná, ale nebola jej priradená žiadna hodnota. Null je úmyselne priradená hodnota reprezentujúca 'žiadnu hodnotu' alebo prázdny objekt.",
    level: "junior",
    category: "javascript",
  },
  {
    id: "9",
    question: "Čo je to closure (uzáver) v JavaScript-e?",
    answer:
      "Closure je schopnosť vnútornej funkcie pristupovať k premenným zo svojho vonkajšieho lexikálneho rozsahu (scope) aj po tom, čo vonkajšia funkcia skončila vykonávanie.",
    level: "junior",
    category: "javascript",
  },
  {
    id: "10",
    question:
      "Ktoré metódy polí (Array) v JavaScript-e mutujú pôvodné pole a čo znamená pojem 'mutovanie'?",
    answer:
      "Mutovanie znamená priamu zmenu pôvodnej dátovej štruktúry namiesto vytvorenia novej. Medzi metódy, ktoré mutujú pole, patria napríklad push, pop, shift, unshift, splice, sort, reverse a fill. Naopak metódy ako map, filter, slice alebo concat vracajú nové pole a pôvodné pole nemenia.",
    level: "junior",
    category: "javascript",
  },
  {
    id: "11",
    question: "Aký je rozdiel medzi hookmi useCallback a useMemo?",
    answer:
      "useCallback ukladá do pamäte (memoizuje) samotnú inštanciu funkcie medzi renderovaniami. useMemo ukladá vypočítanú hodnota/výsledok funkcie.",
    level: "medior",
    category: "react",
  },
  {
    id: "12",
    question:
      "Ako funguje Event Loop v JavaScript-e pri spracovaní Microtasks a Macrotasks?",
    answer:
      "Event Loop najprv vykoná jednu Macrotask (napr. setTimeout, I/O). Následne kompletne vyprázdni celú frontu Microtasks (napr. Promise callbacks, queueMicrotask) pred tým, než prejde k vykresľovaniu UI alebo ďalšej Macrotask.",
    level: "medior",
    category: "javascript",
  },
  {
    id: "13",
    question: "Kedy beží cleanup funkcia v hooku useEffect?",
    answer:
      "Cleanup funkcia sa spustí neposredne pred tým, ako sa komponent odpojí z DOMu (unmount), a tiež pred každým opätovným spustením efektu pri zmene závislostí.",
    level: "medior",
    category: "react",
  },
  {
    id: "14",
    question:
      "Čo robí utilitný typ Omit<T, K> v TypeScript-e a ako sa líši od Pick<T, K>?",
    answer:
      "Omit vytvorí nový typ tak, že z typu T odstráni vlastnosti špecifikované v K. Pick robí presný opak – vytvorí typ vybraním iba špecifikovaných vlastností K z typu T.",
    level: "medior",
    category: "typescript",
  },
  {
    id: "15",
    question: "Čo znamená výraz 'stale closure' v kontexte React hookov?",
    answer:
      "Nastáva vtedy, keď funkcia (napr. v useEffect alebo useCallback) zachytí hodnotu premennej zo staršieho renderu z dôvodu chýbajúcej závislosti v dependency array, čím pracuje so zastaranými dátami.",
    level: "medior",
    category: "react",
  },
  {
    id: "16",
    question: "Na čo slúži hook useImperativeHandle v spojení s forwardRef?",
    answer:
      "Umožňuje prispôsobiť a obmedziť inštanciu ref-u, ktorú dcérsky komponent poskytuje rodičovskému komponentu. Namiesto celého DOM uzla sprístupní len vybrané imperative metódy (napr. focus()).",
    level: "medior",
    category: "react",
  },
  {
    id: "17",
    question:
      "Čo je to Event Delegation (delegovanie udalostí) v DOM a prečo sa používa?",
    answer:
      "Je to technika, kedy sa jeden event listener pripojí na rodičovský prvok namiesto pripájania listenerov na každý dcérsky prvok zvlášť. Využíva prebublávanie udalostí (event bubbling) a šetrí pamäť.",
    level: "medior",
    category: "javascript",
  },
  {
    id: "18",
    question: "Aký je rozdiel medzi unknown a any v TypeScript-e?",
    answer:
      "Any vypína typovú kontrolu pre danej premennej a dovolí s ňou robiť cokolvek. Unknown je typovo bezpečný – vyžaduje najprv zistenie/overenie typu (type narrowing), než s premennou môžete vykonávať operácie.",
    level: "medior",
    category: "typescript",
  },
  {
    id: "19",
    question:
      "Ako React spracováva dávkové aktualizácie stavu (automatic batching)?",
    answer:
      "React spája viacero zmien stavu (setState) vykonaných v rámci jedného cyklu do jednej opätovnej manipulácie s DOMom, čím redukuje počet re-renderov a zvyšuje výkon.",
    level: "medior",
    category: "react",
  },
  {
    id: "20",
    question: "Na čo slúži StrictMode v Reacte počas vývoja?",
    answer:
      "StrictMode pomáha odhaľovať potenciálne chyby – napríklad zámerne spúšťa efekty a reducery dvakrát v vývojovom prostredí (development), aby odhalil chýbajúce cleanup funkcie a nežiaduce vedľajšie účinky (side-effects).",
    level: "medior",
    category: "react",
  },
  {
    id: "21",
    question: "Čo je Node.js a prečo je vhodný na tvorbu backendových aplikácií?",
    answer:
      "Node.js je JavaScript runtime postavený na V8 engine, ktorý beží mimo prehliadača. Používa event-driven a non-blocking I/O model, vďaka čomu dokáže efektívne obslúžiť veľa súbežných požiadaviek pomocou jediného vlákna.",
    level: "junior",
    category: "nodejs",
  },
  {
    id: "22",
    question: "Čo je to async/await v Node.js a na čo sa používa?",
    answer:
      "Async/await je syntaktická nadstavba nad Promise, ktorá umožňuje písať asynchrónny kód spôsobom, ktorý vyzerá synchrónne a je tak prehľadnejší a čitateľnejší ako reťazenie .then().",
    level: "junior",
    category: "nodejs",
  },
  {
    id: "23",
    question: "Aký je rozdiel medzi synchrónnym a asynchrónnym kódom v Node.js?",
    answer:
      "Synchrónny kód sa vykonáva postupne a blokuje ďalšie vykonávanie, kým sa neskončí aktuálna operácia. Asynchrónny kód (napr. čítanie súboru alebo dotaz do databázy) nezastaví beh programu a jeho výsledok sa spracuje neskôr cez callback, Promise alebo async/await.",
    level: "junior",
    category: "nodejs",
  },
  {
    id: "24",
    question: "Prečo možno kľúčové slovo await použiť iba vnútri async funkcie?",
    answer:
      "Await pozastaví vykonávanie danej funkcie, kým sa Promise nesplní (resolve) alebo nezlyhá (reject), a vráti jej výslednú hodnotu. Toto pozastavenie funguje iba v kontexte async funkcie, ktorá sama o sebe vracia Promise.",
    level: "junior",
    category: "nodejs",
  },
  {
    id: "25",
    question: "Ako sa v Node.js zachytáva chyba v bloku s async/await?",
    answer:
      "Chyba sa zvyčajne zachytáva pomocou try/catch bloku okolo await volania. Ak Promise zlyhá (reject), vyhodí sa výnimka, ktorú catch blok zachytí a môže s ňou ďalej pracovať (napr. logovanie alebo vrátenie chybovej odpovede).",
    level: "junior",
    category: "nodejs",
  },
  {
    id: "26",
    question: "Ako funguje Event Loop v Node.js a aké má hlavné fázy?",
    answer:
      "Event Loop umožňuje Node.js vykonávať non-blocking I/O operácie na jednom vlákne. Prechádza fázami ako timers, pending callbacks, poll, check a close callbacks, pričom medzi jednotlivými fázami spracováva frontu microtasks (Promise callbacks, process.nextTick).",
    level: "medior",
    category: "nodejs",
  },
  {
    id: "27",
    question: "Aký je rozdiel medzi process.nextTick() a setImmediate()?",
    answer:
      "process.nextTick() zaradí callback do vykonania hneď po dokončení aktuálnej operácie, ešte pred pokračovaním Event Loopu do ďalšej fázy. setImmediate() zaradí callback až do fázy 'check', čiže sa vykoná až po I/O udalostiach v aktuálnom cykle.",
    level: "medior",
    category: "nodejs",
  },
  {
    id: "28",
    question: "Čo je middleware v Express.js a ako funguje reťazenie pomocou next()?",
    answer:
      "Middleware je funkcia, ktorá má prístup k objektom request, response a k funkcii next. Môže požiadavku upraviť, validovať alebo ukončiť. Zavolaním next() sa riadenie odovzdá ďalšiemu middleware alebo route handleru v reťazci.",
    level: "medior",
    category: "nodejs",
  },
  {
    id: "29",
    question:
      "Ako spracovať viacero asynchrónnych operácií paralelne pomocou Promise.all v porovnaní so sekvenčným await?",
    answer:
      "Promise.all spustí všetky asynchrónne operácie naraz a počká, kým sa všetky dokončia, čo je rýchlejšie, keď operácie na sebe nezávisia. Sekvenčné použitie await v cykle spúšťa operácie jednu po druhej, čo je pomalšie, ale vhodné, ak výsledok jednej operácie potrebuje vstup pre ďalšiu.",
    level: "medior",
    category: "nodejs",
  },
  {
    id: "30",
    question: "Čo je connection pooling pri práci s databázou v Node.js a prečo je dôležitý?",
    answer:
      "Connection pooling znamená udržiavanie skupiny už otvorených databázových spojení, ktoré sa opakovane využívajú namiesto vytvárania nového spojenia pri každej požiadavke. Zvyšuje výkon a znižuje zaťaženie databázy, keďže vytváranie spojenia je nákladná operácia.",
    level: "medior",
    category: "nodejs",
  },
  {
    id: "31",
    question:
      "Ako funguje React Fiber architektúra a aký problém rieši v porovnaní so starým reconciliation algoritmom?",
    answer:
      "Fiber rozdeľuje prácu na renderovaní na malé jednotky, ktoré je možné prerušiť, pozastaviť alebo dať im rôznu prioritu. Rieši problém starého synchrónneho, neprerušiteľného reconciliation algoritmu, ktorý pri veľkých stromoch komponentov blokoval hlavné vlákno a spôsoboval trhané UI.",
    level: "senior",
    category: "react",
  },
  {
    id: "32",
    question: "Čo je Concurrent Rendering (napr. useTransition, useDeferredValue) a kedy ho použiť?",
    answer:
      "Concurrent Rendering umožňuje Reactu pripravovať viacero verzií UI súčasne a uprednostniť urgentné aktualizácie (napr. písanie do inputu) pred menej urgentnými (napr. filtrovanie veľkého zoznamu). useTransition a useDeferredValue sa používajú na označenie aktualizácií s nižšou prioritou, aby neblokovali interakciu používateľa.",
    level: "senior",
    category: "react",
  },
  {
    id: "33",
    question: "Ako fungujú Server Components (RSC) a aký je rozdiel oproti klasickému SSR?",
    answer:
      "Server Components sa renderujú výhradne na serveri a ich JavaScript sa nikdy neposiela klientovi, čím sa znižuje veľkosť bundlu. Na rozdiel od klasického SSR, kde sa celá aplikácia po odoslaní HTML aj hydratuje na klientovi, RSC umožňujú kombinovať serverové a klientske komponenty a hydratovať iba tie interaktívne.",
    level: "senior",
    category: "react",
  },
  {
    id: "34",
    question:
      "Ako by si optimalizoval veľkú aplikáciu s tisíckami komponentov proti zbytočným re-renderom?",
    answer:
      "Pomocou React.memo na komponenty, useCallback a useMemo na stabilizáciu referencií, rozdelením kontextu (context splitting) tak, aby zmena jednej časti stavu nespôsobila re-render nesúvisiacich komponentov, a virtualizáciou dlhých zoznamov.",
    level: "senior",
    category: "react",
  },
  {
    id: "35",
    question:
      "Ako funguje prototype chain a dedičnosť v JavaScript-e na nízkej úrovni?",
    answer:
      "Každý objekt má interný odkaz [[Prototype]] na iný objekt. Keď sa pristupuje k vlastnosti, ktorá na objekte priamo neexistuje, JavaScript ju hľadá postupne v reťazci prototypov, až kým ju nenájde alebo nedôjde na koniec reťazca (null).",
    level: "senior",
    category: "javascript",
  },
  {
    id: "36",
    question: "Ako sa líši Event Loop vo Web Workeroch od hlavného vlákna?",
    answer:
      "Web Worker beží na samostatnom vlákne s vlastným Event Loopom a nemá priamy prístup k DOMu. Komunikuje s hlavným vláknom asynchrónne pomocou správ (postMessage), čo umožňuje vykonávať náročné výpočty bez blokovania UI.",
    level: "senior",
    category: "javascript",
  },
  {
    id: "37",
    question: "Vysvetli, ako funguje debounce a throttle a kedy použiť ktorý.",
    answer:
      "Debounce odloží vykonanie funkcie, kým neuplynie určený čas od poslednej udalosti (vhodné napr. pre vyhľadávacie pole). Throttle zabezpečí, že funkcia sa vykoná najviac raz za daný časový interval bez ohľadu na počet udalostí (vhodné napr. pre scroll alebo resize).",
    level: "senior",
    category: "javascript",
  },
  {
    id: "38",
    question: "Čo sú WeakMap a WeakSet a prečo pomáhajú predchádzať memory leaks?",
    answer:
      "WeakMap a WeakSet uchovávajú svoje kľúče (objekty) iba pomocou slabých referencií. Ak na objekt neexistuje žiadna iná referencia, garbage collector ho môže uvoľniť z pamäte aj napriek tomu, že je stále kľúčom vo WeakMap/WeakSet, čo zabraňuje zbytočnému držaniu objektov v pamäti.",
    level: "senior",
    category: "javascript",
  },
  {
    id: "39",
    question: "Čo sú Conditional Types a Mapped Types v TypeScript-e a na čo sa využívajú?",
    answer:
      "Conditional Types (T extends U ? X : Y) umožňujú definovať typ v závislosti od splnenia podmienky. Mapped Types umožňujú vytvoriť nový typ transformáciou vlastností existujúceho typu (napr. Partial<T>, Readonly<T>). Spolu umožňujú vytvárať flexibilné a znovupoužiteľné typové utility.",
    level: "senior",
    category: "typescript",
  },
  {
    id: "40",
    question: "Vysvetli rozdiel medzi structural typing a nominal typing a ako to ovplyvňuje TypeScript.",
    answer:
      "Pri structural typing (ktoré používa TypeScript) sú dva typy kompatibilné, ak majú rovnakú štruktúru (rovnaké vlastnosti), bez ohľadu na ich názov. Pri nominal typing (napr. v Jave) sú typy kompatibilné iba vtedy, ak sú explicitne deklarované ako rovnaké alebo príbuzné.",
    level: "senior",
    category: "typescript",
  },
  {
    id: "41",
    question: "Čo je Discriminated Union a prečo je užitočný pri type narrowing?",
    answer:
      "Discriminated Union je union typ, kde každý člen obsahuje spoločnú literálovú vlastnosť (napr. type: 'success' | 'error'), podľa ktorej TypeScript dokáže presne zúžiť (narrow) typ v danej vetve kódu, napr. v switch alebo if podmienke.",
    level: "senior",
    category: "typescript",
  },
  {
    id: "42",
    question: "Čo robia utility types ReturnType<T> a Parameters<T>?",
    answer:
      "ReturnType<T> extrahuje typ návratovej hodnoty funkcie T. Parameters<T> extrahuje typy parametrov funkcie T ako tuple. Obidva sa často používajú na odvodenie typov bez ich manuálneho opakovaného definovania.",
    level: "senior",
    category: "typescript",
  },
  {
    id: "43",
    question:
      "Ako by si navrhol škálovateľnú architektúru Node.js API pri vysokej záťaži?",
    answer:
      "Využitím clusteringu alebo Worker Threads na plné využitie viacjadrových procesorov, horizontálnym škálovaním viacerých inštancií za load balancerom, cachovaním (napr. Redis) a oddelením náročných operácií do samostatných služieb alebo message queue.",
    level: "senior",
    category: "nodejs",
  },
  {
    id: "44",
    question:
      "Aké sú bezpečnostné riziká v Node.js aplikáciách a ako sa im brániť?",
    answer:
      "Medzi bežné riziká patrí SQL/NoSQL injection, prototype pollution, nedostatočná validácia vstupov alebo neošetrené citlivé údaje v logoch. Brániť sa dá validáciou a sanitizáciou vstupov, používaním parametrizovaných dotazov, aktuálnymi závislosťami a bezpečnostnými hlavičkami (napr. helmet).",
    level: "senior",
    category: "nodejs",
  },
  {
    id: "45",
    question:
      "Ako funguje streamovanie dát (Streams API) v Node.js a kedy je vhodnejšie ako bufferovanie celého súboru do pamäte?",
    answer:
      "Streams spracúvajú dáta po malých častiach (chunks) postupne, namiesto načítania celého obsahu do pamäte naraz. Sú vhodné pri práci s veľkými súbormi alebo dátovými tokmi (napr. video, veľké CSV), pretože znižujú spotrebu pamäte a umožňujú začať spracovanie skôr, než sú dáta kompletne načítané.",
    level: "senior",
    category: "nodejs",
  },
];
