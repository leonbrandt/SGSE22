# Reliability Engineering

**Autor:** Frederic Birwe

## Einleitung

Jedes Softwaresystem, dass in eine komplexe Umgebung eingebunden ist, wird zu einem Prozentsatz fehlerhafte Ausgaben verursachen. Das Reliability Engineering versucht eine Software und das System, in dem sie eingebettet ist, so zu gestalten, dass die Software möglichst verlässlich arbeitet. Die Begriffe Verfügbarkeit und Verlässlichkeit werden nachfolgend definiert.
Nachfolgend werden für definierte Begriffe die englischen Begriffe verwendet.

## Definition fault, error und failure

Zunächst ist es wichtig, zu definieren, was ein Fehler im Kontext des reliability engineering überhaupt ist. Brian Randell definiert hierfür ein vierstufiges fault-error-failure Modell. Jede Stufe folgt chronologisch auf die vorhergehende Stufe und stellt quasi eine weitere Eskalation dar.
Das Modell ist wie folgt aufgebaut:

1. _menschlicher Fehler_ Durch menschliche Fehler, zum Beispiel Unachtsamkeiten bei der Programmierung, werden Fehlermöglichen im System eröffnet. Nehmen wir als Beispiel ein System an, dass eine bestimmte Messung zu jeder vollen Stunde vornehmen soll. Am Ende der Routine einer Messung wird der nächste Messzeitpunkt errechnet. Der Programmierer entscheidet sich hier dazu, dafür die einfach die aktuelle Stunde +1 zu rechnen. Dieses Verfahren funktioniert für alle Stunden außer für 23.00, denn hier muss als nächster Messzeitpunkt 0.00 und nicht 24.00 errechnet werden.
2. _system fault_ Eine solche Fehlerstelle nennt man dann fault. In diesem Fall ist der Fault der Umstand, dass eine Stelle im Code existiert, die +1 Stunde auf die aktuelle Uhrzeit rechnet, ohne zu prüfen, ob der aktuelle Zeitpunkt >= 23.00 ist.
3. _system error_ Sobald dieser fehlerhafte Code ausgeführt und zu einem fehlerhaften Zustand des Systems führt, spricht man von einem error.
4. _system failure_ Im schlimmsten Fall führt ein solcher error zu einem failure. Failure bedeutet, dass der Service kein oder ein fehlerhaftes Ergebnis zurückliefert. Dieser Zustand soll vermieden werden!

Faults führen nicht zwangsläufig zu einem Failure. Beispielsweise kann der fehlerhafte Code nicht erreicht werden, eine neue Transaktion verhindert den Error-State oder aber das System beinhaltet Mechnismen, mit denen faults erkannt oder behandelt werden.

## Definition availability (Verfügbarkeit) und reliability (Verlässlichkeit)

Um die Resiliz eines Softwaresystemes gegen fehlerhaftes Verhalten zu bewerten sind vor allem zwei Eigenschaften von Bedeutung:

- availability (Verfügbarkeit)
- reliability (Verlässlichkeit)

Verfügbarkeit bezeichnet den Zeitraum, in dem ein Service beziehungsweise System für Anfragen zur Verfügung steht, im Verhältnis zum Gesamtzeitraum. Zuverlässigkeit hingegen bezeichnet den Anteil korrekter Ausgaben an allen Ausgaben.
Je nach System und Einsatzgebiet stehen diese Werte in verschiedenem Maße im Fokus bei der Entwicklung eines einsatzfähigen Systems.

### availability

Die Verfügbarkeit bemisst sich an der Dauer, in der ein System nicht zur Verfügung steht und wie sehr die User des Systems von diesem Ausfall betroffen sind. Das bedeutet zum Beispiel: Ein Ausfall eines nationalen Webshops zwischen 3.00 und 4.00 morgens kann weniger schlimm sein als der Ausfall des gleichen Systems zwischen 19.00 und 19.30, obwohl die Ausfallzeit geringer ist.

### reliability

Die reliability definiert sich, wie oben definiert, aus dem Anteil der Eingaben, die einen failure verursachen an allen Eingaben. Das Problem hierbei ist, dass dies kaum zu messen ist. Der Wert hängt beispielsweise sehr stark Systemumgebung und vom Nutzungsverhalten ab. Es ist sehr wahrscheinlich, dass die Messung der reliability in einer kontrollierten Laborumgebung stark abweichen wird von einer Messung in einem realen Umfeld.
Die reliability eines Systems setzt sich zusammen aus:

- hardware reliability
- software reliability
- operator reliability

**<ergänzen>**

## Methoden zur Verbesserung der Reliability

Zur Verbesserung der Reliability eines Systems kommen vor allem drei Ansätze zur Anwendung:

1. _Fault avoidance_ In Design, Entwicklung und Implementierung der Software kommen Techniken zum Einsatz, die dabei helfen, die Anzahl der faults im System zu minimieren. Beispiele dafür sind eine stark typisierte Programmiersprache und die Vermeidung von fehleranfälligen Programmierkonzepten.
2. _Fault detection and correction_ Vor dem Liveeinsatz eines Systems wird dieses intensiv getestet und gefundene Fehler entfernt. Dieser Ansatz ist vor allem in sicherheitskritischen Bereichen, wie der Steuerung von Flugzeugen, verbreitet.
3. _Fault tolerance_ Das System wird so designt, dass es im Falle eines Errors trotzdem keinen Failure verursacht. Grundlegende Techniken sind in den meisten Systemen bereits verbaut.

Die Erreichung einer hohen reliability durch die genannten Techniken ist häufig teuer. Dadurch, dass man offensichtliche oder häufige Fehler meist schnell entdeckt, erhöhen sich die Kosten pro erkannten und behobenen Fehler in der Regel je mehr Fehler bereits erkannt unbehoben worden sind (siehe Abb.1)

[abb 1 (11.1)]

## Reliability Metriken

Zur Messung der Reliability stehen die folgenden Metriken zur Verfügung

1. _Probability of failure on demand (POFOD)_ POFOD bezeichnet die Wahrscheinlichkeit dafür, dass eine Anfrage zu einem Failure führt. Mit einem POFOD von 0.01 besteht also eine Wahrscheinlichkeit von 1/100, dass eine Eingabe zu einem Failure führt. Oder anders formuliert, im Durchschnitt wird jede 100. Eingabe zu einem Failure führen.
2. _Rate of occurence of failures (ROCOF)_ Diese Metrik bezeichnet die durchschnittlich erwarteten Fehler in einer bestimmten Zeiteinheit (zum Beispiel einer Stunde oder einer Woche) oder über eine bestimmte Anzahl an Transaktionen (zum Beispiel pro 1000 Transaktionen)
3. _Mean time to failure (MTTF)_ Die Metrik MTTF ist so etwas wie das Gegenstück zu ROCOF. Hier wird als Metrik die durschnittliche Zeit beziehungsweise die durchschnittliche Anzahl an Transaktionen zwischen zwei Failures gemessen.
4. _Availability (AVAIL)_ Die Wahrscheinlichkeit dafür, dass ein System zur Verfügung steht, wenn der Service angefragt wird.

Die verschiedenen Metriken haben unterschiedliche Einsatzzwecke.
POFOD eignet sich für Systeme, bei denen es zwar wenig Anfragen gibt, bei dem aber ein Failure gravierende Folgen hätte. Typische Beispiele hierfür sind Notfallsysteme, die eingreifen sollen, wenn alle anderen Systeme nicht greifen.

**<hier fehlt noch was>**

## Fault-tolerante Architekturen

### Protection Systems

### Self-monitoring architectures

### N-Version programming

### Software diversity

## Programmiertechniken zur Erhöhung der reliability

## Reliability messen

## Nutzungsprofile
