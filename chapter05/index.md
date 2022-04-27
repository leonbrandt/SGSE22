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

![ContextModel](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\ContextModel.png)

Was in dieser Phase der Systemmodellierung also angestrebt wird, ist die Definition des Systemkontextes. Abhängigkeiten oder Beziehungen innerhalb dieser Umgebung können mithilfe eines Kontextmodells erfasst werden. Dieses bietet einen guten Überblick über alle Komponenten der Umgebung, jedoch wird die jeweilige Art der Beziehung zwischen zwei Systemen nicht ersichtlich. Für die Ermittlung der Anforderungen und das Design des Systems ist es aber notwendig, die spezifischen Interaktionen und Beziehungen zu kennen. Aus diesem Grund werden häufig weitere Modelle herangezogen, welche die Prozesse abbilden können. 

![ActivityDiagram](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\ActivityDiagram.png)

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

Dabei fokussieren sich Use-Case-Diagramme weitestgehend um Interaktionen zwischen dem System und externen [?], wohingegen Sequenzdiagramme hauptsächlich Interaktionen zwischen Systemkomponenten modellieren. Doch auch externe [?] können in dieses Modell vertreten werden. Die zwei Diagramme geben die Abstraktion dieser Interaktionen in unterschiedlichem Detailgraden wider, weshalb die Nutzung der beiden in Kombination sinnvoll ist. 

### Use Case Modellierung

Use-Cases stellen bestimmte Aufgaben dar, welche erreicht werden sollen, wenn ein Aktor mit dem System interagiert. Eine Modellierung der Use-Cases in den frühen Stadien des Systemdesigns ist also ausschlaggebend, um frühzeitig Anforderungen zu identifizieren.

UML-Use-Case-Diagramme bieten eine einfache und übersichtliche Notation, um diese Aufgaben zu erfassen. Die folgenden Elemente sind dafür in dem Diagramm vorhanden:

| Element        | Bedeutung   |
| -------------- | ----------- |
| Strichmännchen | Aktor       |
| Ellipse        | Use-Case    |
| Strich         | Interaktion |



![UseCases](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\UseCases.png)

Die Abbildung [?] zeigt ein Beispiel für eines Use-Case-Diagrammes, welches mehrere Use-Cases aufweist. Der Aktor ist medizinischer Rezeptionist, welche in Interaktion mit dem System die aufgezeigten Aufgaben bewältigen kann. Die Verbindungen zu den einzelnen Use-Cases stellen dabei einen Nachrichtenfluss in beide Richtungen dar - von Aktor zu System und von System zu Aktor.

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



![SequenceDiagram](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\SequenceDiagram.png)

## Strukturmodelle

Innerhalb von Strukturmodellen sollen Systemkomponenten und deren Beziehungen zueinander in organisierter Form erfasst werden. Dabei kann es sich sowohl um statische, als auch flexible Modelle handeln. Statische Modelle bilden hierbei die Organisation der Systemkomponenten ab, während dynamische diese Struktur zur Laufzeit des Systems erfasst.

Die Strukturmodellierung kann einerseits die grobe Systemarchitektur festhalten, doch auch detailliertere Diagramme können Informationen über Systemobjekte und ihre Beziehungen untereinander liefern. Dies kann über die Nutzung von Klassendiagrammen erfolgen.

### Klassendiagramme

![ClassesAndAssociations](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\ClassesAndAssociations.png)

![Class](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\Class.png)

### Generalisierung

![HierarchicalClasses](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\HierarchicalClasses.png)

![DetailedHierarchicalClasses](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\DetailedHierarchicalClasses.png)

### Aggregation

![Aggregation](C:\Users\Zolkin\Documents\Master Studium Informatik\1. Semester\Spezielle Gebiete zum Softwareengineering\SGSE22\chapter05\img\Aggregation.png)

## Verhaltensmodelle 



## Modellbasiertes Engineering



## Referenzen

[1]: Sommerville, Ian (2016). Software Engineering (Tenth Edition).