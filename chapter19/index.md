# Systems Engineering

**Autor:** Moritz Withöft

## Einführung

In diesem Kapitel wird sich innerhalb des **Systems Engineering** mit soziotechnischen Systemen, dem konzeptionellen Design, der Systembeschaffung, der Systementwicklung und dem Systembetrieb bzw. der Weiterentwicklung der Systeme befasst. Sofern nicht anders gekennzeichnet, liegen dargelegte Information und Bilder dem Buch *Software Engineering* von *Ian Sommerville* [[1]](#ref1) zugrunde.

Ein nützlicher Computer besteht sowohl aus Hardware als auch aus Software. Ohne Software besteht das Hardware-System aus einer Reihe von Komponenten, die so keinen wirklichen Zweck erfüllen können. Ohne Hardware ist ein Software-System wiederum lediglich eine Abstraktion und kann kein laufendes System darstellen. Wenn diese beiden Systeme zusammenarbeiten, erhält man einen grundlegenden Aspekt eines *wirklichen* **Systems**: die einzelnen Komponenten werden verknüpft und arbeiten zusammen. Weiterhin werden Systeme entwickelt, um menschliche Aufgaben und Vorgänge zu unterstützen. Aus diesem Grund muss bei der Entwicklung jedes professionellen Software-Systems nicht nur die Hardware berücksichtigt werden, sondern auch menschliche, soziale und organisatorische Faktoren. Man kann Systeme mit Software in zwei Kategorien unterteilen:

- **Technische computerbasierte Systeme** sind Systeme, die Hardware- und Softwarekomponenten beinhalten, jedoch keine Vorgänge und Prozesse. Als Beispiel werden hierfür Fernseher mit Embedded Software genannt, aber auch Computer und Spiele für diesen. Technische Systeme werden für einen bestimmten Zweck verwendet, aber Kenntnis über diesen Zweck ist - im Gegensatz zu soziotechnischen Systemen -  nicht erforderlich und nicht Bestandteil dessen.
- **Soziotechnische Systeme** umfassen ein oder mehrere technische Systeme, aber auch Personen, die den Zweck des Systems im System verstehen. Soziotechnische Systeme beinhalten definierte Prozesse und Anwender. Schreibt man und veröffentlicht also ein Buch wurde dafür ein soziotechnisches Veröffentlichungssystem mit verschiedenen Prozessen (Erstellung, Bearbeitung, Design) verwendet. Dahinter liegen dann technische Systeme, wie Photoshop oder MS Word.

**Systems Engineering** bezeichnet das Konzipieren und Entwickeln ganzer Systeme, wobei sowohl die Eigenschaften Hardware und Software als auch die menschlichen Elemente innerhalb dieser berücksichtigt werden [[2]](#ref2). Dabei umfasst Systems Engineering alles was unter Systembeschaffung, Systementwicklung, Systembetrieb, Systeminstandhaltung und Spezifizierung des Systems anfällt. Es werden technische und soziotechnische Systeme berücksichtigt.

Innerhalb dieses Kapitels wird sich vorrangig mit **Enterprise-Systemen** beschäftigt. Solche großen und komplexen Systeme sollen die Ziele und Aufgaben von großen Unternehmen und Organisationen unterstützen. Es handelt sich hierbei um soziotechnische Systeme, die von Unternehmensstruktur, aber auch von nationalen und internationalen Gesetzen und Richtlinien beeinflusst werden. Auf Grund ihrer langen Lebensdauer und ihrer wichtigen Rolle für das Unternehmen sollten Softwareentwickler aktive Teilnehmer im Entwicklungsprozess sein.

- Die meisten Entscheidungen werden von Senior-Partnern in den Unternehmen getroffen. Diese haben oft ein limitiertes Verständnis für die unterliegende Software.
- Softwareentwickler bekommen durch die Teilnahme am Entwicklungsprozess ein breiteres Verständnis für die Funktionsweise und Kommunikation mit anderen Systemen, sodass Regularien und Grenzen der Software besser eingehalten werden können.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/chapter19/media/einfuehrung/StagesOfSystemsEngineering.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 1: Phasen von Systems Engineering.</figcaption>
</figure>

*Abbildung 1* stellt die vier - sich überschneidenen - Phasen in der Lebensdauer eines Enterprise-Systems dar. Weiterhin wird der Zusammenhang und die Interaktion dieser Phasen aufgezeigt, sodass dieses Modell als eine Basis für die Systembeschaffung und -entwicklung dient.

1. Das **Konzeptionelle Design** ist die Anfangsphase. Hier wird in möglichst nicht-technischer Sprache der Zweck des Systems festgehalten und die High-Level-Features (Epic-Features), die Nutzer vom System erwarten können formuliert. Dabei werden Grenzen (für die Systementwickler) gesetzt, wie die Notwendigkeit der Zusammenarbeit mit anderen Systemen.
2. Die **Systembeschaffung** soll zur Entscheidung über Verträge für die Systementwicklung dienen. Dafür muss das konzeptionelle Design hinreichend erarbeitet worden sein, sodass auf Grundlage dessen solche Entscheidungen getroffen werden können. Es muss die Verteilung der Funktionalitäten und Prozesse der Software auf die Hardware beschlossen werden. Dafür muss definiert werden, welche Hardware und Software angeschafft werden muss und Bedingungen der Verträge festgehalten werden. Wird ein System nicht intern entwickelt, müssen ebenfalls mögliche Zulieferer benannt werden.
3. Die **Systementwicklung** beschreibt den genau den benannten Vorgang. Dabei werden Anforderungen definiert und präzisiert. Es findet Hardware- und Softwareengineering statt, sodass Systemintegration und Testphasen durchgeführt werden können.
4. **Systembetrieb und -weiterentwicklung** stellt die letzte Phase des Modells dar. Das bedeutet jedoch keinesfalls, dass die anderen Phasen abgeschlossen sind, sondern ebenfalls fortlaufen. In dieser Phase wird das System als Produktivumgebung eingesetzt und Nutzer geschult. Durch die echte Arbeitsumgebung müssen meist Änderungen durchgeführt werden, um das System an das *echte* Arbeiten anzupassen. Diese werden zuvor als Anforderungen aufgenommen.

Während der gesamten Laufzeit des Systems muss dieses von Fachleuten begleitet werden. Dazu gehören die Endnutzer, die Entwickler für Software, Hardware und des Designs, aber auch Manager, die mit den bereits genannten rechtlichen Belangen auseinandersetzen. Bei besonders umfangreichen und komplexen System ist meist eine noch größere Spannweite an Fachleuten aus verschiedenen Bereichen erforderlich. *Abbildung 2* zeigt hier die technischen Gebiete, die beim Design, der Beschaffung, der Entwicklung und dem Betrieb von Air Traffic Control-Systemen (ATC-Systeme) [[3]](#ref3) einbezogen werden sollten. Hinzu kommen nach Angaben des Europäischen Parlaments in der EU beispielsweise die involvierten Länder und die beteiligten Organisationen wie Luftfahrtbehörden.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/chapter19/media/einfuehrung/DisciplinesInvolvedAirTrafficControl.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 2: Erforderliche Disziplinen bei der Erschaffung von Air Traffic Control-Systemen.</figcaption>
</figure>

Das Einbeziehen von verschiedenen Fachleuten aus den Gebieten ist auf Grund der verschiedenen komplexen Anforderungen unumgänglich. Wenn Fachleute aus den verschiedenen Gebieten zusammenarbeiten, kann es zu Missverständnissen kommen, die aufgelöst werden müssen. Um solche Missverständnisse aufzulösen, muss jedoch die Zeit und das Budget geschaffen werden, um diese diskutieren zu können. Weiterhin sollten die Beteiligten flexibel genug sein, um das System aus verschieden Blickwinkeln betrachten zu können.

- **Sprachbarrieren**: Wenn Ingenieure aus verschiedenen Bereichen miteinander kommunizieren können unterschiedliche Wörter eine gleiche (oder ähnliche) Bedeutung haben. Gleichzeitig kann es sein, dass gleiche Wörter im Kontext des Fachbereichs eine andere Bedeutung aufweisen. Solche Sprachbarrieren müssen durch regelmäßigen Austausch identifiziert und ausgeräumt werden.
- **Voreingenommenheit:** Fachbereiche stellen oft (falsche) Vermutungen über andere Fachbereiche und deren Kompetenzen auf. So sollte beispielsweise ein Elektro-Ingenieur nicht zwingend über die Verwendung von Software im System entscheiden.
- **Einbindung in eigenen Fachbereich:** Die Fachbereiche könnten für gewisse Entscheidungen im Design argumentieren, die die Expertise des eigenen Fachbereichs verlangen. Dabei sollte jedoch stets der Fachbereich für gewissen Prozesse bzw. eine Aufgabe gewählt werden, der diese am Besten und im Bezug auf das oben genannte Beispiel, am zuverlässigsten umsetzen kann.

## Soziotechnische Systeme

Der Begriff *System* wird universal benutzt. So spricht man über Betriebssysteme, Bezahlsysteme oder auch das Bildungssystem. Auch wenn diese Begriffe natürlich das Wort *System* für sich unterschiedlich einsetzen und definieren, so teilen sie doch eine Gemeinsamkeit. Das System ist mehr als nur die Menge der sich zusammensetzenden Teile. Sommerville gibt diesen Systemen eine Definition, die sich wie folgt übersetzen lässt:

> Ein System ist eine zweckbehaftete Sammlung von in einer Beziehung stehenden Komponenten verschiedener Art, die zusammenarbeiten, um dem Systembesitzer und den Nutzern eine gewisse Menge an Diensten bereitzustellen.

Diese allgemeine Definition deckt eine sehr hohe Bandbreite an verschiedenen Systemen ab. Dabei fängt ein System an bei einem simplen Produkt mit wenigen Komponenten - wie einem Laserpointer - an. Bei größeren Systemen, wie bei Air Traffic Control-Systemen, mit einer großen Anzahl an verschiedenen Komponenten, sind diese stark miteinander verwoben und verknüpft. Dabei hängt die korrekte Funktionsweise einer jeden Komponente, von der korrekten Funktionsweise andere Komponenten ab. So kann ein Prozessor beispielsweise nur für Berechnungen eingesetzt werden, wenn die Software für diese Berechnungen korrekt installiert wurde.

Großangelegte Systeme (engl: *large-scale systems*) sind häufig soziotechnische Systeme. Dann spricht man bei ihnen auch von Enterprise-Systemen, die einen gewissen Zweck im Unternehmen erfüllen sollen. Da in so ein großes System viele Personen involviert sind - z.B. Endnutzer, Entwickler, Manager und weitere Stakeholder innerhalb und außerhalb des Unternehmens - kann es schwierig werden, genaue Grenzen des System festzulegen. Jeder involvierte Person sieht die Grenzen des Systems an einer anderen Stelle. Dies muss berücksichtigt werden, da es essentiell ist, was in den Bereich des Systems fällt und was nicht, wenn die Systemanforderungen definiert werden.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/chapter19/media/soziotechnischeSysteme/LayeredStructureOfSociotechnicalSystems.PNG?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 3: Schichten-Struktur eines soziotechnischen Systems.</figcaption>
</figure>

*Abbildung 3* legt das aufgezeigte Problem grafisch dar. Dabei wird ein soziotechnisches System dargestellt, in dem jede Schicht auf eine gewisse Weise zur funktionsweise des Systems beiträgt. Im Kern befindet sich das technische System und seine Prozesse. Doch auch außerhalb des Kerns liegen soziotechnische Faktoren, die das Verhalten beeinflussen. Ob diese Faktoren außerhalb des Kerns als Teil des Systems gesehen werden, hängt vom Unternehmen und den entsprechenden Regularien ab. Ändern sich Unternehmensrichtlinien häufig wäre es sinnvoll sie als Teil des Systems anzusehen. Welche Schichten noch als Bestandteil des Systems gesehen werden lässt sich jedoch nicht allgemeingültig sagen. Viel mehr müssen diese Fragen beim Designprozess des Systems berücksichtigt werden. Dafür muss - soweit wie möglich - das Nutzungsumfeld für das System nachvollzogen werden, da sonst das System nicht oder nur teilweise den eigentlich angedachten Zweck erfüllen kann.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/chapter19/media/soziotechnischeSysteme/OrganizationalElements.PNG?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 4: Mögliche betroffene Gebiete bei der Einführung eines neuen Systems.</figcaption>
</figure>
*Abbildung 4* zeigt Schlüsselelemente, die Anforderungen, Design und Betrieb eines soziotechnischen Systems betreffen können und ggf. selbst betroffen sind. Dabei kann es in manchen oder allen von diesen Bereich zu Änderungen kommen.

- **Prozessänderungen** können dazu führen, dass Personen ihre Arbeitsweise anpassen müssen. In so einem Fall werden Schulungen nötig. Wenn solche Prozessänderungen dazu führen, dass Personen ihren Job verlieren, ist es wahrscheinlich, dass diese die Einführung des neuen Systems ablehnen.
- **Arbeitsänderungen / Jobänderungen** werden ebenfalls durch ein neues System hervorgerufen. Dabei kann ein neues System beispielsweise Ärzten Teile ihrer Arbeit abnehmen. Wenn sich Personen dadurch in ihrer Arbeit eingeschränkt oder degradiert fühlen, lehnen sie das System meist ab.
- **Unternehmensrichtlinien** wie zur Privatsphäre können nicht mit dem neuen System vereinbart werden. Hier sind Änderungen am System, an den Richtlinien oder an Prozessen notwendig, um eine Konsistenz von System und Richtlinien zu erreichen.
- **Unternehmenspolitische Änderungen** können durch das System hervorgerufen werden. Wenn das System große Teile des Unternehmens steuert, haben solche mit Zugriff und Erfahrung in diesem System eine erhöhte politische Macht. 

Soziotechnische Systeme sind so komplex, dass es im Voraus praktisch unmöglich ist diese komplett zu verstehen. Dadurch sind solchen Systemen drei entscheidende Eigenschaften zuzuordnen:

1. Sie haben emergente Eigenschaften. Emergente Eigenschaften in einem System sind solche Eigenschaften, die das System selbst besitzt, obwohl keine der Komponenten diese hat. Dabei hängen sie von den Systemkomponenten, aber auch den Beziehungen zwischen ihnen ab. Manche tauchen erst bei der Einführungen und dem Betrieb des Systems auf, sodass sie erst hier betrachtet werden können.
2. Sie sind nicht-deterministisch, sprich sie geben nicht zwingend bei der gleichen Eingabe die gleiche Ausgabe. Das Verhalten hängt ebenso vom Benutzer ab und ein fortlaufender Betrieb kann neue Beziehungen zwischen einzelnen Komponenten erschaffen / erfordern.
3. Die Erfolgskriterien des Systems sind als subjektiv einzuordnen. Dabei hängt der Erfolg nicht nur vom System selbst ab, sondern auch von Konflikten, Beziehungen und Stabilität der zu erreichenden Ziele. Unterschiedliche Abteilungen können dabei die Ziele jeweils anders interpretieren.

Auf Grund der soziotechnischen Faktoren ist es nicht leicht zu ermitteln, ob ein System seine gesetzten Ziele erreicht. Besonders, dann wenn die Ingenieure  wenig Erfahrung in den benötigten sozialen und kulturellen Feldern haben. Hier hilft es, sich die Methoden für die soziotechnische Auswertung anzuschauen [[4]](#ref4).

### Emergente Eigenschaften

Emergente Eigenschaften können keiner spezifischen Komponente des Systems zugeschrieben werden, sondern werden sichtbar sobald die Komponenten integriert wurden und mit einander in Verbindung stehen. Die folgende Tabelle zeigt einige Beispiele für emergente Eigenschaften.

| Eigenschaft            | Beschreibung                                                 |
| ---------------------- | ------------------------------------------------------------ |
| Zuverlässigkeit        | Die Zuverlässigkeit des Systems hängt zwar von der Zuverlässigkeit der einzelnen Komponenten ab, doch unerwartete Interaktionen können neue Fehler hervorrufen und die Zuverlässigkeit des Systems beeinträchtigen. |
| Reparierbarkeit        | Diese Eigenschaft beschreibt wie leicht es ist Probleme zu beheben. Diese hängt von der Zugänglichkeit zu den Komponenten, der Diagnostizierbarkeit und der Einfachheit diese Probleme zu beheben ab. |
| Sicherheit             | Die Sicherheit eines Systems kann nicht so einfach gemessen werden. Sie hängt von der Fähigkeit ab, Attacken abzublocken und nicht entdeckte Sicherheitslücken schnell und effizient zu füllen. |
| Benutzerfreundlichkeit | Benutzerfreundlichkeit beschreibt die Einfachheit in der Bedienung des Systems. Diese hängt von den Komponenten, den Anwendern und der Betriebsumgebung ab. |
| Größe / Ausmaß         | Die Größe bzw. das Ausmaß eines Systems hängt von der Komponentenanordnung und deren Verbindungen ab. |

Es wird zwischen zwei Arten von emergenten Eigenschaften unterschieden:

1. **Funktionale emergente Eigenschaften** tauchen auf nachdem die Komponenten eines Systems integriert wurden. Ein Computer hat beispielsweise die Möglichkeit Software auszuführen, nachdem dieser aus den Komponenten zusammengebaut wurde.
2. **Nicht-funktionale emergente Eigenschaften** beziehen sich auf das Verhalten eines Systems in dessen Betriebsumgebung. Zuverlässigkeit, Reparierbarkeit etc. sind Beispiele hierfür. Wenn ein gewisses Level für diese Eigenschaften nicht erreicht wird, kann ein sicherer Betrieb des Systems nicht gewährleistet werden. Sollte <u>kein</u> Nutzer eine gewisse Eigenschaft benötigen, kann diese Eigenschaft dann vernachlässigt werden. Bei großen Enterprise-Systemen ist davon allerdings nicht auszugehen.

Emergente Eigenschaften, wie beispielsweise Zuverlässigkeit, hängen wiederum von den Eigenschaften der einzelnen Komponenten und deren Interaktionen sowie Beziehungen ab. Die Zuverlässigkeit wird dabei von drei Unterkategorien der Zuverlässigkeit beeinflusst. Diese sind die Zuverlässigkeit der Hardware, die Zuverlässigkeit der Software und die Zuverlässigkeit der Benutzer. *Abbildung 5* zeigt wie sich Fehler auf einem dieser Level auf andere ausbreiten können. Hardwarefehler können sich auf die Software auswirken, sodass das diese nicht mehr ordnungsgemäß funktioniert, woraus eine Verwirrung oder Stress beim Nutzer entsteht.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/chapter19/media/soziotechnischeSysteme/FailurePropagation.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 5: Ausbreitung von Fehlern auf andere Schichten.</figcaption>
</figure>

Die Zuverlässigkeit eines Systems hängt auch vom Kontext ab, in dem es genutzt wird. Doch dieser Kontext kann nicht immer komplett spezifiziert werden. Wenn ein System dafür ausgelegt ist bei Raumtemperatur zu arbeiten, können Temperaturen außerhalb eines gewissen Bereichs für unvorhersehbares Verhalten sorgen. Wenn nun eine Klimaanlage für eine gewisse Temperatur zuständig ist, ist das System von einem anderen externen System - der Klimaanlage - abhängig. Emergente Eigenschaften können somit oft nur erfasst und berücksichtigt werden - vor allem auftretende Fehler - wenn das System in Betrieb genommen wurde. Wichtig ist einen möglichst guten Zugang zu diesen Aspekten zu planen.

### Nichtdeterminismus

Ein deterministisches System ist absolut vorhersehbar und berechenbar. Software-Systeme, die auf zuverlässiger, robuster Hardware laufen, werden als deterministisch angesehen und geben bei gleichem Input immer den gleichen Output. Menschen sind auf hingegen nicht deterministisch. Wenn eine Person 20 mal eine relativ komplexe Aufgabe bekommt, aber immer die gleiche, ist es unwahrscheinlich, dass sie jedes mal dasselbe Ergebnis liefert. Soziotechnische Systeme sind also auch nicht deterministisch, weil Personen teil dieses Systems sind aber auch weil Änderungen an Software, Hardware und den Daten so häufig vorgenommen werden.

Wenn ein System 20 Testeingaben erhält und die Ergebnisse aufgezeichnet werden, kann dann von einem Fehler gesprochen werden, wenn bei einem zweiten Testdurchlauf fünf dieser Ergebnisse abweichen? Das muss nicht zwingend der Fall sein, denn bei genauem Betrachten der Ergebnisse kann es durchaus gute Gründe für die Abweichungen geben. Nichtdeterminismus wird häufig als etwas schlechtes Betrachtet. Dabei bietet diese Eigenschaft gewisse Vorzüge. Es bedeutet, dass das Verhalten eines Systems nicht für alle Zeit statisch ist, sondern sich entsprechend der Systemumgebung anpassen kann.

### Erfolgskriterien

Soziotechnische Systeme werden entwickelt, um gefährliche oder starke Probleme (engl: *wicked problems* [[5]](#ref5)) zu lösen. Solche Probleme sind so komplex und haben derart viele Entitäten, dass keine endgültige Spezifikation vorgenommen werden kann. Dabei sehen verschiedene Stakeholder das Problem auf verschiedene Weisen, doch niemand besitzt ein Verständnis für das Problem als Ganzes. Meist wird das Problem als solches er erfasst, wenn eine Lösung entwickelt wird.

Sommerville gibt als Beispiel die Nachwirkungen eines Erdbebens. Niemand weiß wo so ein Erdbeben genau vorkommen wird, zu welcher Zeit und welche Auswirkungen es haben wird. Dadurch wird es unmöglich genau im Vorfeld festzulegen, wie mit dem Problem umgegangen werden kann. So ist es auch schwierig genaue Erfolgskriterien festzulegen. Wie kann entschieden werden, ob ein System dem Unternehmen, das es bestellt hat beim erreichen seiner Ziele hilft? Da solche Dinge nicht im Voraus festgestellt werden können, ergibt es mehr Sinn, beim Systembetrieb zu entscheiden, ob das System effektiv ist.

Wenn in den frühen Phasen des Systementwicklungsprozesses Erfolgskriterien festgelegt wurden, müssen diese im weiteren Verlauf regelmäßig kritisch begutachtet und ggf. angepasst werden. Eine objektive Auswertung der Kriterien ist dabei schwierig, da es für gewisse Nutzer hilfreich sein kann, wenn es für andere praktisch nutzlos ist. Gleichermaßen kann ein System seine gesetzten Anforderungen erfüllen, aber innerhalb der eingesetzten Umgebung keinen Mehrwert bieten.

## Konzeptionelles Design

Sobald eine Idee für ein System vorgeschlagen wurde, besteht der erste Schritt im Systemengineering aus dem Erschaffen des konzeptionellen Design. Dabei wird die Idee auf die Durchführbarkeit untersucht und eine allgemeine Vision des Systems entwickelt. Danach muss das System für Personen, die nicht als Experten gelten, beschrieben werden. Dazu zählen Nutzer, Politiker und Entscheidungsträger.

Innerhalb dieses Prozesses mit deutlich werden, wie das System künftig genutzt werden soll. Dafür müssen Diskussionen mit den beschriebenen Personen geführt werden und untersucht werden, wie aktuell bestehende Systeme genutzt werden. Ziel ist es zu verstehen, wie die Nutzer arbeiten und welche praktikablen Grenzen das System haben könnte. In Militärbereichen gehört seit Jahren eine Konzeptanalyse und die Dokumentation der Ergebnisse dieser Analyse dazu. Das entstehende Dokument wird als *Concept of Operations (ConOps)* bezeichnet und wird für viele groß-skalierende Systeme verwendet. Auf Grund einer hohen Hürde in Sachen von Bürokratie und Regierungssystemen wurde für die flexiblere Umsetzung ein Standard hierfür vorgeschlagen *(IEEE, 2007)*.

<figure style="text-align: center;">
    <img src="https://github.com/mwithoeft/SGSE22/blob/main/chapter19/media/konzeptionellesDesign/ConceptualDesignActivities.png?raw=true" style="border: 3px solid black; border-radius: 5px;" />
    <figcaption>Abbildung 6: Aktivitäten im konzeptionellen Design.</figcaption>
</figure>

*Abbildung 6* zeigt Aktivitäten, die Teil des Designprozesses sein können. Dieser Prozess sollte immer im Team angegangen werden, welches mit Personen aus verschiedenen Arbeitsbereichen erstellt wurde. Die Formulierung des Konzepts ist die erste Phase im Prozess, sodass Bedürfnisse und Art des Systems festgelegt werden, die den Anforderungen der Stakeholder nachkommen. So kann es vorkommen, dass anfänglich angedachte Anforderungen verworfen werden müssen und nach solchen Gesprächen angepasst oder komplett neue formuliert werden. Hierfür muss während der Gespräche die Arbeitsweise der Stakeholder, vor allem der Nutzer, verstanden werden und wie das System ihre Arbeit verbessern und erleichtern kann. Dieser Schritt gehört bereits zur Phase Verstehen des Problems.

In der nächsten Phase zeigt das Designteam seine Ideen für alternative Systeme, die die Basis für eine Machbarkeitsstudie darstellen. So kann festgestellt werden, welche Ideen für die weitere Entwicklung in Betracht gezogen werden. Während der Machbarkeitsstudie sollten vergleichbare, bereits entwickelte Systeme, angeschaut werden und dort aufgedeckte Probleme einbezogen werden. Dann muss ausgewertet werden, ob das System mit aktueller Hardware und Software realisierbar ist. Eine weitere Aktivität besteht aus der Skizzierung einer Architektur für das System. Diese hilft der Machbarkeitsstudie selbst, aber dient auch der späteren Umsetzung als Hilfsmittel. Dadurch werden direkt Schlüsselkomponenten identifiziert und können separat beschafft werden, was sicherer ist, als alle Komponenten von einem Zulieferer zu bekommen.

Alle Komponenten des Systems sollten als ersetzbare Dienste angesehen werden. So wird ggf. das System nachträglich besser auf aufkommende Bedürfnisse angepasst. Alle Informationen aus den verschiedenen Aktivitäten finden ihren Weg in das Dokument. Dieses Dokument ist ein kritischer Bestandteil, das die Entscheidungsträger nutzen, um den Fortlauf des Projekts zu bestimmen. Anhand dessen können Risikoanalysen durchgeführt und Budgetberechnungen angestellt werden. Weil verschiedene Stakeholder verschiedene Detailierungsgrade des Systems benötigen, sollte es in zwei Teile strukturiert sein:

1. Eine kurze Zusammenfassung der Kernelemente, die den Entscheidungsträgern Probleme und Komponenten des Systems darlegt. Es wird so geschrieben, dass Leser direkt erkennen, wie das System genutzt werden und welche Vorteile es bietet.
2. Eine Reihe von Anhängen, die die Ideen mit mehr Details darstellen und die für Systembeschaffung und -anforderungen genutzt werden.

Es stellt eine große Anforderung dar, die Zusammenfassung auf eine Weise zu schreiben, dass Personen ohne technischen Hintergrund nicht abhängt. Hierfür bieten sich *User Stories* an, die eine anschauliche Vision darstellen und solche Personen nachvollziehen können. Solche Stories sollten kurz gefasst sein und eine praktikable Beschreibung des Systems liefern. Weiterhin zeigen sie die Möglichkeiten des Systems durch einfache, deutliche Beispiele auf. User Stories sind Teil des *ConOps*, das aber trotzdem Beschreibungen auf einer höheren, technischeren Ebene beinhalten muss, um den Wert des Systems für das Unternehmen zu verdeutlichen.

## Systembeschaffung



## Systementwicklung

## Systembetrieb und -weiterentwicklung



## Referenzen

<span id="ref1">[1]: *Ian Sommerville. 2015.* *Software Engineering* *(10th. ed.). Pearson.*</span>

<span id="ref2">[2]: *White, S., et al.* *Systems Engineering of Computer Based Systems.* *IEEE Computer, November, 1993.*</span>

<span id="ref3">[3]: *["CIVILIAN AND MILITARY AIR TRAFFIC CONTROL IN THE EU"](https://www.europarl.europa.eu/meetdocs/committees/rett/20020121/297568EN.pdf) (PDF). November, 2001.*</span>

<span id="ref4">[4]: *Gordon Baxter, Ian Sommerville, Socio-technical systems: From design methods to systems engineering, Interacting with Computers, Volume 23, Issue 1, January 2011.*</span>

<span id="ref5">[5]: *Rittel, H.W.J., Webber, M.M. Dilemmas in a general theory of planning. Policy Sci 4, 155–169, 1973.*</span>



