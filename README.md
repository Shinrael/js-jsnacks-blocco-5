js-jsnacks-blocco-5
===
### Jsnack1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
1. Creo un array con 10 oggetti all'interno.
2. Creo un ciclo for each per ciclare le zucchine ed ottenere il peso totale ed infine utilizzo innerHTML per scrivere nel documento.
### Jsnack2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
1. Creo due array vuoti dove inserire le due tipologie di zucchine
2. Creo un ciclo forEach e all'interno utilizzo un if per dividere quelle < e > di 15.
3. Attraverso due cicli rifaccio come nel primo esercizio e stampo il peso totale delle zucchine grandi e piccole in HTML.
### Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
1. creo la funzione che mi giri la parola con split reverse e join
2. la provo tramite una const dandogli la funzione per eseguirla
### Jsnack 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
1. Creo i due array dove prendere alternativamente gli elementi e un'altro vuoto dove inserire questi elementi dopo.
2. Creo un ciclo for dove al suo interno pusho gli index di numeri e lettere fino a quando non finiscono.
### Jsnack 5
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
1. Creo l'array di numeri e i const 'A' e 'B'
2. Creo la funzione estrazione che mi pusha dentro l'array finale gli indici 'A' e 'B' dell'array di numeri.
3. Utilizzo la funzione