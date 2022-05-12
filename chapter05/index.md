# System Modellierung

**Autor:** Christiane Zolkin



## Einführung

Unter Systemmodellierung versteht man den Prozess, Systeme durch die Entwicklung von abstrakten Modellen zu repräsentieren. Dazu werden die verschiedenen Perspektiven eingenommen, unter denen ein System betrachtet werden kann. Diese setzen sich aus den folgenden Perspektiven zusammen:

1. Die externe Perspektive
2. Die Interaktionsperspektive
3. Die strukturelle Perspektive
4. Die Verhaltensperspektive

Solche Modelle werden häufig durch eine graphische Notation erfasst. Die Unified Modeling Language (UML) stellt dazu 13 standardisierte Diagramme zur Verfügung, welche dafür genutzt werden können, die unterschiedlichen Perspektiven auf ein System abzubilden. Aus einer Umfrage ging jedoch hervor, dass 5 UML-Diagramme ebenfalls ausreichen, um die wesentlichen Aspekte des Systems zu erfassen:

1. Aktivitätsdiagramme
2. Use-Case-Diagramme
3. Sequenzdiagramme
4. Klassendiagramme
5. Zustandsdiagramme

Die Systemmodellierung kann während der Anforderungs-Engineering Prozesses erfolgen, um die Anforderungen des Systems zu ermitteln. Während des Design-Prozesses ist es ebenfalls hilfreich, um das System für Stakeholder auf anschauliche Weise zu beschreiben. Aber auch nach der Implementierung des Systems kann die Systemmodellierung genutzt werden, damit eine detaillierte und übersichtliche Dokumentation der Struktur und Funktionalität erstellt werden kann. 

Unterschieden wird zwischen der Modellierung bereits existierender oder angestrebter Systeme.

## Kontextmodelle

Um ein System zu entwerfen, ist es wichtig frühzeitig festzulegen, welche Prozesse und Operationen innerhalb der Systemumgebung auszuführen sind. Dazu sollten auch bereits vorhandene Systeme betrachtet werden, um redundante Funktionalitäten auszuschließen und mögliche Verbindungspunkte zu schaffen. Die Grenzen des Systems innerhalb der Umgebung sollen daher definiert werden. Dabei kann es sich um eine klare Abgrenzung handeln, allerdings kann es oftmals vorkommen, dass flexible Grenzen anzustreben sind, welche die Möglichkeit der Anpassung auf die Bedürfnisse der Nutzer bieten.

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/ContextModel.png?raw=true" alt="ContextModel" style="zoom:80%;" />

Was in dieser Phase der Systemmodellierung also angestrebt wird, ist die Definition des Systemkontextes. Abhängigkeiten oder Beziehungen innerhalb dieser Umgebung können mithilfe eines Kontextmodells erfasst werden. Dieses bietet einen guten Überblick über alle Komponenten der Umgebung, jedoch wird die jeweilige Art der Beziehung zwischen zwei Systemen nicht ersichtlich. Für die Ermittlung der Anforderungen und das Design des Systems ist es aber notwendig, die spezifischen Interaktionen und Beziehungen zu kennen. Aus diesem Grund werden häufig weitere Modelle herangezogen, welche die Prozesse abbilden können. 

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/ActivityDiagram.png?raw=true" alt="ActivityDiagram" style="zoom:70%;" />

UML Aktivitätsdiagramme bieten einen guten Rahmen, um Beziehungen zwischen Systemen, Prozesse und Aktivitäten zu abstrahieren. Dazu wird Gebrauch von folgenden Elementen gemacht:

| Element                     | Bedeutung                                         |
| --------------------------- | ------------------------------------------------- |
| Ausgefüllter Kreis          | Beginn des Prozesses                              |
| Ausgefüllter Kreis mit Ring | Ende des Prozesses                                |
| Rechteck mit runden Ecken   | Aktivität                                         |
| Pfeil                       | Arbeitsfluss von einer Aktivität zu einer anderen |
| Balken                      | Koordination von Aktivitäten                      |


## Interaktionsmodelle

Verschiedene Interaktionstypen sind in jedem System vertreten. Beispielsweise finden Interaktionen zwischen dem Nutzer und dem System in Form von Eingaben und Ausgaben statt. Doch wie bereits aus dem vorigen Kapitel hervorgegangen ist, sind auch Interaktionen zwischen Systemen präsent, sowie zwischen Komponenten innerhalb eines Systems. 

Indem die Nutzerinteraktionen modelliert werden, können Anforderungen auf einfache Weise ermittelt werden. Modelle von Systeminteraktionen können mögliche Kommunikationsschwierigkeiten zwischen Systemen identifizieren und die Modellierung von Interaktionen zwischen Systemkomponenten kann Auskunft über die Performanz des Systems und vorhandene Abhängigkeiten geben.

Diese Interaktionen können anhand von zwei UML-Diagrammen abgebildet werden:

1. Use-Case-Diagramme
2. Sequenzdiagramme

Dabei fokussieren sich Use-Case-Diagramme weitestgehend um Interaktionen zwischen dem System und externen Objekten, wohingegen Sequenzdiagramme hauptsächlich Interaktionen zwischen Systemkomponenten modellieren. Doch auch externe Objekte können in dieses Modell vertreten werden. Die zwei Diagramme geben die Abstraktion dieser Interaktionen in unterschiedlichem Detailgraden wider, weshalb die Nutzung der beiden in Kombination sinnvoll ist. 

### Use Case Modellierung

Use-Cases stellen bestimmte Aufgaben dar, welche erreicht werden sollen, wenn ein Aktor mit dem System interagiert. Eine Modellierung der Use-Cases in den frühen Stadien des Systemdesigns ist also ausschlaggebend, um frühzeitig Anforderungen zu identifizieren.

UML-Use-Case-Diagramme bieten eine einfache und übersichtliche Notation, um diese Aufgaben zu erfassen. Die folgenden Elemente sind dafür in dem Diagramm vorhanden:

| Element        | Bedeutung   |
| -------------- | ----------- |
| Strichmännchen | Aktor       |
| Ellipse        | Use-Case    |
| Strich         | Interaktion |



<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/UseCases.png?raw=true" alt="UseCases" style="zoom:80%;" />

Die Abbildung zeigt ein Beispiel für eines Use-Case-Diagrammes, welches mehrere Use-Cases aufweist. Der Aktor ist medizinischer Rezeptionist, welche in Interaktion mit dem System die aufgezeigten Aufgaben bewältigen kann. Die Verbindungen zu den einzelnen Use-Cases stellen dabei einen Nachrichtenfluss in beide Richtungen dar - von Aktor zu System und von System zu Aktor.

In manchen Fällen ist es möglich, alle vorhandenen Use-Cases in dem Diagramm wiederzugeben. Allerdings kann es auch vorkommen, dass dies aufgrund einer zu hohen Anzahl von Use-Cases nicht mehr möglich ist. In diesem Fall können mehrere Diagramme erstellt werden, wobei auf die Komplexität der Modelle geachtet werden muss, um das Verständnis dieser beizubehalten.

Aufgrund der einfachen Darstellung bedarf es an Details, die dem Diagramm hinzuzufügen sind. Je nach Erklärungsbedarf des Use-Cases kann dies in Form von Text, Tabellen oder Sequenzdiagrammen erfolgen.

### Sequenzdiagramme

Sequenzdiagramme werden dazu genutzt, Interaktionen zwischen Aktoren und Systemobjekten, sowie zwischen Systemobjekten untereinander abzubilden. Es stellt also eine detailliertere Form der Interaktionsmodellierung dar. Hierfür wird ein spezifischer Use-Case näher betrachtet, um die dort durchzuführenden Interaktionssequenzen in dem Diagramm wiederzuspiegeln. Ein Sequenzdiagramm setzt sich aus folgenden Elementen zusammen:

| Element                                              | Bedeutung                                                    |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| Obere Reihe bestehend aus Strichmännchen, Rechtecken | Aktoren und Objekte                                          |
| Balken unterhalb von Aktoren/Objekten                | Lebenslinie                                                  |
| Annotierte Pfeile zwischen Objekten                  | Funktionsaufrufe mit Parametern und Rückgabewert             |
| alt-Box                                              | Fallunterscheidung (unterschiedliche Fälle in eckigen Klammern) |



![SequenceDiagram](https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/SequenceDiagram.png?raw=true)

## Strukturmodelle

Innerhalb von Strukturmodellen sollen Systemkomponenten und deren Beziehungen zueinander in organisierter Form erfasst werden. Dabei kann es sich sowohl um statische, als auch flexible Modelle handeln. Statische Modelle bilden hierbei die Organisation der Systemkomponenten ab, während dynamische diese Struktur zur Laufzeit des Systems erfasst.

Die Strukturmodellierung kann einerseits die grobe Systemarchitektur festhalten, doch auch detailliertere Diagramme können Informationen über Systemobjekte und ihre Beziehungen untereinander liefern. Dies kann über die Nutzung von Klassendiagrammen erfolgen.

### Klassendiagramme

Die in einem System vorhandenen Objekte und ihre Beziehungen zu anderen Objekten lassen sich mithilfe von Klassendiagrammen widerspiegeln. Demnach kann man lediglich Gebrauch davon machen, wenn es sich hierbei um ein objektorientiertes Systemmodell handelt.

In den frühen Phasen der Systemmodellierung stellen diese Objektklassen zunächst Elemente aus der Realität dar. Es wird versucht, die wesentlichen Komponenten innerhalb eines Systems zu identifizieren und diese in Relation zu bringen. Dies erfolgt zunächst grobgranular, indem die Objekte als Rechteck mit dem entsprechenden repräsentiert werden. Mit Verbindungslinien werden nun Beziehungen kenntlich gemacht, wobei diese anhand von Beschreibungen und Multiplizitäten spezifiziert werden können. Diese Art der Modellierung erinnert an semantische Datenmodelle, in denen Entitäten, dessen Attribute und Relationen zueinander aufgeführt sind. Mit einer solchen Abbildung kann die Grundstruktur von Systemobjekten übersichtlich erfasst werden.

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/ClassesAndAssociations.png?raw=true" alt="ClassesAndAssociations" style="zoom:80%;" />



Allerdings ist es ebenso sinnvoll, die Eigenschaften und Funktionen der einzelnen Klassenobjekte zu beschreiben. Dazu wird das Rechteck der Klasse in drei Abschnitte unterteilt:

1. Der obere Abschnitt enthält den Namen der Klasse
2. Der mittlere Abschnitt enthält die Attribute der Klasse
3. Der untere Abschnitt enthält die Funktionen/Operationen der Klasse



<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/Class.png?raw=true" alt="Class" style="zoom:80%;" />

### Generalisierung

In der Realität kommt es häufig vor, dass unterschiedliche Objekte gleichsame Eigenschaften aufweisen. Um die Komplexität zu verringern und reduntante Informationen zu vermeiden, werden derartige Objekte einer Klasse untergeordnet, und somit die Eigenschaften der übergeordneten Klasse erben. 

In dem praktischen Beispiel in der Abbildung lässt sich erkennen, dass es sich sowohl bei dem 'Hospital doctor' als auch dem 'General practitioner' um einen 'Doctor' handelt. Sie weisen also die Eigenschaften und Funktionen eines Doktors auf und können ebenso zusätzliche Informationen enthalten.

Für die Modellierung des Systems ist es notwendig, solche Generalisierungen zu identifizieren und entsprechend grafisch zu erfassen. Dies reduziert redundante Informationen und kapselt die Daten sinnvoll, sodass Änderungen an diesen nur an einer Stelle zu unternehmen sind. Für diesen Fall bietet das UML-Klassendiagramm eine Generalisierungsassoziation, welche mit einem unausgefüllten Pfeil am Ende einer Verbindungslinie dargestellt wird. Überlicherweise werden erbende Klassen unterhalb der vererbenden Klasse dargestellt. Der Pfeil zeigt in die Richtung des Klassenelements, welche seine Eigenschaften und Operationen an die unterliegende Klasse vererbt.

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/HierarchicalClasses.png?raw=true" alt="HierarchicalClasses" style="zoom:80%;" />

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/DetailedHierarchicalClasses.png?raw=true" alt="DetailedHierarchicalClasses" style="zoom:80%;" />

### Aggregation

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/Aggregation.png?raw=true" alt="Aggregation" style="zoom:80%;" />

Es kommt in der Modellierung von Systemen häufig vor, dass einige Objekte sich aus weiteren Objekten zusammensetzen. Diese Art von Beziehung nennt sich Aggregation und wird in einem UML-Klassendiagramm anhand einer Diamantenform am Ende einer Verbindungsstelle zweier Klassen gekennzeichnet. In der Abbildung erkennt man die Klasse *Patient record*, welche sich aus den Informationen aus *Patient*, sowie die der *Consulation* zusammensetzt.



## Verhaltensmodelle 

Um das Verhalten eines laufenden Systems bei bestimmten Stimuli zu illustrieren, können Verhaltensmodelle herangezogen werden. Je nach System werden Abläufe durch Daten oder Ereignisse stimuliert, weshalb man anhand dessen die Art der Modellierung auswählt: **Datengesteuerte** bzw. **Ereignisgesteuerte** Modellierung. Prozesse innerhalb datengesteuerter Systeme werden hierbei durch vorhandene Daten initiiert, welche eine Reihe von Verarbeitungen durchlaufen, sodass anschließend eine Ausgabe vom System erfolgen kann. Dies ist beispielsweise häufig in Geschäftssystemen der Fall. Prozesse ereignisgesteuerter Systeme werden hingegen durch bestimmte Ereignisse ausgelöst, was häufig in Echtzeitsystemen der Fall ist. Basierend auf dieser Unterscheidung kann nun die entsprechende Modellierungsart und passende UML-Repräsentationen gewählt werden.



### Datengesteuerte (Data-Driven) Modellierung

Mithilfe von datengesteuerten Modellen können Abläufe der Verarbeitung der eingehenden Daten bis zu deren Ausgabe visualisiert werden. Dadurch können schnell Anforderungen identifiziert werden, da die gesamte Sequenz der Prozessaktivitäten abgebildet wird.

Datengesteuerte Modelle waren bereits in den 1970er Jahren verbreitet, was sie zu einer der ersten grafischen Modelle macht, die in der Softwaremodellierung zum Einsatz kamen. Sogenannte *Data-Flow-Diagrams* (DFDs) stellten dabei einfache und intuitive Abbildungen dar, um den Datenfluss in Prozessen für alle Stakeholder verständlich erklären zu können. In UML können DFDs unter anderem als Aktivitätsdiagramm mithilfe der gegebenen Elemente umgesetzt werden:



| Element               | Bedeutung                  |
| --------------------- | -------------------------- |
| Abgerundetes Rechteck | Aktivität (Prozessschritt) |
| Rechteck              | Objekt (Daten)             |
| Pfeil                 | Datenfluss                 |

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/Behaviour_ActivityModel.png?raw=true" alt="Behaviour_ActivityModel" style="zoom:70%;" />



Doch auch mit Sequenzdiagrammen können DFDs dargestellt werden. Werden die Nachrichten zwischen Objekten ausschließlich von links nach rechts überliefert, wird so die sequentielle Abfolge des Datenflusses illustriert (siehe Abbildung).



<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/Behaviour_SequenceDiagram.png?raw=true" alt="Behaviour_SequenceDiagram" style="zoom:70%;" />



### Ereignisgesteuerte (Event-Driven) Modellierung

Einige Systeme wie beispielsweise Echtzeit-Systeme treten häufig externe oder interne Ereignisse auf, die das System in einen neuen Zustand aus einer endlichen Menge von Zuständen versetzen können. Zur Veranschaulichung der Systemabläufe bei spezifischen Ereignissen können hierbei von UML-Zustandsdiagrammen Gebrauch gemacht werden. In diesem Diagramm werden die unterschiedlichen Zustände des Systems aufgeführt, sowie die Übergänge zwischen den Zuständen. Ein Wechsel findet dabei zwischen zwei Zuständen statt, sobald das Ereignis welche den Übergang kennzeichnet, eintritt.

Ein UML-Zustandsdiagramm setzt sich aus den folgenden Elementen zusammen:

| Element                  | Bedeutung                                           |
| ------------------------ | --------------------------------------------------- |
| Abgerundetes Rechteck    | Zustand                                             |
| Gefüllter Kreis          | Anfangszustand                                      |
| Gefüllter Kreis mit Ring | Endzustand                                          |
| Pfeil                    | Übergang zwischen zwei Zuständen (in Pfeilrichtung) |
| Pfeilbeschreibung        | Ereignis                                            |



<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/StateDiagram.png?raw=true" alt="StateDiagram" style="zoom:60%;" />



In einigen Zuständen werden Operationen definiert, welche auszuführen sind, sobald der Zustand aktiv ist. Diese können in dem Zustand unterhalb des Namens beschrieben werden, indem das Kennwort 'do:' der Operationsbeschreibung vorangeschrieben wird.

<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/SuperStateDiagram.png?raw=true" alt="SuperStateDiagram" style="zoom:60%;" />

Oftmals sind innerhalb eines Systems eine Vielzahl von möglichen Zuständen vorhanden, was die grafische Erfassung dieser erschwert. Aus diesem Grund ist es auch hierbei sinnvoll, mehrere Zustandsdiagramme mit unterschiedlichem Detailgrad zu erstellen. Hierfür können sogenannte *Superzustände* genutzt werden, welche mehrere Zustände kapseln können, sodass diese für grobgranulare Diagramme zur Verfügung stehen. Die Superzustände werden dort als einfacher Zustand dargestellt, sollten dann aber in weiteren Diagrammen detaillreicher erfasst sein.

Zustandsdiagramme schenken einen guten Überblick über die Reaktionen des Systems bei gewissen Ereignissen, doch ist es ebenso sinnvoll, die unterschiedlichen Zustände und Ereignisse im Detail zu erläutern. Dafür kann eine tabellarische Dokumenation erfolgen, in der jedem Zustand und jedem Ereignis eine ausführliche Erklärung beigefügt wird. 

## Modellbasierte Entwicklung

Innerhalb der modellgesteuerten Entwicklung (Model-driven engineering) als Entwicklungsergebnis die Modellierung des Systems angestrebt [2], anstatt die Implementierung des Systems, da der Programmcode automatisch basierend auf den Systemmodellen generiert werden soll. Diese Idee basiert auf dem Konzept der modellbasierten Architektur, und wurde als neuer Ansatz für die Systementwicklung der *Object Management Group* (OMG) [3] eingeführt. Der Unterschied zu der modellgesteuerten Architektur liegt allerdings darin, dass alle Aspekte des Entwicklungsprozesses betrachtet werden. Modellbasierte Anforderungsanalysen, Softwareprozesse für modellbasierte Entwicklung und modellbasiertes Testen gehören dadurch zu dem Prozess des MDEs, während sich MDA auf die Design- und Implementierungsphasen konzentriert.

## Modellbasierte Architektur

Mit dem Konzept der modellbasierten Architektur (Model-driven architecture) wird die Idee verfolgt, automatisch Programme für ein System basierend definierten Modellen zu generieren. Das angestrebte System kann mithilfe von UML-Modellen auf verschiedenen Abstraktionsebenen beschrieben werden, sodass lauffähige Software mithilfe bestimmter Tools entsteht und Ingenieure sich auf den Design- und Modellierungsprozess des Systems fokussieren können, ohne sich über die Implementierung Gedanken machen zu müssen. Die verschiedenen Abstraktionsebenen sollen dabei die einfache Veränderbarkeit und Wartbarkeit der Systemprogramme ermöglichen, da Änderungen der Modelle automatisch in die Programme übernommen werden. In der Theorie werden Fehler im System dadurch reduziert, sowie der Design- und Implementierungsprozess beschleunigt. Außerdem können plattformunabhängige Modelle wiederverwendet werden, um diese in plattformspezifische Modelle zu übersetzen, aus denen letztendlich die Softwareprogramme entstehen.



<img src="https://github.com/mwithoeft/SGSE22/blob/czolkin/chapter05/chapter05/img/MDA.png?raw=true" alt="MDA" style="zoom:60%;" />



Um dieses Konzept umzusetzen, werden insbesondere drei Modelle angestrebt, die es zu erstellen gilt:

1. Das *Computation independent model* (CIM)
2. Das *Platform independent model* (PIM)
3. Das *Platform specific model* (PSM)

Das CIMs werden auch als Domänenmodelle, da diese die Abstraktionen der Domäne des Systems modelliert. Dafür können mehrere CIMs für ein System entwickelt werden, indem das System unter verschiedenen Blickpunkten betrachtet wird. 

Ein PIM modelliert die Funktionsweise des Systems auf abstrakter Ebene, ohne auf die Implementierung einzugehen. Dort werden häufig UML-Diagramme herangezogen, um die statische Struktur des Systems zu beschreiben, sowie dessen Verhalten bei internen und externen Ereignissen abzubilden.

PSMs stellen hierbei die Spezifikation des PIMs dar. Mehrere PSMs werden für ein spezifisches PIM erstellt, um eine Modellierung zu erhalten, die für die gewünschte Applikationsplattform angepasst wird. Werden mehrere Endplattformen des Systems gewünscht, müssen entsprechend viele PSMs kreiirt werden. Dabei wird ein PSM oftmals in mehrere Schichten unterteilt, um schrittweise die notwendigen Details für die Plattform auszulegen. Ein Level könnte sich auf die Modellierung der Middleware fokussieren, während das nächste sich auf die Datenbank-spezifische Modellierung konzentriert.

Mithilfe von Übersetzern sollen Transformationen zwischen den drei Modellarten automatisiert ermöglicht werden, wobei die letzte Transformationsstufe basierend auf den PSMs stattfindet, und den Programmcode für das System produziert. In der Theorie ist dies ein effektives Konzept für die Systementwicklung, und einige Erfolgsgeschichten dadurch hervor, doch in der Praxis können auch häufig Komplikationen auftreten, die die Umsetzung der modellgesteuerten Architektur erschweren.

### Probleme

Modellgesteuerte Architektur ist in der Realität nur beschränkt einsetzbar, und für einige Unternehmen lohnt es sich kosten- und zeittechnisch nicht, dieses Verfahren zu etablieren. In der Theorie sollte die automatisierte Übersetzung von abstrakten Systemmodellen zu Programmen möglich sein, doch in der Praxis erscheinen oftmals Fehler, die diese Möglichkeit sehr einschränken. Die Übersetzung von CIMs zu PIMs erweist sich als sehr komplex, und einige Verbindungen zwischen unterschiedlichen CIM-Modellen erfordern häufig einen menschlichen Eingriff.

Die Übersetzung von PIMs zu PSMs wird technisch oft von Übersetzungstools unterstützt, beschränkt sich jedoch auf den Einsatz der Standardumgebung der spezifischen Plattform. In der Realität werden in Unternehmen jedoch häufig Gebrauch von internen Tools und Libraries gemacht, welche bei der Übersetzung miteinzubeziehen sind. Aus diesem Grund ist es notwendig, spezielle Übersetzer zu entwickeln, welche auf die Bedürfnisse des Unternehmens angepasst werden können, was sich der angestrebten Kosten- und Zeiteffizienz entgegensetzt.

Außerdem ist es nicht immer gegeben, dass Systemmodelle eine geeignete Basis für die Implementierung des Systems darstellen, sondern eher die Basis für eine Diskussion der Stakeholder darstellen soll. Bei abweichenden Implementierungsmethoden ist widerrum eine manuelle Programmierung von Nöten. Für viele komplexe Systeme ist die Implementierung kein schwieriger Faktor. Der Fokus liegt oftmals auf die Spezifikation der Anforderungen, der Sicherheit, Zuverlässigkeit und Testen des Systems und die Integration in die Systemumgebung gelegt. Plattformunabhängige Systemdefinitionen sind besonders für langlebige Systeme relevant, welche weiter bestehen als die Plattformen, in denen sie eingesetzt werden. 

## Referenzen

[1]: Sommerville, Ian (2016). Software Engineering (Tenth Edition).

[2]: Brambilla, M., J. Cabot, and M. Wimmer. 2012. Model-Driven Software Engineering in Practice. San  Rafael, CA: Morgan Claypool.

[3]: Mellor, S. J., K. Scott, and D. Weise. 2004. MDA Distilled: Principles of Model-Driven Architecture.  Boston: Addison-Wesley.