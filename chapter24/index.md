# Qualitätsmanagement

**Autor:** Kevin Ratschinski

## Einführung

Das Kapitel befasst sich mit dem Qualitätsmanagement in der Softwareentwicklung.  
Die beschriebenen Inhalte stammen aus dem Buch **Software Engineering** von **Ian Sommerville**[[1]](#ref_1) (S. 700-729).

Softwaresysteme sollen "fit for purpose" sein. Das heißt den Bedürfnissen ihrer Benutzer entsprechen.
Darunter zählen z.B.:

- **Effizienz**
- **Zuverlässigkeit**
- **Fertigstellung innerhalb eines Zeit- und Kostenrahmens**

Softwarequalitätsmanagement hat sicherzustellen, dass diese Ziele erfüllt werden. Qualitätsmanagement hat einen hohen Stellenwert in der Softwareentwicklung und sorgt dafür das festgelegte
Ziele während des Entwicklungsprozesses eingehalten werden und die Qualität des Produktes sich nicht verschlechtert.

Die Techniken des Softwarequalitätsmanagement kommen ursprünglich aus der Fertigungsindustrie, wo die Begriffe wie "Quality Assurance" und "Quality Control" weit verbreitet sind.

**Quality Assurance** ist die Definition von Prozessen und Standards, die zu qualitativ hochwertigen Produkten führen, und die Einführung dieser Qualitätsprozesse in den Fertigungsprozess.

**Quality Control** ist die Anwendung dieser Qualitätsprozesse, um Produkte auszusieben, die dem geforderten Qualitätsniveau nicht entsprechen.

Um diese Prozesse umzusetzen, werden in der Softwareentwicklung oft QM-Teams eingesetzt. Die Teams sorgen für eine unabhängige Produktprüfung.
Damit wird sichergestellt, dass die zuvor festgelegten Standards und Ziele des Unternehmens mit dem Produkt übereinstimmen.

<figure style="text-align: center;">
  <!-- github -->
  <img style="border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.1_qm_und_softwareentwicklung_de.png?raw=true" alt="Abbildung 1: Qualitätsmanagement und Softwareentwicklung"/> 
  <figcaption>Abbildung 1: Qualitätsmanagement und Softwareentwicklung</figcaption>
</figure>

Abbildung 1 zeigt den Ablauf eines Softwareentwicklungsprozess. Bevor die Entwicklung beginnt, werden die Standards festgelegt und ein Qualitätsplan vom QM-Team erstellt. Das QM-team sollte stets unabhängig von der Entwicklergruppe sein, damit es die Qualität der Software objektiv beurteilen kann.
Die gewünschten Softwareeigenschaften, welche das Produkt später haben muss, sollten vor Projektbeginn in einem Qualitätsplan festgehalten werden.

Nach Humphrey (1989) [[2]](#ref_2) könnte ein Qualitätsplan wie folgt aufgebaut werden:

1. _Produktvorstellung_: Eine Beschreibung des Produkts, des geplanten Absatzmarktes und der Qualitätserwartung an das Produkt.
2. _Produktpläne_: Die wichtigsten Freigabetermine und Zuständigkeiten für das Produkt, sowie die Pläne für den Vertrieb und die Dienstleistungen.
3. _Prozessbeschreibungen_: Die Entwicklungs- und Dienstleistungsprozesse und Standards, die für die Produktentwicklung und das Produktmanagement verwendet werden sollen.
4. _Qualitätsziele_: Die Qualitätsziele und -pläne für das Produkt einschließlich einer begründeten Festlegung wesentlicher Produktattribute.
5. _Risiken und Risikomanagement_: Die größten Risiken, welche die Produktqualität beeinträchtigen können, und Maßnahmen zu deren Beseitigung.

Traditionelles Qualitätsmanagement ist ein formaler Prozess, der sich auf eine ausführliche Dokumentation der Tests und Systemvalidierungen, sowie auf die Einhaltung dieser Prozesse stützt.

## Softwarequalität

Die Grundlagen für das Qualitätsmanagement kommen ursprünglich aus der Fertigungsindustrie. Mit Hilfe von QM kann in der Fertigung, die Qualität der produzierten Produkte verbessert werden. Die Produzierten Produkte können mit der Produktspezifikation verglichen werden. Liegt ein Produkt im Toleranzbereich der Spezifikation wird es als akzeptabel klassifiziert.

Softwarequalität lässt sich nicht direkt mit der Qualität in der Fertigungsindustrie vergleichen. Ein Toleranzbereich ist in Softwaresystemen in der Regel nicht erwünscht. Hinzu kommt noch, dass es oft unmöglich ist, objektiv zu beurteilen, ob ein Softwaresystem seiner Spezifikation entspricht.  
Das liegt an folgenden Gründen:

- Es ist schwierig, vollständige und eindeutige Systemanforderungen zu schreiben.
- In die Spezifikation fließen oft die Anforderungen von mehreren Stakeholdern mit ein. Die Anforderungen sind oft ein Kompromiss und können nicht alle Stakeholder im gleichen Maße mit einbeziehen.
- Qualitätsmerkmale wie (z.B. Wartbarkeit) lassen sich nicht direkt messen. Das hat zur Folge, dass sie nicht eindeutig spezifiziert werden können.

Aufgrund dieser Probleme handelt es sich beim Qualitätsmanagement in der Softwareentwicklung um einen subjektiven Prozess, bei dem die Mitglieder des QM-Teams anhand ihrer Sachkenntnis und Erfahrung entscheiden müssen, ob eine Software als akzeptabel klassifiziert werden kann.

Die subjektive Qualität eines Softwaresystems basiert größtenteils auf seinen nicht funktionalen Eigenschaften. Deshalb ist Softwarequalität nicht nur eine Frage der korrekten Implementierung, sondern hängt auch sehr stark von den nicht funktionalen Eigenschaften ab.  
Folgende Tabelle zeigt einige nicht funktionale Eigenschaften, die bei der Ermittlung der Softwarequalität oft eine wichtige Rolle spielen.

<p style="margin: 0 auto; width: fit-content;">Tabelle 1: Softwarequalitätsmerkmale</p>
<table style="border: 4px solid rgba(0, 0, 0, 0.4); border-radius: 10px; margin: 0.5rem auto; width: fit-content;">
  <tr>
    <td>Betriebssicherheit</td>
    <td>Verständlichkeit</td>
    <td>Portierbarkeit</td>
  </tr>
  <tr>
    <td>Informationssicherheit</td>
    <td>Testbarkeit</td>
    <td>Benutzerfreundlichkeit</td>
  </tr>
  <tr>
    <td>Zuverlässigkeit</td>
    <td>Anpassbarkeit</td>
    <td>Wiederverwendbarkeit</td>
  </tr>
  <tr>
    <td>Skalierbarkeit</td>
    <td>Modularität</td>
    <td>Effizienz</td>
  </tr>
  <tr>
    <td>Stabilität</td>
    <td>Komplexität</td>
    <td>Erlernbarkeit</td>
  </tr>
</table>

Manche dieser Merkmale können sich gegenseitig beeinflussen. Zum Beispiel kann eine Verbesserung der Informationssicherheit zu einer geringeren Performanz führen. Deshalb ist es wichtig die Merkmale mit der größten Relevanz, vorab im Qualitätsplan festzuhalten. Das ermöglicht den Entwicklern sich schon während des Entwicklungsprozesses, auf die zuvor festlegten Merkmale zu konzentrieren.

Traditionelles Softwarequalitätsmanagement geht grundsätzlich davon aus, dass die Qualität der Software in direktem Bezug zu der Qualität des Softwareentwicklungsprozesses steht.  
Die folgende Abbildung zeigt einen prozessbasierten Qualitätsansatz.

<figure style="text-align: center;">
  <!-- github -->
  <img style="border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.2_prozessbasierte_qualitaet_de.png?raw=true" alt="Abbildung 2 Prozessbasierte Qualität"/> 
  <figcaption>Abbildung 2: Prozessbasierte Qualität</figcaption>
</figure>

Anders als in der Fertigung ist die Beziehung zwischen Prozess- und Produktqualität komplexer. Prozesse lassen sich schwieriger standardisieren und überwachen, als es in der Fertigung der Fall ist. Trotzdem hat der Prozess, der für die Entwicklung der Software verwendet wird, einen großen Einfluss auf die Qualität der Software. Gute Entwicklungsprozesse werden mit großer Wahrscheinlichkeit auch qualitativ bessere Software hervorbringen.

Definierte Standards sind ebenfalls wichtig, aber zusätzlich sollte noch versucht werden eine "Qualitätskultur" zu entwickeln, in der jeder, der an der Produktentwicklung beteiligt ist, zum Erreichen einer hohen Produktqualität verpflichtet ist. Anders als in der Fertigung, wo die Qualität eines Produktes zu einem gewissen Teil von Maschinen und deren Konfiguration abhängt, wird die Softwarequalität direkt von jedem einzelnen Mitarbeiter beeinflusst.

## Softwarestandards

Softwarestandards spielen eine wichtige Rolle im Softwarequalitätsmanagement. Die Wahl der Standards legt zum großen Teil die eingesetzten Werkzeuge und Methoden fest, die während des Entwicklungsprozesses verwendet werden.  
Standards sind aus den folgenden drei Gründen wichtig:

1. Standards basieren oft auf Erfahrung, die für das Unternehmen von großem Wert sind. Die Standardisierung trägt dazu bei, auf diese Erfahrung zurückzugreifen und frühere Fehler zu vermeiden.

2. Standards bieten einen Rahmen für die Definition, was "Qualität" innerhalb des Softwareentwicklungsprojekt bedeutet. Sie beschreiben vorab das Qualitätsniveau, welches erreicht werden muss.

3. Standards tragen zur Kontinuität bei, sodass alle Entwickler nach denselben Verfahren arbeiten.

Es gibt zwei verwandte Arten von Software-Engineering-Standards, die im Softwarequalitätsmanagement definiert und verwendet werden können:

1. Produktstandards: Diese gelten für das zu entwickelnde Produkt.

2. Prozessstandards: Diese definieren die Prozesse, die während des Entwicklungsprozesses zu befolgen sind.

Standards müssen sich immer positiv auf die Produktqualität auswirken. Produktstandards sollten dabei so entworfen werden, dass sie kosteneffizient angewendet und geprüft werden können. Prozessstandards sollten die Prozesse definieren, die prüfen, dass die Produktstandards eingehalten werden.  
Folgende Tabelle zeigt mögliche Produkt- und Prozessstandards:

<p style="margin: 0 auto; width: fit-content;">Tabelle 2: Produkt- und Prozessstandards</p>
<table style="border: 4px solid rgba(0, 0, 0, 0.4); border-radius: 10px; margin: 0.5rem auto; width: fit-content;">
  <tr>
    <th>Produktstandards</th>
    <th>Prozessstandards</th>
  </tr>
  <tr>
    <td>Formular für Entwurfsprüfung</td>
    <td>Durchführung des Entwurfs-Reviews</td>
  </tr>
  <tr>
    <td>Struktur des Anforderungsdokuments</td>
    <td>Einreichung des neuen Codes für die Systemerstellung</td>
  </tr>
  <tr>
    <td>Headerformat für Methoden</td>
    <td>Prozess der Versionsfreigabe</td>
  </tr>
  <tr>
    <td>Java-Programmierstil</td>
    <td>Genehmigungsprozess für den Projektplan</td>
  </tr>
  <tr>
    <td>Format des Projektplans</td>
    <td>Prozess für die Änderungskontrolle</td>
  </tr>
  <tr>
    <td>Formular für Änderungsanträge</td>
    <td>Prozess für die Testprotokollierung</td>
  </tr>
</table>

Die eingesetzten Standards in Unternehmen, basieren oft auf allgemeineren nationalen und internationalen Standards. So gibt es viele Standards, die festlegen wie die verwendete Technologie, Programmiersprache oder Dokumentation eingesetzt werden sollte.

Entwickler finden oft, dass die Standards einen zu starken Vorschriftencharakter haben und die Entwicklung zum Teil ausbremsen. Um die Entwickler von den Standards zu überzeugen und deren positiven Aspekte hervorzuheben, sollten währen der Entwicklung folgende Punkte berücksichtigt werden.

- Die Softwareentwickler in die Entwicklung von Produktstandards einbeziehen.

- Die eingesetzten Standards regelmäßig überprüfen und gegebenenfalls ändern, damit sie technische Veränderungen widerspiegeln.

- Sicherstellen, dass Werkzeugunterstützung für die standardbasierte Entwicklung zur Verfügung steht.

### ISO 9001

Mit der **ISO 9000** gibt es eine internationale Normenreihe, die in allen Branchen zur Entwicklung eines Qualitätsmanagementsystem eingesetzt werden kann. Die **ISO 9001** ist die allgemeinste dieser Normen und betrifft Firmen, die Produkte entwerfen, entwickeln und warten.

Alle Standards, die in diesem Abschnitte besprochen werden, gehen auf die **ISO 9001** ein welche im Jahr **2008** veröffentlicht worden ist.

Die ISO 9001 ist kein Standard speziell für die Softwareentwicklung. Die Norm legt die allgemeinen Qualitätsgrundsätze fest und beschreibt generell die Qualitätsprozesse und skizziert die zu definierenden betrieblichen Standards und Verfahren.  
Alle Unternehmen, die sich nach ISO 9001 zertifizieren lassen möchten, müssen dokumentieren, dass ihre Prozesse ISO 9001-konform sind. Darüber hinaus müssen Maßnahmen definiert und Protokolle erstellt werden, die nachweisen, dass die festgelegten Unternehmensprozesse eingehalten werden. Um dies zu realisieren, sollten in einem Qualitätshandbuch alle wichtigen Prozesse beschrieben werden.  
Abbildung 3 zeigt die Kernprozesse eines Software- oder Systemherstellers nach ISO 9001.

<figure style="text-align: center;">
  <!-- github -->
  <img style="border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.3_kernprozesse_iso9001_de.png?raw=true" alt="Abbildung 3 Kernprozesse eines Software- oder Systemherstellers nach ISO 9001"/> 
  <figcaption>Abbildung 3: Kernprozesse eines Software- oder Systemherstellers nach ISO 9001</figcaption>
</figure>

In der Norm werden keine Qualitätsprozesse definiert oder vorgeschrieben welche Prozesse eingesetzt werden müssen. Um mit der ISO 9001 kompatibel zu sein, muss ein Unternehmen z.B. die verschiedenen Prozesse aus Abbildung 3 definieren und Verfahren entwickeln, die nachweisen, dass seine Qualitätsprozesse eingehalten werden. Diese gewährt den Unternehmen eine gewisse Flexibilität, bei der Umsetzung der Norm.

Unabhängige Zertifizierungsbehörden prüfen die Qualitätsmanagementprozesse und deren Dokumentation und entscheiden, ob die Prozesse alle die in der ISO 9001 angegebenen Bereiche abdecken. Wenn ja, erfolgt eine Zertifizierung, dass alle Prozesse eines Unternehmens mit der ISO 9001 übereinstimmen.

## Reviews und Inspektionen

Reviews und Inspektionen sind Teile der Qualitätssicherung, mit denen sich die Qualität von Projektlieferungen prüfen lässt. Dabei wird die Software, ihre Dokumentation sowie die Prozessprotokolle untersucht, um Fehler und Versäumnisse festzustellen und um zu sehen, ob die zuvor festgelegten Qualitätsstandards eingehalten wurden.

Mit Hilfe von Reviews und Inspektionen, soll die Softwarequalität verbessert und nicht die Leistung der einzelnen Mitarbeiter bewertet werden.

### Reviews

Auch wenn Reviews sehr unterschiedlich ausfallen können, ist der Review-Prozess normalerweise in drei Phasen gegliedert.
Abbildung 4 zeigt einen Review-Prozess in der Softwareentwicklung.

<figure style="text-align: center;">
  <!-- github -->
  <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.4_review_prozess_de.png?raw=true" alt="Abbildung 4 Der Review-Prozess in der Softwareentwicklung"/> 
  <figcaption>Abbildung 4: Der Review-Prozess in der Softwareentwicklung</figcaption>
</figure>

1. **Aktivitäten vor dem Review**:  
   Vor dem eigentlichen Review muss sich bereits intensiv mit der Planung und der Vorbereitung auseinandergesetzt werden. Die Planung umfasst das Zusammenstellen eines Review-Teams, Festlegen von Ort und Zeit und das Verteilen der zu prüfenden Dokumente. Während der Vorbereitung kann das Team sich bereits vorab einen Überblick über die zu prüfende Software verschaffen. Die Teammitglieder müssen vertraut mit der Software, den Dokumenten und den entsprechenden Standards sein.  
   Ein Review-Team sollte normalerweise eine Kernmannschaft von drei bis vier Personen aufweisen, die anschließend als Hauptprüfer bestimmt werden. Einer davon sollte ein erfahrener Entwickler sein, der die Verantwortung für wichtige technische Entscheidungen übernehmen kann.

2. **Review-Sitzung**:  
   Während des Reviews sollte der Verantwortliche der geprüften Dokumente oder Programms das ganze gemeinsam mit dem Review-Team "durchgehen". Eine Sitzung sollte dabei nicht zu lange dauern (maximal 2 Stunden). Alle Entscheidungen, die während der Sitzung getroffen werden, sollten formell festgehalten werden. Abschließend sollte auf Basis der getroffenen Entscheidungen ein Abschlussprotokoll erstellt werden, in dem alle Maßnahmen festgehalten werden, auf die man sich während des Reviews geeinigt hat.

3. **Aktivitäten nach dem Review**:  
   Nachdem Review, müssen Lösungen für die Fragen, die sich bei der Sitzung ergeben haben, gefunden werden. Eventuell müssen Softwarefehler behoben werden oder die Software muss umgestaltet werden, um den Qualitätsstandards zu entsprechen. Sind schwerwiegende Fehler während des Reviews festgestellt worden, kann zusätzlich ein Management-Review erforderlich sein, um zu entscheiden ob mehr Ressourcen zur Verfügung gestellt werden müssen. Nachdem sämtliche Änderungen vorgenommen wurden, kann der Verantwortliche prüfen, ob alle zuvor vereinbarten Punkte erledigt sind.

### Programminspektionen

Programminspektionen sind "**Peer-Reviews**", bei denen Teammitglieder zusammen nach Fehlern in der Software suchen, die gerade entwickelt wird. Die Mitglieder sehen sich den Quelltext des Programms an und suchen nach Fehlern und Problemen. Bei den Fehlern kann es sich um logische Fehler, Anomalien im Code, die zu einen möglicherweise falschen Zustand führen oder um Funktionen, die im Code nicht verwendet werden handeln. Das Review-Team überprüft den Programmcode und hebt Probleme hervor, mit denen sich das Entwicklerteam noch einmal beschäftigen muss.

Bei Inspektionen wird oft eine Checkliste häufiger Programmierfehler verwendet, um eine konzentrierte Suche nach den Fehlern zu ermöglichen. Mögliche Überprüfungen, die während eines Inspektionsprozesses vorgenommen werden können, sind in Tabelle 3 abgebildet.

<p style="margin: 0 auto; width: fit-content;">Tabelle 3: Produkt- und Prozessstandards</p>
<table style="border: 4px solid rgba(0, 0, 0, 0.4); border-radius: 10px; margin: 0.5rem auto; width: fit-content;">
  <tr>
    <th>Fehlerklasse</th>
    <th>Überprüfung während der Inspektion</th>
  </tr>
  <tr>
    <td>Datenfehler </td>
    <td>
      <ul>
        <li>Sind alle Programmvariablen initialisiert, bevor sie verwendet werden?</li>
        <li>Sind alle Konstanten benannt?</li>
        <li>Sollte der höchste Indexwert von Arrays der Anzahl an Elemente entsprechen oder die Anzahl der Elemente -1?</li>
        <li>Falls Zeichenketten benutzt werden, ist ein Trennzeichen explizit zugewiesen?</li>
        <li>Besteht die Möglichkeit eines Speicherüberlaufs?</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Kontrollstrukturfehler </td>
    <td>
      <ul>
        <li>Sind die Bedingungen jeder bedingten Anweisung korrekt?</li>
        <li>Wird jede Schleife mit Sicherheit beendet?</li>
        <li>Sind zusammengesetzte Anweisungen richtig geklammert?</li>
        <li>Sind in <strong>case</strong>-Anweisungen alle möglicherweise auftretenden Fälle berücksichtigt?</li>
        <li>Beinhaltet jede <strong>case</strong>-Anweisung ein <strong>break</strong>, wenn es benötigt wird?</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Ein-/Ausgabefehler</td>
    <td>
      <ul>
        <li> Werden alle Eingabevariablen benutzt?</li>
        <li>Sind allen Ausgangsvariablen Werte zugewiesen, bevor sie ausgegeben werden?</li>
        <li> Können unerwartete Eingaben zu Fehlern führen?</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Schnittstellenfehler</td>
    <td>
      <ul>
        <li>Haben alle Aufrufe von Funktionen, die richtige Anzahl an Parameter?</li>
        <li>Stimmen die formalen mit den tatsächlichen Parametertypen überein?</li>
        <li>Stimmt die Reihenfolge von Parametern?</li>
        <li>Falls Komponenten auf gemeinsam genutzten Speicher zugreifen, benutzen sie dasselbe Strukturmodell für diesen Speicher?</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Speicherverwaltungsfehler</td>
    <td>
      <ul>
        <li>Falls eine verknüpfte Struktur verändert wurde, wurden alle Verknüpfungen wieder korrekt neu zugewiesen?</li>
        <li>Fall eine dynamische Speicherung erfolgt, wurde der Speicherplatz korrekt zugeteilt?</li>
        <li>Wird der Speicherplatz explizit wieder freigegeben, nachdem er nicht mehr genutzt wird?</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Ausnahmeverwaltungsfehler</td>
    <td>
      <ul>
        <li>Werden alle möglichen Fehlerzustände abgefangen?</li>
      </ul>
    </td>
  </tr>
</table>

Jedes Unternehmen sollte eigene Checklisten auf der Grundlage ihrer Standards erstellen und diese Checklisten in regelmäßigen Abständen aktualisieren, sobald neue Fehler bekannt werden. Firmen die Inspektionen einsetzen, können damit sehr effektiv Fehler finden.  
Fagan (1986) [[3]](#ref_3) berichtete, dass mehr als 60% der Fehler in einem Programm durch die Inspektion eines Programms entdeckt werden können.  
McConnell (2004) [[4]](#ref_4) vergleicht Modultests, die eine ungefähre Fehlererkennungsrate von 25% aufweisen, mit Inspektionen, deren Fehlererkennungsrate bei 60% lag. Zu berücksichtigen ist, dass diese Vergleiche angestellt wurden, bevor automatische Tests eine weite Verbreitung fanden. Es ist nicht bekannt, wie Inspektionen im Vergleich mit diesem Ansatz aussehen.

Obwohl bekannt ist wie erfolgversprechend Inspektionen sind, werden sie von den Firmen nur zögerliche eingesetzt.
Dies hat mitunter folgende Gründe:

- Im Testen erfahrene Entwickler werden eventuell sich nur ungern eingestehen, dass Inspektionen effektiver sind als Tests.
- Zusätzliche Kosten während der Entwicklungsphase.
- Manager haben das Risiko dieser Zusatzkosten, welches sie oft nicht tragen wollen.

## Qualitätsmanagement und agile Entwicklung

Qualitätsmanagement ist ein formaler Prozess, der sich auf eine ausführliche Dokumentation der Tests sowie auf die Einhaltung dieser Prozesse stützt. Diesem steht die agile Entwicklung gegenüber, die zum Ziel hat, so wenig Zeit wie möglich für das Schreiben von Dokumenten und dem Formalisieren der Entwicklungsarbeit aufzuwenden. Deshalb mussten QM-Techniken für den Einsatz von agilen Methoden entwickelt werden.

Agile Methoden stellen die Codeentwicklung in den Mittelpunkt und minimieren die Dokumentation und Prozesse. Der Schwerpunkt wird auf die Kommunikation zwischen den Teammitgliedern gelegt und nicht auf die Kommunikation über Projektdokumente. Qualitätsmanagement in der agilen Entwicklung, basiert auf die Etablierung einer Qualitätsstruktur, in der sich die Teammitglieder für die Qualität der Software verantwortlich fühlen.  
Firmen die agile Entwicklungsmethoden einsetzen, sind selten nach _ISO 9001_ zertifiziert, aufgrund des bürokratischen Aufwands, der von der Norm vorgegeben wird.

Einige Beispiele für agile Entwicklungsmethoden sind folgende:

- _Prüfen von Code bevor er eingefügt wird:_ Entwickler prüfen den Code ihrer Teammitglieder, bevor der Code in die aktuelle Version eingebracht wird.

- _Niemals die aktuellste Version zerstören:_ Bevor Codeänderungen übernommen werden, müssen sie gegen das ganze System getestet werden. Falls die aktuelle Version fehlerhaft ist, muss der Behebung des Problems die höchste Priorität eingeräumt werden.

- _Probleme beheben, sobald sie auftreten:_ Probleme sollten sofort behoben werden wenn sie entdeckt werden, auch wenn der Code von anderen Entwicklern stammt.

Reviews oder Inspektionen, die in den vorherigen Kapiteln beschrieben wurden, kommen in der agilen Softwareentwicklung normalerweise nicht zum Einsatz.  
In Scrum beispielsweise gibt es nach Abschluss einer Softwareiteration ein Review des gesamten Teams, in der Qualitätsfragen und Probleme diskutiert werden.

Die agilen Methoden sind in Unternehmen nur dann effektiv, wenn das Unternehmen, das die Software entwickelt, auch die dazugehörige Spezifikation kontrolliert. Wenn große Systeme für einen externen Kunden entwickelt werden, können sich agile Ansätze des Qualitätsmanagements mit minimaler Dokumentation als ungeeignet erweisen.  
Dies kann folgende Gründe haben:

- Der Kunde eines großen Unternehmens, hat meist eigene Qualitätsstandards und erwartet von Softwareunternehmen, dass die Qualitätsstandards mit den firmeninternen Prozessen kompatibel sind. In so einem Fall müsste das Entwicklungsteam wie vom Kunden gefordert einen Qualitätsplan und Qualitätsberichte erstellen.

- Wenn geografisch verteilte Teams, eventuell noch aus verschiedenen Unternehmen, an der Entwicklung beteiligt sind. Ist eine informelle Kommunikation oft nicht ausreichend. Dies führt häufig dazu, dass eine formale Dokumentation zwischen den Teams wieder benötigt wird.

- Bei Systemen mit einer langen Laufzeit, ändert sich häufig das Entwicklungsteam. Wenn es bei solchen Projekten keine Dokumentation gibt, können neue Entwickler schlecht nachvollziehen, warum bestimmte Entscheidungen getroffen wurden.

Aus den folgenden Gründen muss der informelle Ansatz in agilen Methoden, bei größeren Projekten welche eine Dokumentation erfordern, angepasst werden. Anstatt Software zu entwickeln könnte zum Beispiel einer der Sprints sich auf die Erstellung der wichtigsten Softwaredokumentationen konzentrieren.

## Softwaremessung

Bei der Softwaremessung geht es darum, Merkmale eines Softwaresystems zu quantifizieren. Die gemessenen Werte, ermöglichen ein Vergleich mit den unternehmensweiten Standards. Idealerweise könnte sich das Qualitätsmanagement auf die Messungen dieser Werte verlassen. Dann könnten sie objektiv bewerten, inwiefern Änderungen an den Prozessen sich auf die Softwarequalität auswirken.  
Langfristig zielt Softwaremessung darauf ab, die Softwarequalität anhand von Messungen zu beurteilen.

**Softwaremetriken** dienen zur objektiven Bewertung von Systemen, Dokumentationen oder Entwicklungsprozessen.  
Metriken sind z.B.:

- Anzahl der Codezeilen
- Fog-Index (Lesbarkeit eines Textes)
- Anzahl der Fehler, in der ausgelieferten Software
- Arbeitsaufwand (Tage) für die Entwicklung neuer Softwarekomponenten

Bei Metriken handelt es sich entweder um **Steuer-** oder um **Vorhersagemetriken**.  
Steuermetriken unterstützen das Prozessmanagement, während Vorhersagemetriken helfen, Eigenschaften der Software vorherzusagen. Beispiele für Steuer- oder Prozessmetriken sind der durchschnittliche Aufwand sowie der Zeitaufwand zu nennen, der für die Beseitigung festgestellter Fehler erforderlich ist.  
Es gibt drei verschiedene Arten von Prozessmetriken:

1. _Die benötigte Zeit zur Fertigstellung eines Prozesses:_ Dies kann die Gesamtzeit sein oder die Arbeitszeit bestimmter Entwickler.

2. _Die für einen Prozess erforderlichen Ressourcen:_ Dies kann der Gesamtaufwand in Personentagen, Reisekosten oder Computerressourcen sein.

3. _Die Häufigkeit bestimmter Ereignisse:_ Beispiele für Ereignisse könnte die Zahl der geforderten Anforderungsänderungen oder die Anzahl der Fehlerberichte in einem ausgelieferten System sein.

Viele der Qualitätsmerkmale aus _Tabelle 1_ lassen sich nur schwer direkt messen. Attribute wie Verständlichkeit und Benutzerfreundlichkeit, beziehen sich darauf, wie Entwickler und Benutzer die Software sehen. Sie unterliegen stark subjektiven Faktoren wie zum Beispiel Erfahrung und können deshalb objektiv nicht richtig gemessen werden. Um diese Attribute zu beurteilen, müssen zuerst einige interne Attribute (wie Codegröße, Komplexität, usw.) gemessen werden und diese danach mit den anderen Attributen in Verbindung gebracht werden. Ein Beispiel hierfür zeigt Abbildung 5.

<figure style="text-align: center;">
  <!-- github -->
  <img style="border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.5_beziehungen_von_softwaremerkmalen_de.png?raw=true" alt="Abbildung 5 Beziehungen zwischen internen und externen Softwaremerkmalen"/> 
  <figcaption>Abbildung 5: Beziehungen zwischen internen und externen Softwaremerkmalen</figcaption>
</figure>

In der Abbildung 5 sind externe sowie interne Merkmale zueinander in Beziehung gesetzt. Es liegt nahe, dass es Beziehungen zwischen externen und internen Merkmalen geben könnte. Die Abbildung zeigt aber nicht wie sich die internen Merkmale auf die externen auswirken.  
Soll ein Messwert eines internen Merkmals für die Vorhersage eines externen Merkmals nützlich sein, müssen laut Kitchenham (1990) [[5]](#ref_5) drei Bedingungen erfüllt sein:

1. Das interne Merkmal muss korrekt gemessen werden.

2. Zwischen den internen und den externen Merkmalen muss eine Beziehung bestehen.

3. Die Beziehung zwischen den internen und den externen Merkmal muss sich als Formel oder als Modell ausdrücken lassen.

Es gibt wenige Informationen über den Einsatz von Softwaremessungen in der Industrie. Firmen sammeln Daten über ihre Software, wie zum Beispiel die Anzahl der beim Testen festgestellten Fehler. Es ist jedoch nicht bekannt, ob die Werte anschließend genutzt werden, um Softwareprodukte zu vergleichen oder die Auswirkungen von Änderungen an Softwareprozessen zu bewerten.  
Zudem gibt es mehrere Gründe, warum dies schwierig ist:

- Es ist unmöglich zu quantifizieren, wie sich die Einführung eines Softwareanalyseprogramms im Unternehmen auszahlt. Die Qualität von Software hat sich in den letzten Jahren auch ohne die Verwendung von Metriken verbessert, sodass es schwierig ist, die Kosten für die Einführung von Softwaremessungen und -bewertungen zu rechtfertigen.

- Es gibt keine Standards für Softwaremetriken oder Prozessen für Messung und Analyse. Deshalb zögern viele Firmen, solange keine Standards zur Verfügung stehen.

- Die Softwaremessungen und -metriken haben den Schwerpunkt vornehmlich auf codebasierte oder plangesteuerte Entwicklungsprozesse gelegt. Heutzutage wird Software zunehmend durch Wiederverwenden und Konfigurieren bestehender Anwendungssysteme oder mit agilen Methoden entwickelt. Deshalb lässt sich schwer sagen, ob sich der bisherige Einsatz der Metriken auf diese Softwareentwicklungsmethoden übertragen lässt.

### Produktmetriken

Produktmetriken sind Vorhersagemetriken, mit denen sich interne Attribute eines Systems quantifiziert messen lassen. Zu den Produktmetriken gehören zum Beispiel die Anzahl an Codezeilen oder die Anzahl der Methoden zu einer Klasse.  
Produktmetriken lassen sich in zwei Gruppen einteilen:

- _Dynamische Metriken:_ Lassen sich während der Programmausführung durch Messungen sammeln. Ein Beispiel wäre die Anzahl an Fehlerberichten oder die Zeit für die Ausführung von bestimmten Berechnungen.

- _Statische Metriken:_ Werden aus dem Entwurf des Programms oder aus der Dokumentation gesammelt. Beispiele für statische Messgrößen sind in Tabelle 4 abgebildet.

Dynamische Metriken sind für die Beurteilung der Zuverlässigkeit und Effizienz eines Programmes sehr hilfreich. Statische Metriken sind für die Beurteilung der Verständlichkeit, Komplexität und der Wartung eines Softwaresystems wichtig.

<p style="margin: 0 auto; width: fit-content;">Tabelle 4: Statische Softwaremetriken</p>
<table style="border: 4px solid rgba(0, 0, 0, 0.4); border-radius: 10px; margin: 0.5rem auto; width: fit-content;">
  <tr>
    <th>Statische Softwaremetrik</th>
    <th>Beschreibung</th>
  </tr>
  <tr>
    <td>Fan-in / Fan-out</td>
    <td>
      Bei <strong>Fan-in</strong> handelt es sich um die Anzahl von Funktionen, die eine andere Funktion aufrufen. Ein hoher Wert bedeutet, dass die aufrufenden Funktionen eng mit der Funktion verknüpft sind.<br>
      <strong>Fan-out</strong> ist die Anzahl der von einer bestimmten Funktion aufgerufenen Funktionen. Ein hoher Wert legt nahe, dass die Gesamtkomplexität der Funktion groß sein könnte.
    </td>
  </tr>
  <tr>
    <td>Codelänge</td>
    <td>
      Umso länger der Code einer Komponente ist, desto komplexer und fehleranfälliger ist sie "wahrscheinlich". Die Codelänge hat sich als einer der zuverlässigsten Metriken für die Vorhersage der Fehleranfälligkeit erwiesen.
    </td>
  </tr>
  <tr>
    <td>Zyklomatische Komplexität</td>
    <td>
      Maß für die Komplexität von Kontrollstrukturen. Wirkt sich auf die Verständlichkeit des Programms aus.
    </td>
  </tr>
  <tr>
    <td>Länge der Bezeichner</td>
    <td>
     Maß für die Länge einzelner Bezeichner im Programm (Namen für Variablen, Klassen, Methoden, usw.) Umso länger Bezeichner sind, desto wahrscheinlicher ist es, dass sie eine gewisse Aussagekraft haben.
    </td>
  </tr>
  <tr>
    <td>Tiefe von Verzweigungen</td>
    <td>
      Ein Maß für die Tiefe von if-Anweisungen in einem Programm. Tief verschachtelte if-Anweisungen sind schwerer zu verstehen und möglicherweise fehlerbehaftet.
    </td>
  </tr>
  <tr>
    <td>Fog-Index</td>
    <td>
      Maß für die Länge der Wörter und Sätze in Dokumenten. Umso höher der Fog-Index eines Dokumentes ist, desto schwerer ist das Dokument zu verstehen.
    </td>
  </tr>
</table>

Viele Experimente zeigten, dass die Größe eines Programms und die Komplexität der Kontrollstrukturen die zuverlässigsten Vorhersagen für die Verständlichkeit und die Wartbarkeit liefern.

Neben den Metriken aus Tabelle 4 für die statische Analyse, gibt es auch noch Metriken die sich speziell für die Objektorientierung eignen. Tabelle 5 ist eine Zusammenfassung der (Chidamber-Kemerer-Metriksuite) [[6]](#ref_6), die aus 6 objektorientierten Metriken besteht. Diese bereits in den frühen 90er Jahren entwickelten Metriken, sind immer noch die am weitesten verbreiteten objektorientierten Metriken.

<p style="margin: 0 auto; width: fit-content;">Tabelle 5: Objektorientierte CK-Metriksuite.</p>
<table style="border: 4px solid rgba(0, 0, 0, 0.4); border-radius: 10px; margin: 0.5rem auto; width: fit-content;">
  <tr>
    <th>Objektorientierte Metrik</th>
    <th>Beschreibung</th>
  </tr>
  <tr>
    <td>Gewichtete Methoden pro Klasse</td>
    <td>
      Hierbei werden die Methoden einer Klasse, nach ihrer Komplexität gewichtet. Je größer der Wert ist, desto komplexer ist die Klasse. Bei komplexen Klassen lässt sich annehmen, dass sie schwieriger zu verstehen sind.
    </td>
  </tr>
  <tr>
    <td>Tiefe des Vererbungsbaums</td>
    <td>
      Zählt die Anzahl der Ebenen im Vererbungsbaum. Je tiefer der Vererbungsbaum ist, desto komplexer ist der Entwurf, da viele Oberklassen verstanden werden müssen, um die Klasse auf der tiefsten Ebene zu verstehen.
    </td>
  </tr>
  <tr>
    <td>Anzahl der Kinder</td>
    <td>
      Gibt die Anzahl der direkten Subklassen einer Klasse an. Im Gegensatz der zuvor betrachteten Tiefe, wird hier die Breite einer Klasse betrachtet. Bei einem hohen Wert sollte der Basisklasse größere Aufmerksamkeit geschenkt werden, weil viele untergeordnete Klassen davon abhängen.
    </td>
  </tr>
  <tr>
    <td>Kopplung zwischen Objektklassen</td>
    <td>
     Klassen sind gekoppelt, wenn Methoden oder Variablen der einen Klasse in Methoden einer anderen Klasse verwendet werden. Desto höher der Wert, umso stärker die Kopplung. Ein hoher Wert bedeutet, dass Änderungen einer Klasse Auswirkungen auf die andere Klasse im Programm haben können.
    </td>
  </tr>
  <tr>
    <td>Antwort für eine Klasse</td>
    <td>
      Gibt die Anzahl an Methoden an, die als Antwort auf eine Nachricht von einem Objekt dieser Klasse ausgeführt werden können. Umso höher der RFC-Wert (Response For a Class), desto komplexer ist wahrscheinlich eine Klasse.
    </td>
  </tr>
  <tr>
    <td>Fehlende Kohäsion unter den Methoden</td>
    <td>
      Der Wert gibt die Differenz zwischen der Zahl der Methoden ohne gemeinsame Attribute und der Zahl der Methoden mit gemeinsamen Attributen an. Der Wert ist umstritten und es ist nicht klar, ob er wirklich neue Informationen liefert, welche nicht schon von anderen Metriken abgedeckt wird.
    </td>
  </tr>
</table>

El-Amam (2001) [[7]](#ref_7) beschreibt in einem Aufsatz die CK-Metriken sowie andere objektorientierte Metriken und kommt zu der Schlussfolgerung, dass noch nicht ausreichend Beweise vorliegen in welche Beziehung diese Metriken zur Softwarequalität stehen. Diese Situation hat sich seit der Analyse 2001 nicht verändert. Es ist immer noch nicht bekannt wie Messungen von objektorientierten Programmen, zuverlässige Schlüsse über die Qualität liefern können.

### Softwarekomponentenanalyse

In der Softwarekomponentenanalyse werden einzelne Komponenten eines Systems, unter Verwendung verschiedener Metriken, separat analysiert. Ein Prozess, der die Messung einer Komponente zeigt, ist in Abbildung 6 dargestellt.

<figure style="text-align: center;">
  <!-- github -->
  <img style="border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.6_komponentenanalyse_de.png?raw=true" alt="Abbildung 6 Prozess der Komponentenanalyse"/> 
  <figcaption>Abbildung 6: Prozess der Komponentenanalyse</figcaption>
</figure>

Der Prozess setzt sich wie folgt zusammen:

1. _Durchzuführende Messung auswählen:_ Welche Fragen sollen beantwortet werden und dafür die entsprechenden Messungen auswählen.

2. _Komponente auswählen:_ Alle Komponenten auswählen die benötigt werden, um die Analyse durchzuführen.

3. _Komponenteneigenschaften messen:_ Die zuvor ausgewählten Komponenten Messen und die Werte für die Metrik errechnen.

4. _Auffällige Messwerte erkennen:_ Nach der Messung können die Messwerte mit den früheren Messungen verglichen werden. Ungewöhnlich hohe oder niedrige Werte, könnten auf Probleme mit der Komponente hinweisen.

5. _Auffällige Komponenten analysieren:_ Auffällige Komponenten überprüfen und ermitteln ob sich die Qualität der Komponente verschlechtert hat.

Die gesammelten Daten sollten, protokolliert werden, damit sie für spätere Tests wieder zur Verfügung stehen. Wenn nach vielen Tests eine ausreichend große Datenbank vorhanden ist, kann die Softwarequalität verglichen und die Beziehung zwischen Komponenten und Qualitätsmerkmalen validiert werden.

### Softwareanalytik

In den letzten Jahren hat der Begriff **Big Data Analysis** immer mehr an Relevanz in der Softwareanalytik gewonnen. Durch _Data-Mining_ lassen sich sehr große Mengen an Daten sammeln und anschließend analysieren. Dadurch ist es möglich, die Beziehung von Daten herzustellen, die mit einer manuellen Datenanalyse nicht möglich ist. **Softwareanalytik** ist die Anwendung dieser Techniken auf Daten über Software und Prozesse.

Menzies und Zimmermann (2013) [[8]](#ref_8) definierten Softwareanalytik folgendermaßen:

_Softwareanalytik ist die Analyse von Softwaredaten für Manager und Softwareentwickler mit dem Ziel, Softwareentwickler oder Teams zu befähigen, Erkenntnisse aus ihren Daten zu ziehen, um bessere Entscheidungen zu treffen._

Zwei wichtige Faktoren haben die Softwareanalytik erst möglich gemacht:

1. Das automatisierte sammeln von Nutzerdaten durch Softwareunternehmen, während der Benutzung der eigenen Software. Sobald die Software abstürzt oder Fehler auftreten, können die erzeugten Meldungen über das Internet an die Server des Entwicklers gesendet werden. So kommen riesige Datenmengen zusammen, die anschließend für die Softwareanalytik benutzt werden können.

2. Die Verwendung von Open-Source-Software, angeboten auf Plattformen wie zum Beispiel Github. Der Quellcode von solcher Software steht frei für die Analyse zur Verfügung.

Die Analytik hat zum Ziel, die Informationen von Problemen in Echtzeit zu analysieren, sodass auf Grund der gesammelten Daten direkt Maßnahmen ergriffen werden können.  
Im Allgemeinen lässt sich nicht sagen, welche das beste Analysewerkzeug für eine bestimmte Situation ist. Buse und Zimmermann (2012) [[9]](#ref_9) schlagen mehrere Richtlinien für die Nutzung der Tools vor:

- Die Tools sollen leicht zu benutzen sein, weil Manager oft wenig Erfahrung mit der Analyse haben.

- Die Tolls sollten schnell ausführbar sein und präzise Ergebnisse liefern, anstatt riesige Datenmengen.

- Die Tools sollten viele Messungen mit möglichst vielen Parametern durchführen. Es ist im Vorfeld schwer möglich vorherzusagen, welche Erkenntnisse sich daraus ergeben könnten.

- Die Tools sollten Managern und Entwicklern ermöglichen, die Analysen zu untersuchen.

Zhang et al. (2013) [[10]](#ref_10) beschreibt eine praktische Anwendung der Softwareanalytik. Dabei wurde die benutze Software mit Funktionalität ausgestattet, die es ermöglicht die Antwortzeiten und den damit verbundenen Systemzustand zu ermitteln. Sobald die Antwortzeit größer als erwartet ausfiel, wurden die Daten weitergeleitet und analysiert. Die automatische Analyse zeigte dann die Leistungsengpässe in der Software. Auf der Grundlage dieser Daten konnten die Entwickler ihre Algorithmen verbessern und die Engpässe damit beseitigen.

Harford (2013) [[11]](#ref_11) beschreibt in "Big Data: Are We Making a Big Mistake?" ein großes Problem der Softwareanalytik. Oft hängt unser Wissen immer von Daten ab, die bei großen Unternehmen gesammelt wurden. Diese Daten stammen hauptsächlich von den Softwareprodukten der Unternehmen und es ist noch nicht geklärt, ob sich die Techniken, die sich für die Produkte eigenen, auch für kundenspezifische Software verwendet werden kann. Hinzu kommt noch das kleine Unternehmen oft nicht die finanziellen Mittel haben, um in Datenerfassung zu investieren, die für eine automatische Analyse erforderlich wäre, sodass sie keine Möglichkeit haben, Softwareanalytik zu nutzen.

## Zusammenfassung

- Qualitätsmanagement soll sicherstellen, dass die Software so wenig Fehler wie möglich enthält, wartungsfreundlich ist und zuverlässig läuft. Zusätzlich stellt QM sicher, dass alle festgelegten Standards für Prozesse und Produkte eingehalten werden.

- Standards sind wichtig für die Qualitätssicherung, da sie die "beste Vorgehensweise" darstellen. Sie bieten eine solide Grundlage für die Erstellung qualitativ hochwertiger Software.

- Reviews werden von einem extra Team durchgeführt. Das Review-Team prüft, dass die definierten Qualitätsstandards eingehalten werden. Reviews stellen die häufigste Methode zur Beurteilung der Qualität dar.

- Während einer Inspektion, wir der Code von einem kleinen Team systematisch geprüft. Die Teammitglieder durchsuchen den Code nach potenziellen Fehlern. Die festgestellten Mängel werden anschließend in einer Code-Review-Sitzung diskutiert.

- Softwaremessungen können zum Sammeln quantitativer Daten über die verwendete Software eingesetzt werden. Möglicherweise können mit Hilfe der Daten Metriken erstellt werden, um Schlussfolgerungen über die Qualität zu ziehen.

- Metriken sind besonders nützlich, um auf Komponenten zu stoßen, die Qualitätsprobleme aufweisen könnten.

- Softwareanalytik befasst sich mit der automatischen Analyse von großen Datenmengen, um Beziehungen festzustellen, die für Manager und Entwickler wichtig sein könnten.

## Referenzen

<span id="ref_1">[1]: Sommerville Ian (2015). Software Engineering (10th. ed.), Quality management (700-729).</span>  
<span id="ref_2">[2]: Humphrey, W. (1989). Managing the Software Process.</span>  
<span id="ref_3">[3]: Fagan, M. E. (1986). Advances in Software Inspections. 744-751.</span>  
<span id="ref_4">[4]: McConnell (2004). Code Complete: A Practical Handbook of Software Construction, 2nd ed.</span>  
<span id="ref_5">[5]: Kitchenham, B. (1990). Software Development Cost Models. 487-517.</span>  
<span id="ref_6">[6]: Chidamber, S., and C. Kemerer. (1994). A Metrics Suite for Object-Oriented Design. 476-493.</span>  
<span id="ref_7">[7]: El-Amam, K. (2001). Object-Oriented Metrics: A Review of Theory and Practice.</span>  
<span id="ref_8">[8]: Menzies, T., and T. Zimmermann. (2013). Software Analytics: So What?. 31-37.</span>  
<span id="ref_9">[9]: Buse, R. P. L., and T. Zimmermann. (2012). Information Needs for Software Development Analytics. 987-996.</span>  
<span id="ref_10">[10]: Zhang, D, S. Han, Y. Dang, J-G. Lou, H. Zhang, and T. Xie. (2013). Software Analytics in Practice. 30-37.</span>  
<span id="ref_11">[11]: Harford, T. (2013). Big Data: Are We Making a Big Mistake? Financial Times, March 28. http://timharford.com/2014/04/big-data-are-we-making-a-big-mistake/</span>
