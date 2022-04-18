# Qualitätsmanagement

**Autor:** Kevin Ratschinski

## Inhalt

- [**24 Einführung**](#_24-einführung)
- [**24.1 Softwarequalität**](#_241-softwarequalität)
- [**24.2 Software - Standards**](#_242-softwarestandards)
- [**24.3 Reviews und Inspektionen**](#_243-reviews-und-inspektionen)
- [**24.4 Qualitätsmanagement und agile Entwicklung**](#_244-qualitätsmanagement-und-agile-entwicklung)
- [**24.5 Softwaremessung**](#_245-softwaremessung)
- [**24.6 Zusammenfassung**](#_246-zusammenfassung)
- [**24.7 Referenzen**](#_247-referenzen)

## 24 Einführung

Kapitel 24 befasst sich mit dem Qualitätsmanagement in der Softwareentwicklung.

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

Um diese Prozesse umzusetzen werden in der Softwareentwicklung oft QM-Teams eingesetzt. Die Teams sorgen für eine unabhängige Produktprüfung.
Damit wird sichergestellt, dass die zuvor festgelegten Standards und Ziele des Unternehmens mit dem Produkt übereinstimmen.

<figure style="text-align: center;">
  <!-- github -->
  <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.1_qm_und_softwareentwicklung.png?raw=true" alt="Abbildung 24.1: Qualitätsmanagement und Softwareentwicklung"/> 
  <!-- local -->
  <!-- <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="chapter24/assets/24.1_qm_und_softwareentwicklung.png" alt="Abbildung 24.1: Qualitätsmanagement und Softwareentwicklung"/> -->
  <figcaption>Abbildung 24.1: Qualitätsmanagement und Softwareentwicklung</figcaption>
</figure>

Abbildung 24.1 Zeigt den Ablauf eines Softwareentwicklungsprozess. Bevor die Entwicklung beginnt werden die Standards festgelegt und ein Qualitätsplan vom QM-Team erstellt. Das QM-team sollte stets unabhängig von der Entwicklergruppe sein, damit es die Qualität der Software objektiv beurteilen kann.
Die gewünschten Softwareeigenschaften welche das Produkt später haben muss, sollten vor Projektbeginn in einem Qualitätsplan festgehalten werden.

Nach Humphrey (1989) [[2]](#ref_2) könnte ein Qualitätsplan wie folgt aufgebaut werden:

1. _Produktvorstellung_: Eine Beschreibung des Produkts, des geplanten Absatzmarktes und der Qualitätserwartung an das Produkt.
2. _Produktpläne_: Die wichtigsten Freigabetermine und Zuständigkeiten für das Produkt, sowie die Pläne für den Vertrieb und die Dienstleistungen.
3. _Prozessbeschreibungen_: Die Entwicklungs- und Dienstleistungsprozesse und Standards, die für die Produktentwicklung und das Produktmanagement verwendet werden sollen.
4. _Qualitätsziele_: Die Qualitätsziele und -pläne für das Produkt einschließlich einer begründeten Festlegung wesentlicher Produktattribute.
5. _Risiken und Risikomanagement_: Die größten Risiken, welche die Produktqualität beeinträchtigen können, und Maßnahmen zu deren Beseitigung.

Traditionelles Qualitätsmanagement ist ein formaler Prozess, der sich auf eine ausführliche Dokumentation der Tests und Systemvalidierungen, sowie auf die Einhaltung dieser Prozesse stützt.

## 24.1 Softwarequalität

Die Grundlagen für das Qualitätsmanagement kommen ursprünglich aus der Fertigungsindustrie. Mit Hilfe von QM kann in der Fertigung, die Qualität der produzierten Produkte verbessert werden. Die Produzierten Produkte können mit der Produktspezifikation verglichen werden. Liegt ein Produkt im Toleranzbereich der Spezifikation wird es als akzeptabel klassifiziert.

Softwarequalität lässt sich nicht direkt mit der Qualität in der Fertigungsindustrie vergleichen. Ein Toleranzbereich ist in Softwaresystemen in der Regel nicht erwünscht. Hinzu kommt noch ,dass es oft unmöglich ist, objektiv zu beurteilen, ob ein Softwaresystem seiner Spezifikation entspricht.  
Das liegt an folgenden Gründen:

- Es ist schwierig, vollständige und eindeutige Systemanforderungen zu schreiben.
- In die Spezifikation fließen oft die Anforderungen von mehreren Stakeholdern mit ein. Die Anforderungen sind oft ein Kompromiss und können nicht alle Stakeholder im gleichen Maße mit einbeziehen.
- Qualitätsmerkmale wie (z.B. Wartbarkeit) lassen sich nicht direkt messen. Das hat zur Folge, dass sie nicht eindeutig spezifiziert werden können.

Aufgrund dieser Probleme handelt es sich beim Qualitätsmanagement in der Softwareentwicklung um einen subjektiven Prozess, bei dem die Mitglieder des QM-Teams anhand ihrer Sachkenntnis und Erfahrung entscheiden müssen, ob eine Software als akzeptabel klassifiziert werden kann.

Die subjektive Qualität eines Softwaresystems basiert größtenteils auf seinen nicht funktionalen Eigenschaften. Deshalb ist Softwarequalität nicht nur eine Frage der korrekten Implementierung, sondern hängt auch sehr stark von den nicht funktionalen Eigenschaften ab.  
Folgende Tabelle zeigt einige nicht funktionale Eigenschaften die bei der Ermittlung der Softwarequalität oft eine wichtige Rolle spielen.

|                        |                  |                        |
| ---------------------- | ---------------- | ---------------------- |
| Betriebssicherheit     | Verständlichkeit | Portierbarkeit         |
| Informationssicherheit | Testbarkeit      | Benutzerfreundlichkeit |
| Zuverlässigkeit        | Anpassbarkeit    | Wiederverwendbarkeit   |
| Skalierbarkeit         | Modularität      | Effizienz              |
| Stabilität             | Komplexität      | Erlernbarkeit          |

Tabelle 24.1: Softwarequalitätsmerkmale

Manche dieser Merkmale können sich gegenseitig beeinflussen. Zum Beispiel kann eine Verbesserung der Informationssicherheit zur einer geringeren Performanz führen. Deshalb ist es wichtig die Merkmale mit der größten Relevanz, vorab im Qualitätsplan festzuhalten. Das ermöglicht den Entwicklern sich schon während des Entwicklungsprozess, auf die zuvor festlegten Merkmale zu konzentrieren.

Traditionelles Softwarequalitätsmanagement geht grundsätzlich davon aus, dass die Qualität der Software in direktem Bezug zu der Qualität des Softwareentwicklungsprozesses steht.  
Die folgende Abbildung zeigt einen prozessbasierten Qualitätsansatz.

<figure style="text-align: center;">
  <!-- github -->
  <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.2_prozessbasierte_qualitaet.png?raw=true" alt="Abbildung 24.1: Qualitätsmanagement und Softwareentwicklung"/> 
  <!-- local -->
  <!-- <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="chapter24/assets/24.2_prozessbasierte_qualitaet.png" alt="Abbildung 24.2 Prozessbasierte Qualität"/> -->
  <figcaption>Abbildung 24.2 Prozessbasierte Qualität</figcaption>
</figure>

Anders als in der Fertigung ist die Beziehung zwischen Prozess- und Produktqualität komplexer. Prozesse lassen sich schwieriger standardisieren und überwachen, als es in der Fertigung der Fall ist. Trotzdem hat der Prozess, der für die Entwicklung der Software verwendet wird, einen großen Einfluss auf die Qualität der Software. Gute Entwicklungsprozesse werden mit großer Wahrscheinlichkeit auch qualitativ bessere Software hervorbringen.

Definierte Standards sind ebenfalls wichtig, aber zusätzlich sollte noch versucht werden eine "Qualitätskultur" zu entwickeln, in der jeder, der an der Produktentwicklung beteiligt ist, zum Erreichen einer hohen Produktqualität verpflichtet ist. Anders als in der Fertigung, wo die Qualität eines Produktes zu einem gewissen Teil von Maschinen und deren Konfiguration abhängt, wird die Softwarequalität direkt von jedem einzelnen Mitarbeiter beeinflusst.

## 24.2 Softwarestandards

Softwarestandards spielen eine wichtige Rolle im Softwarequalitätsmanagement. Die Wahl der Standards legt zum großen Teil die eingesetzten Werkzeuge und Methoden fest die während des Entwicklungsprozesses verwendet werden.  
Standards sind aus den folgenden drei Gründen wichtig:

1. Standards basieren oft auf Erfahrung, die für das Unternehmen von großen Wert sind. Die Standardisierung trägt dazu bei, auf diese Erfahrung zurückzugreifen und frühere Fehler zu vermeiden.

2. Standards bieten einen Rahmen für die Definition, was "Qualität" innerhalb des Softwareentwicklungsprojekt bedeutet. Sie beschreiben vorab das Qualitätsniveau, welches erreicht werden muss.

3. Standards tragen zur Kontinuität bei, sodass alle Entwickler nach denselben Verfahren arbeiten.

Es gibt zwei verwandte Arten von Software-Engineering-Standards, die im Softwarequalitätsmanagement definiert und verwendet werden können:

1. Produktstandards: Diese gelten für das zu entwickelnde Produkt.

2. Prozessstandards: Diese definieren die Prozesse, die während des Entwicklungsprozesses zu befolgen sind.

Standards müssen sich immer positiv auf die Produktqualität auswirken. Produktstandards sollten dabei so entworfen werden, dass sie kosteneffizient angewendet und geprüft werden können. Prozessstandards sollten die Prozesse definieren, die prüfen, dass die Produktstandards eingehalten werden.  
Folgende Tabelle zeigt mögliche Produkt- und Prozessstandards:

| Produktstandards                   | Prozessstandards                                     |
| ---------------------------------- | ---------------------------------------------------- |
| Formular für Entwurfsprüfung       | Durchführung des entwurfs-Reviews                    |
| Struktur des Anforderungsdokuments | Einreichung des neuen Codes für die Systemerstellung |
| Headerformat für Methoden          | Prozess der Versionsfreigabe                         |
| Java-Programmierstil               | Genehmigungsprozess für den Projektplan              |
| Format des Projektplans            | Prozess für die Änderungskontrolle                   |
| Formular für Änderungsanträge      | Prozess für die Testprotokollierung                  |

Tabelle 24.2: Produkt- und Prozessstandards

Die eingesetzten Standards in Unternehmen, basieren oft auf allgemeineren nationalen und internationalen Standards. So gibt es viele Standards die festlegen wie die verwendete Technologie, Programmiersprache oder Dokumentation eingesetzt werden sollte.

Entwickler finden oft, dass die Standards einen zu starken Vorschriftencharakter haben und die Entwicklung zum Teil ausbremsen. Um die Entwickler von den Standards zu überzeugen und deren positiven Aspekte hervorzuheben, sollten währen der Entwicklung folgende Punkte berücksichtigt werden.

- Die Softwareentwickler in die Entwicklung von Produktstandards einbeziehen.

- Die eingesetzten Standards regelmäßig überprüfen und gegebenenfalls ändern, damit sie technische Veränderungen widerspiegeln.

- Sicherstellen, dass Werkzeugunterstützung für die standardbasierte Entwicklung zur Verfügung steht.

### 24.2.1 ISO 9001

Mit der **ISO 9000** gibt es eine internationale Normenreihe, die in allen Branchen zur Entwicklung eines Qualitätsmanagementsystem eingesetzt werden kann. Die **ISO 9001** ist die allgemeinste dieser Normen und betrifft Firmen, die Produkte entwerfen, entwickeln und warten.

Alle Standards die in diesem Abschnitte besprochen werden, gehen auf die **ISO 9001** ein welche im Jahr **2008** veröffentlicht worden ist.

Die ISO 9001 ist kein Standard speziell für die Softwareentwicklung. Die Norm legt die allgemeinen Qualitätsgrundsätze fest und beschreibt generell die Qualitätsprozesse und skizziert die zu definierenden betrieblichen Standards und Verfahren.  
Alle Unternehmen die sich nach ISO 9001 zertifizieren lassen möchten, müssen dokumentieren, dass ihre Prozesse ISO 9001-konform sind. Darüber hinaus müssen Maßnahmen definiert und Protokolle erstellt werden, die nachweisen, dass die festgelegten Unternehmensprozesse eingehalten werden. Um dies zu realisieren sollten in einem Qualitätshandbuch alle wichtigen Prozesse beschrieben werden.  
Abbildung 24.3 zeigt die Kernprozesse eines Software- oder Systemherstellers nach ISO 9001.

<figure style="text-align: center;">
  <!-- github -->
  <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.3_kernprozesse_iso9001.png?raw=true" alt="Abbildung 24.3 Kernprozesse eines Software- oder Systemherstellers nach ISO 9001"/> 
  <!-- local -->
  <!-- <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="chapter24/assets/24.3_kernprozesse_iso9001.png" alt="Abbildung 24.3 Kernprozesse eines Software- oder Systemherstellers nach ISO 9001"/> -->
  <figcaption>Abbildung 24.3 Kernprozesse eines Software- oder Systemherstellers nach ISO 9001</figcaption>
</figure>

In der Norm werden keine Qualitätsprozesse definiert oder vorgeschrieben welche Prozesse eingesetzt werden müssen. Um mit der ISO 9001 kompatibel zu sein muss ein Unternehmen z.B. die verschiedenen Prozesse aus Abbildung 24.3 definieren und Verfahren entwickeln, die nachweisen, dass seine Qualitätsprozesse eingehalten werden. Diese gewährt den Unternehmen eine gewisse Flexibilität, bei der Umsetzung der Norm.

Unabhängige Zertifizierungsbehörden prüfen die Qualitätsmanagementprozesse und deren Dokumentation und entscheiden, ob die Prozesse alle die in der ISO 9001 angegebenen Bereiche abdecken. Wenn ja, erfolgt eine Zertifizierung, dass alle Prozesse eines Unternehmens mit der ISO 9001 übereinstimmen.

## 24.3 Reviews und Inspektionen

Reviews und Inspektionen sind Teile der Qualitätssicherung, mit denen sich die Qualität von Projektlieferungen prüfen lässt. Dabei wird die Software, ihre Dokumentation sowie die Prozessprotokolle untersucht, um Fehler und Versäumnisse festzustellen und um zu sehen, ob die zuvor festgelegten Qualitätsstandards eingehalten wurden.

Mit Hilfe von Reviews und Inspektionen, soll die Softwarequalität verbessert und nicht die Leistung der einzelnen Mitarbeiter bewertet werden.

### 24.3.1 Reviews

Auch wenn Reviews sehr unterschiedlich ausfallen können, ist der Review-Prozess normalerweise in drei Phasen gegliedert.
Abbildung 24.4 zeigt einen Review-Prozess in der Softwareentwicklung.

<figure style="text-align: center;">
  <!-- github -->
  <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="https://github.com/mwithoeft/SGSE22/blob/main/chapter24/assets/24.4_review_prozess.png?raw=true" alt="Abbildung 24.4 Der Review-Prozess in der Softwareentwicklung"/> 
  <!-- local -->
  <!-- <img style="max-width: 80%; border: 2px solid rgba(0, 0, 0, 0.4); border-radius: 10px;" src="chapter24/assets/24.4_review_prozess.png" alt="Abbildung 24.4 Der Review-Prozess in der Softwareentwicklung"/> -->
  <figcaption>Abbildung 24.4 Der Review-Prozess in der Softwareentwicklung</figcaption>
</figure>

1. **Aktivitäten vor dem Review**:  
   Vor dem eigentlichen Review muss sich bereits intensiv mit der Planung und der Vorbereitung auseinander gesetzt werden. Die Planung umfasst das Zusammenstellen eines Review-Teams, Festlegen von Ort und Zeit und das Verteilen der zu prüfenden Dokumente. Während der Vorbereitung kann das Team sich bereits vorab einen Überblick über die zu prüfende Software verschaffen. Die Teammitglieder müssen vertraut mit der Software, den Dokumenten und den entsprechenden Standards sein.  
   Ein Review-Team sollte normalerweise eine Kernmannschaft von drei bis vier Personen aufweisen, die anschließend als Hauptprüfer bestimmt werden. Einer davon sollte ein erfahrener Entwickler sein, der die Verantwortung für wichtige technische Entscheidungen übernehmen kann.

2. **Review-Sitzung**:  
   Während des Reviews sollte der Verantwortliche der geprüften Dokumente oder Programms das ganze gemeinsam mit dem Review-Team "durchgehen". Eine Sitzung sollte dabei nicht zu lange dauern (maximal 2 Stunden). Alle Entscheidungen die während der Sitzung getroffen werden, sollten formell festgehalten werden. Abschließend sollte auf Basis der getroffenen Entscheidungen ein Abschlussprotokoll erstellt werden, in dem alle Maßnahmen festgehalten werden, auf die man sich während des Reviews geeinigt hat.

3. **Aktivitäten nach dem Review**:  
   Nachdem Review, müssen Lösungen für die Fragen, die sich bei der Sitzung ergeben haben, gefunden werden. Eventuell müssen Softwarefehler behoben werden oder die Software muss umgestaltet werden, um den Qualitätsstandards zu entsprechen. Sind schwerwiegende Fehler während des Reviews festgestellt worden, kann zusätzlich ein Management-Review erforderlich sein, um zu entscheiden ob mehr Ressourcen zur Verfügung gestellt werden müssen. Nachdem sämtliche Änderungen vorgenommen wurden, kann der Verantwortliche prüfen, ob alle zuvor vereinbarten Punkte erledigt sind.

### 24.3.2 Programminspektionen

Programminspektionen sind "**Peer-Reviews**", bei denen Teammitglieder zusammen nach Fehlern in der Software suchen, die gerade entwickelt wird. Die Mitglieder sehen sich den Quelltext des Programms an und suchen nach Fehlern und Problemen. Bei den Fehlern kann es sich um logische Fehler, Anomalien im Code, die zu einen möglicherweise falschen Zustand führen oder um Funktionen die im Code nicht verwendet werden handeln. Das Review-Team überprüft den Programmcode und hebt Probleme hervor, mit denen sich das Entwicklerteam noch einmal beschäftigen muss.

Bei Inspektionen wird oft eine Checkliste häufiger Programmierfehler verwendet, um eine konzentrierte Suche nach den Fehlern zu ermöglichen. Mögliche Überprüfungen, die während eines Inspektionsprozesses vorgenommen werden können, sind in Tabelle 24.3 abgebildet.

<table>
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
Tabelle 24.3: Produkt- und Prozessstandards

Jedes Unternehmen sollte eigene Checklisten auf der Grundlage ihrer Standards erstellen und diese Checklisten in regelmäßigen Abständen aktualisieren, sobald neue Fehler bekannt werden. Firmen die Inspektionen einsetzen, können damit sehr effektiv Fehler finden.  
Fagan (1986) [[3]](#ref_3) berichtete, dass mehr als 60% der Fehler in einem Programm durch die Inspektion eines Programms entdeckt werden können.  
McConnell (2004) [[4]](#ref_4) vergleicht Modultests, die eine ungefähre Fehlererkennungsrate von 25% aufweisen, mit Inspektionen, deren Fehlererkennungsrate bei 60% lag. Zu berücksichtigen ist, dass diese Vergleiche angestellt wurden, bevor automatische Tests eine weite Verbreitung fanden. Es ist nicht bekannt wie Inspektionen im Vergleich mit diesem Ansatz aussehen.

Obwohl bekannt ist wie erfolgversprechend Inspektionen sind, werden sie von den Firmen nur zögerliche eingesetzt.
Dies hat mitunter folgende Gründe:

- Im Testen erfahrene Entwickler werden eventuell sich nur ungern eingestehen, dass Inspektionen effektiver sind als Tests.
- Zusätzliche Kosten während der Entwicklungsphase.
- Manager haben das Risiko dieser Zusatzkosten, welches sie oft nicht tragen wollen.

## 24.4 Qualitätsmanagement und agile Entwicklung

Qualitätsmanagement ist ein formaler Prozess, der sich auf eine ausführliche Dokumentation der Tests sowie auf die Einhaltung dieser Prozesse stützt. Diesem steht die agile Entwicklung gegenüber, die zum Ziel hat, so wenig Zeit wie möglich für das Schreiben von Dokumenten und dem Formalisieren der Entwicklungsarbeit aufzuwenden. Deshalb mussten QM-Techniken für den Einsatz von agilen Methoden entwickelt werden.

Agile Methoden stellen die Codeentwicklung in den Mittelpunkt und minimieren die Dokumentation und Prozesse. Der Schwerpunkt wird auf die Kommunikation zwischen den Teammitgliedern gelegt und nicht auf die Kommunikation über Projektdokumente. Qualitätsmanagement in der agilen Entwicklung, basiert auf die Etablierung einer Qualitätsstruktur in der sich die Teammitglieder für die Qualität der Software verantwortlich fühlen.  
Firmen die agile Entwicklungsmethoden einsetzen, sind selten nach _ISO 9001_ zertifiziert, aufgrund des bürokratischen Aufwands der von der Norm vorgegeben wird.

Einige Beispiele für agile Entwicklungsmethoden sind folgende:

- _Prüfen von Code bevor er eingefügt wird:_ Entwickler prüfen den Code ihrer Teammitglieder, bevor der Code in die aktuelle Version eingebracht wird.

- _Niemals die aktuellste Version zerstören:_ Bevor Codeänderungen übernommen werden, müssen sie gegen das ganze System getestet werden. Falls die aktuelle Version fehlerhaft ist, muss der Behebung des Problems die höchste Priorität eingeräumt werden.

- _Probleme beheben, sobald sie auftreten:_ Probleme sollten sofort behoben werden wenn sie entdeckt werden, auch wenn der Code von anderen Entwicklern stammt.

Reviews oder Inspektionen die in den vorherigen Kapiteln beschrieben wurden, kommen in der agilen Softwareentwicklung normalerweise nicht zum Einsatz.  
In Scrum beispielsweise gibt es nach Abschluss einer Softwareiteration ein Review des gesamten Teams, in der Qualitätsfragen und Probleme diskutiert werden.

Die agilen Methoden sind in Unternehmen nur dann effektiv, wenn das Unternehmen, das die Software entwickelt, auch die dazugehörige Spezifikation kontrolliert. Wenn große Systeme für einen externen Kunden entwickelt werden, können sich agile Ansätze des Qualitätsmanagement mit minimaler Dokumentation als ungeeignet erweisen.  
Dies kann folgende Gründe haben:

- Der Kunde eines großes Unternehmens, hat meist eigene Qualitätsstandards und erwartet von Softwareunternehmen, dass die Qualitätsstandards mit den firmeninternen Prozessen kompatibel sind. In so einem Fall müsste das Entwicklungsteam wie vom Kunden gefordert einen Qualitätsplan und Qualitätsberichte erstellen.

- Wenn geografisch verteilte Teams, eventuell noch aus verschiedenen Unternehmen, an der Entwicklung beteiligt sind. Ist eine informelle Kommunikation oft nicht ausreichend. Dies führt häufig dazu, dass eine formale Dokumentation zwischen den Teams wieder benötigt wird.

- Bei Systemen mit einer langen Laufzeit, änder sich häufig das Entwicklungsteam. Wenn es bei solchen Projekten keine Dokumentation gibt, können neue Entwickler schlecht nachvollziehen, warum bestimmte Entscheidungen getroffen wurden.

Aus folgenden Gründen muss der informelle Ansatz in agilen Methoden, bei größeren Projekten welche eine Dokumentation erfordern, angepasst werden. Anstatt Software zu entwickeln könnte zum Beispiel einer der Sprints sich auf die Erstellung der wichtigsten Softwaredokumentationen konzentrieren.

## 24.5 Softwaremessung

### 24.5.1 Produktmetriken

### 24.5.2 Softwarekomponentenanalyse

### 24.5.3 Mehrdeutigkeit von Messungen

### 24.5.4 Softwareanalytik

## 24.6 Zusammenfassung

## 24.7 Referenzen

<span id="ref_1">[1]: Sommerville Ian (2018). Software Engineering. Quality management. 700-729.</span>  
<span id="ref_2">[2]: Humphrey, W. (1989). Managing the Software Process.</span>  
<span id="ref_3">[3]: Fagan, M. E. (1986). Advances in Software Inspections. 744-751</span>  
<span id="ref_4">[4]: McConnell (2004). Code Complete: A Practical Handbook of Software Construction, 2nd ed.</span>
