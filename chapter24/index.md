# Qualitätsmanagement

**Autor:** Kevin Ratschinski

## Inhalt

- **24 Einführung**
- **24.1 Softwarequalität**
- **24.2 Software - Standards**
- **24.3 Reviews und Inspektionen**
- **24.4 Qualitätsmanagement und agile Entwicklung**
- **24.5 Softwaremessung**
- **24.6 Zusammenfassung**
- **24.7 Referenzen**

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

### 24.2.1 ISO 9001

## 24.3 Reviews und Inspektionen

### 24.3.1 Review-Prozess

### 24.3.2 Programminspektionen

## 24.4 Qualitätsmanagement und agile Entwicklung

## 24.5 Softwaremessung

### 24.5.1 Produktmetriken

### 24.5.2 Softwarekomponentenanalyse

### 24.5.3 Mehrdeutigkeit von Messungen

### 24.5.4 Softwareanalytik

## 24.6 Referenzen

<span id="ref_1">[1]: Sommerville Ian (2018). Software Engineering. Quality management, 700-729. </span>  
<span id="ref_2">[2]: Managing the Software Process. Humphrey, W. 1989.</span>
