# Software Testing

**Autor:** Marco Schwier

Sofwaretesten hat das Ziel zu zeigen das die Software für ihren angedachten Einsatzzweck geeigent ist. Dabei werden mittels des Testen defekte inerhalb der Software aufgedeckt. Dafür werden Testdaten verwendet die vorher für diesen Zweck erabeitet worden sind. Das Ergbnis, das durch die Verwendung dieser mit der Software erhalten wird, wird nach Fehlern oder Anomalien überprüft. Dadurch können Fehler aufgedeckt werden. Softwaretests sind jedoch nicht in der Lage das fehlen von Fehlern oder Defekten aufzudecken.

Es gibt zwei Ansätze beim Softwaretesten, erfüllt die Software den erwartungen das sogenannte Validationtesting und die aktive Suche nach Fehlern das Defecttesting.

Beim Validationtesting werden Testcase erstellt die möglichest ein reales verwenden der Software widerspiegeln sollen. Dabei wird überprüft ob die Software den vorher aufgestellten Anforderungen genügt. Ein Erfolg inerhalb dieser Testmetodik ist dadurch definiert das die Software wie erwartet funktioniert.

Beim Defekttesting sollen Fehler innerhalb der Software aufgedeckt werden. Dafür werden Testcase erstellt die nicht dem normalen Nutzerverhalten widerspiegeln müssen. Ein Erfolg ist dadruch definiert das die Software nicht wie erwartet funktioniert.

![Testen allgemein](./media/Picture1.png)

## Verifikation und Validation
Testen ist teil des Verifikation und Validationprozesses. Dabei wird durch die Verfikikation ermittelt ob die Software den Spezifikationen enspircht und inherlab der Validation ob die Software das umsetzt was sie soll. Dabei wird eine Aussage darüber erhalten ob die Software für den Gebrauch, für den sie bestimmt ist, auch geeigent ist.

## Inspektion und Testen
Die Inspektion von Softwarecode ist eine Testmöglichkeit bei dem ein Inspektor den Programmcode der Software analysiert. Dabei hat diese art des Testens das Ziel Fehler und Anomalien zu finden. Um diese Ziel zu ereichen ist keine Ausführung des Programmes notwendig und kann schon vor der vollstandigen implementierung verwendet werden. Dabei werden alle Komponenten des Softwaresystems überprüft.

Die Vorteil dieser vorangehensweise ist die das keine Fehlermaskierung stattfinden kann. Des Weitern können unvollständige Abschnitte der Software ohne Mehrkosten überprüft werden, da keine Mockobjekte erstellt werden müssen um diesen Teil des Systems zu simuliernen. Ebenfalls wird die Progammierweise dabei überprüft.

Wichtig ist das Testen und Inspektion sich nicht ausschließen beide sollten verwendet werden bei dem Testen von Software. Den Inpektionen können nicht die nicht Funktionalenanforderungen eines Softwaresystem testen.

Software sollte inerhalb des Testens drei Schritte durchlaufen das Developmenttesten, das Veröffentlichungstesten und das Usertesten.

## Developmenttest
Das Developmenttesten wird vom Entwickerteam durchgeführt. Dabei unterteilt es sich in drei Abschnitte dem Unittesten, dem Komponententesten und dem Systemtesten.

### Unittest
Beim Unittesten werden einzelne Funktion oder Klassen getestet. Bei dem Testen von Klassen sollte alle operation durchgeführt werden, sowie jedes Atributet inerhalb der Klasse gesetzt werden. Dabei sollte darauf geachtet werden das die Klasse inerhalber der Tests jeden möglichen Zustand annimmt den diese haben kann.

Die Tests können mittels Frameworks wie Junit erstellte werden. Dabei stellt Junit generische Klassen zurverfügung mit den sich Testfälle modelieren lassen. Die Test verweden dabei automatiesiert durchgeführt und das Ergbenis meist mittels einer GUI dem Tester präsentiert. Dabei findet der ablauf einer solchen Testklasse in drei Schritten ab. Der erste Schritt ist das Setup hier werden die Vorbedingungen für den Testfall hergestellt. Im folgenden wird der Testfall durchgeführt. Der letzte Schritt ist das vergleichen der Testergebnis mit einm vorher definierte Erwartungswert.

Das Zeil diese Testen ist das aufgezeigt wird das die Klasse den erwartungen entspricht und die Funktion ausführt wie sie gedacht sind. Dabei sollen Fehler aufgedeckt werden.

Für das erstellen von Testdaten gibt es zwei Möglichkeiten. Zum ersten die normalen Eingaben die auch inerhalb der Nutzung dieser Klasse oder Funktion auftretten können. Die andere sind abnormale Daten die nicht dem normalen Nutzerverhalten entsprechen. Dabei soll überprüft werden ob die Klasse oder Funktion sich im Fehlerfall richtig verhält.

### Komponententest
Bei dem Komponententesten werden einzelnen Komponenten die sich aus Klassen zusammensetzen getestet. Dabei besitzten dies ein gemeinsames Interface mit dem die Komponente gesteuert wird. Daher ist das Ziel dieses Testabschnittes sicherzustellen dass das Interface korrekt funktioniert und das finden von Fehler inerhalb diesem.

Dabei gibt es verschieden Arten von Interfaces die unterschiedliche Fehler erzeugen können. So kann das Interface falsch verwendet werden, die gesendete erwartetet Anfrage nicht verstanden werden oder zeitliche Fehler entstehen.

Bei deisen Test sollten Parameter gewählt werden die am Rande ihrer Äquivalenklassen leigen. Des Weitern sollte bei Pointer immer der NULL-Pointer getestet werden. Ebenfalls Designtest und Stresstests sollten durchgeführt werden, sowie Test gegenüber den geteilte Speicher wordurch Test in anderer Reihenfolge durchgeführt werden.

### Systemtest
Bei dem Systemtest wird das vollständige System getestet. Hierfür sind Use-Cases als Basis zu verwenden und für jeden Use-Case mindesten ein Testfall zu erstellen. Der Systemtest überprüft die Zusammenarbeit aller Komponenten inerhalb des System und ob diese kompatible sind.

## Test-Driven Development
Test-Driven Development ist eine Agile-Entwicklungsart. Dabei wird der Fokus auf die Anforderungen der Software gesetzt.

Das Ziel dies Entwicklungsmethode ist es Funktionierende Software einfach zu entwickeln und Dublikate inerhalb der Software zu vermeiden. So wird die Entwicklung erst weitergeführt wenn alle Test erfolgreich sind.

Der Ablauf beginnt mit dem identifiziern von neunen benötigten Funktionalitäten. Darauf folgened werden dafür Test geschrieben und dies durchgeführt. Sollte der Testfehlschalgen, was beim ersten durchführen immer der Fall ist, wird die Funktionalität weiter imlementiert und gerefektort. Darauf hin werden die Tests erneut ausgeführt. Sollten die Test keinen Fehler aufzeigen wird der Prozess von neuem begonnen.

![Testen allgemein](./media/Picture2.png)

Die Vorteil dies vorgehen ist das ein größe Test-Codecoverage erhalte wird da für jede neu Funktionalität zunächst Test entwickelt werden. Ausserdem lassen sich Codeabschnitt besser Debugen. Des Weitern wird bei jedem neuen Testdurchlauf alle andern Test mit durchgeführt. So können Fehler in andern Programmabschnitten durch neu implementierte Funktionalitäten schnell gefunden werden.

## Veröffentlichungstesten
Bei dem Veröffentlichungstest werden geplante Veröffentlichung der Software gestest. Dabei wird ein seperates Team verwendet das nicht mit der Entwicklung der Software vertraut ist.

Bei diesem Test handelt es sich um einen Black Box Test. Diese bedeutet das das Testteam keine Informationen über die Vorgange inerhalb der Software hat und nur die Wirkung nach außen testen kann.
 
Dabei sollen durch diese Test der Kunde davon überzeugt werden das die Software für seine Anforderung verwendbar ist, sowie das die Software im normalen Gebrauch verlässlich ist. Dafür werden Anforderungen an das System ermittelt und mögliche Bentutzer erstellt die ein möglichst reales umgehen mit der Software simuliern sollen. Diese Anforerungen und Nutzer werden inerhalb von Scenarien zusammengestellt. Für jedes Scenario wird ein eigener Testfall entwickelt. Dabei soll der Endnutzer verstehen was inerhalb des Testfalls getestet wird. Durch diese Vorgen benötigten Veröffentlichungstest viel Plannung.

Des Weitern werden Stresstest in diesem Abschnitt durchgeführt und Performancetest. Bei einem Stresstest wird die Software einer immer größen Last, zum Beispiel Anfragen, ausgesetzt bis diese nicht mehr reagiert. Dabei wird die maximale kapazität der Software ermittelt.

## Nutzertest
Bei Nutzertest wird der Bentuzer der Software aktiv in den Testprozess miteinbezogen. So sind die Testfälle zuvor von den Nutzer erstellt worden. Diese Test bieten ein wichtig grundlage um einzuschätzten ob die Software bei Veröffentlichung von den Kunden angenommen wird.

Inerhalb des Nutzertest gibt es drei Phasen Alpha, Beta und Akzeptanz.

In der Alpha-Phase arbeiten die Entwicker eng mit den Nutzer zusammen um die Software den Erwartungen der Nutzer anzupassen.

In der Beta-Phase wird ein vorab Version dem Nutzer zuverfügung gestellt. Diese können dann selbst die Software für sich testen.

In der Acceptance-Phase ist das Produkt fertig und wird mehr Nutzern zuverfügung gestellt.

Diese Testart ist wichtig um einen Einblick zuerhalte ob das Produkt bei Veröffentlichung von den Nutzern angenommen wird. Jedoch ist es unsicher ob die Nutzer die in den Testprozess involviert sind eine repräsentive Nutzerschaft abdecken.

## Referenzen

[1]: Ian Sommerville, Software Engineering, 10. Aufl., Kapitel 08 226-254. <br>
