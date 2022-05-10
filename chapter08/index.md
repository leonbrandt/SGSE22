# Software Testing

**Autor:** Marco Schwier

Sofern nicht weiter angegeben, entspringen alle Informationen und Abbildungen der Quelle [1].

## Einleitung

Software testen hat das Ziel zu zeigen das die Software für ihren angedachten Einsatzzweck geeignet ist. Dabei werden mittels des Testen defekte innerhalb der Software aufgedeckt. Dafür werden Testdaten verwendet die vorher für diesen Zweck erarbeitet worden sind. Das Ergebnis, das durch die Verwendung dieser mit der Software erhalten wird, wird nach Fehlern oder Anomalien überprüft. Dadurch können Fehler aufgedeckt werden. Softwaretests sind jedoch nicht in der Lage das Fehlen von Fehlern oder Defekten aufzudecken.

Es gibt zwei Ansätze beim Softwaretesten, erfüllt die Software den Erwartungen das sogenannte Validierungstests und die aktive Suche nach Fehlern das Fehlerprüfung.

Beim Validierungstests werden Testfälle erstellt die möglichst ein reales verwenden der Software widerspiegeln sollen. Dabei wird überprüft ob die Software den vorher aufgestellten Anforderungen genügt. Ein Erfolg innerhalb dieser Testmethodik ist dadurch definiert, dass die Software wie erwartet funktioniert.

Beim Fehlerprüfung sollen Fehler innerhalb der Software aufgedeckt werden. Dafür werden Testfälle erstellt die nicht dem normalen Nutzerverhalten widerspiegeln müssen. Ein Erfolg ist dadurch definiert, dass die Software nicht wie erwartet funktioniert.

![Testen allgemein](./media/Picture1.png)

### Verifikation und Validation

Testen ist ein Teil des Verifikation- und Validationsprozesses. Dabei wird durch die Verifikation ermittelt ob die Software den Spezifikationen entspricht und innerhalb der Validation ob die Software das umsetzt was sie soll. Dabei wird eine Aussage darüber erhalten ob die Software für den Gebrauch, für den sie bestimmt ist, auch geeignet ist.

### Inspektion und Testen

Die Inspektion von Softwarecode ist eine Testmöglichkeit bei dem ein Inspektor den Programmcode der Software analysiert. Dabei hat diese Art des Testens das Ziel Fehler und Anomalien zu finden. Um diese Ziel zu erreichen ist keine Ausführung des Programmes notwendig und kann schon vor der vollständigen Implementierung verwendet werden. Dabei werden alle Komponenten des Softwaresystems überprüft.

Die Vorteil dieser Vorgehensweise ist die das keine Fehlermaskierung stattfinden kann. Des Weitern können unvollständige Abschnitte der Software ohne Mehrkosten überprüft werden, da keine Mock-Objekte erstellt werden müssen um diesen Teil des Systems zu simulieren. Ebenfalls wird die Programmierweise dabei überprüft.

Wichtig ist das Testen und Inspektionen sich nicht ausschließen beide sollten verwendet werden bei dem Testen von Software. Den Inspektionen können nicht die nicht funktionalen Anforderungen eines Softwaresystems testen.

Software sollte innerhalb des Testens drei Schritte durchlaufen das Entwicklungstests, das Veröffentlichungstesten und das Nutzertesten.

## Entwicklungstest

Das Entwicklungstesten wird vom Entwicklerteam durchgeführt. Dabei unterteilt es sich in drei Abschnitte dem Modultesten, dem Komponententesten und dem Systemtesten.

### Modultest

Beim Modultest werden einzelne Funktion oder Klassen getestet. Bei dem Testen von Klassen sollte alle Operationen durchgeführt werden, sowie jedes Attribute innerhalb der Klasse gesetzt werden. Dabei sollte darauf geachtet werden das die Klasse innerhalb der Tests jeden möglichen Zustand annimmt den diese haben kann.

Die Tests können mittels Frameworks wie JUnit erstellte werden. Dabei stellt JUnit generische Klassen zur Verfügung mit den sich Testfälle modellieren lassen. Die Tests werden dabei automatisiert durchgeführt und das Ergebnis meist mittels einer GUI dem Tester präsentiert. Dabei findet der Ablauf einer solchen Testklasse in drei Schritten ab. Der erste Schritt ist das Setup hier werden die Vorbedingungen für den Testfall hergestellt. Im Folgenden wird der Testfall durchgeführt. Der letzte Schritt ist das vergleichen der Testergebnis mit einem vorher definierte Erwartungswert.

Das Zeil diese Testen ist das aufgezeigt wird das die Klasse den Erwartungen entspricht und die Funktion ausführt wie sie gedacht sind. Dabei sollen Fehler aufgedeckt werden.

Für das Erstellen von Testdaten gibt es zwei Möglichkeiten. Zum ersten die normalen Eingaben die auch innerhalb der Nutzung dieser Klasse oder Funktion auftreten können. Die andere sind abnormale Daten die nicht dem normalen Nutzerverhalten entsprechen. Dabei soll überprüft werden ob die Klasse oder Funktion sich im Fehlerfall richtig verhält. Des Weitern werden Äquivalenzklassen gebildet, eine Äquivalenzklasse ist eine Menge von Eingaben. Dabei kann jedes Element dieser Klasse repräsentativ für alle Elemente in einem Test verwendet werden. Neben den Äquivalenzklassen werden auch Grenzwertanalysen durchgeführt. Dafür wird das Elemente am äußersten Rand der Äquivalenzklasse ebenfalls in den Testdaten verwendet.

### Komponententest

Bei dem Komponententesten werden einzelnen Komponenten die sich aus Klassen zusammensetzen getestet. Dabei besitzen diese ein gemeinsames Interface mit dem die Komponente gesteuert wird. Daher ist das Ziel dieses Testabschnittes sicherzustellen dass das Interface korrekt funktioniert und das Finden von Fehler innerhalb diesem.

Dabei gibt es verschieden Arten von Interfaces die unterschiedliche Fehler erzeugen können. So kann das Interface falsch verwendet werden, die gesendete erwartetet Anfrage nicht verstanden werden oder zeitliche Fehler entstehen.

Bei diesen Test sollten Parameter gewählt werden die am Rande ihrer Äquivalenzklassen liegen. Des Weitern sollte bei Pointer immer der NULL-Pointer getestet werden. Ebenfalls Designtest und Stresstests sollten durchgeführt werden, sowie Test gegenüber den geteilte Speicher wodurch Test in anderer Reihenfolge durchgeführt werden.

### Systemtest

Bei dem Systemtest wird das vollständige System getestet. Hierfür sind Use-Cases als Basis zu verwenden und für jeden Use-Case mindestens einen Testfall zu erstellen. Der Systemtest überprüft die Zusammenarbeit aller Komponenten innerhalb des Systems und ob diese kompatible sind.

## Test-Driven Development

Test-Driven Development ist eine Agile-Entwicklungsart. Dabei wird der Fokus auf die Anforderungen der Software gesetzt.

Das Ziel dies Entwicklungsmethode ist es Funktionierende Software einfach zu entwickeln und Duplikate innerhalb der Software zu vermeiden. So wird die Entwicklung erst weitergeführt wenn alle Test erfolgreich sind.

Der Ablauf beginnt mit dem identifizieren von neuen benötigten Funktionalitäten. Darauf folgende werden dafür Test geschrieben und dies durchgeführt. Sollte der Testfehlschalgen, was beim ersten durchführen immer der Fall ist, wird die Funktionalität weiter implementiert und refactored. Daraufhin werden die Tests erneut ausgeführt. Sollten die Test keinen Fehler aufzeigen wird der Prozess von neuem begonnen.

![Testen allgemein](./media/Picture2.png)

Der Vorteil dieses Vorgehen ist, dass eine große Testabdeckung erhalten wird, da für jede neue Funktionalität zunächst Tests entwickelt werden. Außerdem lassen sich Codeabschnitt besser Debuggen. Des Weitern wird bei jedem neuen Testdurchlauf alle andern Test mit durchgeführt. So können Fehler in andern Programmabschnitten durch neu implementierte Funktionalitäten schnell gefunden werden.

## Veröffentlichungstesten

Bei dem Veröffentlichungstest werden geplante Veröffentlichung der Software getestet. Dabei wird ein separates Team verwendet das nicht mit der Entwicklung der Software vertraut ist.

Bei diesem Test handelt es sich um einen Black Box Test. Diese bedeutet das das Testteam keine Informationen über die Vorgange innerhalb der Software hat und nur die Wirkung nach außen testen kann.

Dabei sollen durch diese Test der Kunde davon überzeugt werden das die Software für seine Anforderung verwendbar ist, sowie das die Software im normalen Gebrauch verlässlich ist. Dafür werden Anforderungen an das System ermittelt und mögliche Benutzer erstellt, die ein möglichst reales umgehen mit der Software simulieren sollen.
Dafür gibt es zwei Ansätze, das anforderungsbasierte Testen und das Szenario-basierte Testen.

Bei den anforderungsbasierten Ansatz werden für jede vorher definierten Anforderung mindestens ein Testfall erstellt.

Bei dem Szenario-basierten Ansatz wird für jedes Szenario wird ein eigener Testfall entwickelt. Dabei soll der Endnutzer verstehen was innerhalb des Testfalls getestet wird. Das Scenario wird dabei detailliert formuliert. Durch dieses Vorgehen benötigen Veröffentlichungstests viel Planung.

Des Weitern werden Stresstest in diesem Abschnitt durchgeführt und Performancetest. Bei einem Stresstest wird die Software einer immer größeren Last, zum Beispiel Anfragen, ausgesetzt bis diese nicht mehr reagiert. Dabei wird die maximale Kapazität der Software ermittelt.

## Nutzertest

Bei Nutzertest wird der Benutzer der Software aktiv in den Testprozess miteinbezogen. So sind die Testfälle zuvor von den Nutzer erstellt worden. Diese Test bieten ein wichtig Grundlage um einzuschätzen, ob die Software bei Veröffentlichung von den Kunden angenommen wird.

Innerhalb des Nutzertests gibt es drei Phasen Alpha, Beta und Akzeptanz.

In der Alpha-Phase arbeiten die Entwickler eng mit den Nutzer zusammen um die Software den Erwartungen der Nutzer anzupassen.

In der Beta-Phase wird eine vorab Version dem Nutzer zur Verfügung gestellt. Diese können dann selbst die Software für sich, auf ihren eigenen Geräten, testen. So können Fehler die im realen Einsatzgebiet auftreten und nicht durch das Testen in den vorherigen Schritten gefunden wurden ermittelt werden.

In der Acceptance-Phase ist beschreibt ob das Produkt für den Markt geeignet ist. Dabei können diese Test auch von Firmen übernommen werden die das Produkt vertreiben.

Diese Testart ist wichtig um einen Einblick zu erhalten, ob das Produkt bei Veröffentlichung von den Nutzern angenommen wird. Jedoch ist es unsicher ob die Nutzer die in den Testprozess involviert sind eine repräsentative Nutzerschaft abdecken.

## Referenzen

[1]: Ian Sommerville, Software Engineering, 10. Aufl., Kapitel 08 226-254.
