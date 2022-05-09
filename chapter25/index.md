# Configuration Management

**Autor:** Timo Wortmann

## Einleitung zum Konfigurationsmanagement

Ein Software System verändetr sich mit jedem Bugfixes und neuem Hard- oder Softwareversionsstand. Durch die Änderungen an dem System entsteht eine Reihe an Versionen, welche verwaltet werden müssen. 
Das Konfigurationsmanagement übernimmt das Management von Richlinien, Prozessen und Werkzeugen für das Verändern von Software Systemen. 

Ohne Konfigurationsmanagement kann es zur Modifizierung der falschen Version, dem Ausrollen falscher Software oder zum Vergessen vom Speicherort bestimmter Komponenten.
Vor allem in Teams wird Konfigurationsmanagement aufgrund der steigenden Verteilung von Mitglieder an verschiedenen Standorten benötigt. Es kann aber auch bei Einzelpersonen eingesetzt werden, um die Änderungen nicht zu vergessen.

Konfigurationsmanagent setzt sich aus folgenden vier Aktivitäten zusammen:

1. [Version management](#version-management)
2. [System building](#system-building)
3. [Change management](#change-management)
4. [Release management](#release-management)

![25.1](assets/25.1-CM_activities.png)

Die obere Abbildung 25.1 zeigt die Aktivitäten und deren Abhängigkeiten untereinander. Die einzelnen Bestandteile umfassen den gesamten Änderungsprozess eines Software Systems und werden in den kommenden Kapiteln genauer erklärt. 

### Nutzung von Konfigurationsmanagement-Tools in der Softwareentwicklung

In der agilen Softwareentwicklung gibt es bei der Verwendung von Konfigurationsmanagement verschiedene Tools, welche von einem simplen Bugtracker bis hin zu einem vollständigen Managementsystem für unterschiedliche Softwareumgebungen alle Aufgaben übernehmen können.

Bei Nutzung solcher Tools gibt es oftmals eine zentralisierte Stelle, an der die aktuellen Versionsstände des Systems dokumentiert sind. Bei Änderunge an den Versionen werden die zentralisierten Dateien durch den jeweiligen Entwickler kopiert, lokal geändert und danach wieder an den zentralen Ablageort gesendet. So haben auch andere Entwickler Zugriff auf die Änderungen und deren Historie.

Der Prozess der Softwareentwicklung besteht aus den Phasen **Development**, **System Testing** und **Release**. 
In der Entwicklungsphase werden neue Funktionen der Software programmiert.
Ind er Testphase werden die zuvor programmierten Funktionen getestet.
In der Release-Phase ist das Softwareprodukt dann für den Endkunden verfügbar.

Da die Phasen in der agilen Entwicklung oftmals parallel laufen, gibt es auch unterschiedliche Versionen des Softwareprodukts. Die Aufgabe eines Konfigurationsmanagement-Tools ist es dabei, den Überblick über alle verschiedenen Versionsstände des Softwareprodukts und deren Bestandteile zu behalten.

### Terminologie und Begriffsdefinitionen

Ursprünglich stammt das Konfigurationsmanagement aus dem Militär und bezog sich nur auf Hardware und wurde später in der Softwareentwicklung verwendet. 
Je nach Anwendungsbereich gibt es unterschiedliche Definitionen für einzelne Bestandteile des Konfigurationsmanagements.
Es gibt standardisierte Definitionen durch IEEE (z.B. IEEE 828-2012), aber diese werden in agilen Entwicklung augrund des hohen Dokumentationsaufwands nicht angewandt.

Die Terminologie nach Sommerville folgt nach der hier aufgeführten Tabelle (alphabetisch sortiert). Eine Reihe Der Begriffe ist ähnlich zu den Begriffen bei der Nutzung von Versionskontrollsystemen wie Git, werden aber unabhängig davon betrachtet.

| Begriff | Beschreibung |
| ------- | ------------ |
| Baseline | Eine Sammlung von Komponenten, welche zusammen ein System ergeben. Die Versionen der Komponenten einer Baseline können nicht verändert werden und es ist immer möglich, eine Baseline aus den versionierten Komponenten wiederherzustellen. |
| Branching | Das Erstellen einer neuen Codeline basierend auf einer bestehenden Codeline |
| Codeline | Das Zusammenfassen einer Version einer Softwarekomponente und deren Abhängigkeiten (z.B. die Branches bei Git) |
| Configuration (version) control | Der Prozess zur Dokumentation von Änderungen am System und Komponenten über die Lebensspanne des Systems. |
| Configuration item / software configuration item (SCI) | Jeder Bestandteil eines Softwareprojekts, welcher unter Versionskontrolle steht (z.B. Code, Dokumentation).|
| Mainline | Eine Reihe von Baselines, die unterschiedliche Versionen des gleichen Systems darstellen. |
| Merging | Das Erstellen einer neuen Version durch Zusammenbringen unterschiedlicher Codelines. |
| Release | Eine Version der Software, welche für Endnutzer veröffentlicht wurde. |
| Repository | Eine geteilte Datenbank mit Versionen und Metainformationen von Software. |
| System building | Die Erstellung eines ausführbaren Systems durch Kompilierung und Verlinkung der Bestandteile in den richtigen Versionen. |
| Version | Eine Instanz eines Configuration Items, die sich in irgendeiner Form von der letzten Form unterscheidet. Versionen sollten durch ein einzigartiges Kennzeichen markiert werden. | 
| Workspace | Eine private Arbeitsumgebung, worin die Software ohne die Beeinträchtigung anderer Entwickler verändert werden kann. |

## Version Management

## System building

## Change Management

## Release Management

## Links

[Markdown] ist eine Sprache, die nach HTML konvertiert werden kann. 

[Markdown]: http://daringfireball.net/projects/markdown/

## Aufzählung

Es unterteilt sich in:

* A
  * A1
* B
  * B1
  * B2
* C


# Überschrift

"...the **go to** statement should be abolished..." [1].

Dieser Link führt intern zu einem anderen [Thema](qualitaet/README)

Dieser Link führt extern nach [Youtube](https://www.youtube.com/)

> Dieser Text ist völlig sinnlos, aber steht trotzdem hier. Dieser Text geht über mehrere Zeilen.

## Unterüberschrift

* Eins
  * eins.eins
  * eins.zwei
* Zwei
  * Zwei.zwei
* Drei

### Code

```javascript
public class A {
  Integer a;
  public A() {
    this.a = 1
  }
}
```

Syntax Highlighting für Javascript. Weitere Sprachen müssen konfiguriert werden.

### Bilder

![](media/image.jpg)

### Audio

[](media/sample.mp3 ':include')

### Video

[](media/sample.mp4 ':include')

## Referenzen

[1]: Dijkstra, E. W. (1968). Go to statement considered harmful. 
Communications of the ACM, 11(3), 147-148.