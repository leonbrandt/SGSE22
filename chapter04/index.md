# Reqirements engineering

**Autor:** Marco Reineke

In diesem Kapitel wird beschrieben was genau funktionelle und nicht-funtkionelle Anforderungen sind und weshalb man zwischen Nutzer-und Systemanfordeungen unterscheidet. Es werden die Fragen beantwortet warum Requirements engineering so wichtig ist und inwiefern requirements engineering andere Aktivitäten der Softwareentwicklung untersützt. Außerdem werden die Prozesse des Requirements engineering beschrieben und wie diese zsammenhängen. Die drei wesentlichen Prozesse im requiremnts engineering sind die Anforderungserhebung, die Anforderungsspezifikation und Anforderungsvalidierung. Mit hilfe dieser drei Prozesse wird ein sogenanntes system requirements document erstellt in welchem die herausgearbeiteten Anforderungen festgehalten werden. Da es durchaus vorkommt, dass neue Anforderungen hinzukommen oder sich Anforderungen im laufe des Entwicklungsprozesses ändern gibt es noch den Prozess der Anforderungsänderung, welcher ebenfalls in diesem Kapitel beschrieben wird.

## Einleitung
Bei der Erstellung von Anforderungen für ein Softwareprojekt gibt es zwei verschiedene Level der Abstraktion. Diese Abstraktionslevel werden Nutzer- und Systemanforderungen genannt. Der wesentliche unterschied zwischen Nutzer- und Systemanforderungen ist, dass Nutzeranforderungen eine abstrakte high-level beschreibung der Anforderungen sind und Systemanforderungen eine detaillierete beschreibung der Anforderungs sind. In den Nutzeranforderungen wird mit Hilfe von natürlicher sprache und Diagrammen beschrieben, welche Services das System dem Nutzer bereitstellen soll und unter welchen Einschräkungen das System später operieren wird. Dabei gibt es in den Nutzeranforderung meisten eine hohe Varianz zwischen groben Aussagen über eine Anforderung und einer detaillierten beschreibung der Systemfunktionalität. In den Systemanforderungen wir detailliert beschrieben, welche Funkionen, Services und Beschränkungen es gibt. In den Systemanforderungen werden auch funtkionelle Spezifikationen aufgenommen, welche genau beschreiben, was implementiert werden soll. Die Systemanforderungen werden manchmal in Verträgen aufgenommen um die Anforderungen zu definieren.

![](media/readers.png)
#### Abbildung 4.1 [1]

In Abbildung 4.1 kann man erkennen warum es Sinn macht verschiedene grade der detaillierung für die Spezifikationen der Anfroderungen zu wählen. Der Grund ist, dass viele verschiedene Leute die Anforderungen des Softwareprojektes kennen müssen und jeder von ihnen eine andere Perspektive hat oder anderes Fachwissen. Für Softwareentwickler sind die Systemanforderungen zum Beispiel sehr wichtig. Für Manager hingegen sind diese eher irrelevant.

### Machbarkeitsttudie
Zu beginn der Anforderungsanalyse sollte eine Machbarkeitsstudie durchgeführt werden. Dabei sollten die drei folgenden Fragen beantwortet werden
 * 1. Trägt das System zu den allgemeinen Zielen der Organisation bei ?
 * 2. Kann das System mit vorhandenem Budget und im geplanten Zeitraum implementiert werden ?
 * 3. Ist das System mit anderen Systemen die verwendet werden integrierbar ?
 
 Falls eine der drei Fragen mit nein beantwortet wird, sollte das Projekt nicht durchgeführt werden.

## Funktionelle und nicht - funktionelle Anforderungen

| Funktionelle Anforderungen | Nicht-funktionelle Anforderungen|
|:----------:|:-----------:|
| Was soll das System tun/nicht tun ? | Spezifierung der Beschränkungen für das System als Ganzes|
| Detaillierte beschreibung der Systemfunktion(Inputs/Outputs) | Effekte auf Gesamtarchtekur und nicht auf einzelne Komponente|
|Anforderungen abhängig von zu entwickelnder Software| Die implementierung der Anforderung zieht sich durch das ganze System|
|Anforderungen abhängig von zu erwartenden Nutzern|Messgrößen: Schnelligkeit, Benutzerfreundlichkeit, Verlässlichkeit,Robustheit,Portabilität|
|Sind eine Erweiterung der Nutzeranforderungen||
|Geschrieben für Softwareentwickler||

![](media/nichtfunktionelle_anforderungen.PNG)
#### Abbildung 4.3 [1]

In Abilldung 4.3 kann man sehen, welche Faktoren alles bei den nicht-funktionellen Anforderungen hereinspielen. Die nicht-funktionellen Anforderungen lass sich in drei Hauptkategorien unterteilen. Diese sind Produktanforderungen, organisatorische Anforderungen und externe Anforderungen. Bei den Produktanforderungen geht es um Fakoren, welche das zu entwickelnde Produkt betreffen wie zum Beispiel die Sicherheit des entwickeltem System oder die Laufzeit. Bei den Organisatorischen Anforderungen werden Anforderung die das Unternehmen betreffen betrachtet und bei den externen Anforderungen werden äußere Einflüsse unter betracht gezogen wie die Rechtslage oder Faktoren aus dem Rechnungswesen.

## Prozesse des requirements engineering

![](media/process.PNG)
#### Abbildung 4.6 [1]
In der Abbilunge 4.6 ist der Prozessablauf von der Anforderungserhebung bis zu der erstellung des software requirements document dargestellt. Dabei gibt es drei Kernaktivitäten. Diese sind Anforderungserhebung, Anorderungsspezifikation und Anforderungsvalidierung und werden wie in der Abbildung dargestellt mehrmals nacheinander durchlaufen. Wird starten immer bei der Anforderungserhebung, welche eine high-level Aktivität ist und enden bei einer low-level Aktivität, der Anforderungsvalidierung.

### Anforderungserhebung
Im ersten Prozess des reuirements engineering arbeiten Softwareentwickler mit den Ergebnissbetroffenen zusammen um folgende Dinge über das zu entwickelnde System und die Anwender herauszufinden:
* Anwendungsbereich des Systems
* Arbeitsaktivitäten der Ergebnissbetroffenen
* services und Systemeigenschaften welche die Ergebnissbetroffenen wollen
* benötigte Performance des Systems
* Hardware Beschränkungen

Die Erhebung und das Verständnis der Anforderungen der Ergebnisbetroffenen ist schwierig wegen, da die Ergebnissbetroffenen nicht immer wissen, was genau sie vom System wollen. Die Ergebnissbetroffenen erläutern ihre Anforerungen mit impliziten Kenntnissen und Fachsprache, welche nicht so leicht zu verstehen ist. Anforderungsingenieur müssen potentielle Quellen, Gemeinsamkeiten und Konflikte der Anforderungen erkennen. Politische Einflüsse müssen erkannt werden, da Manager Anforderungen anfragen könnten, die ihren Einfluss auf die Organisation erhöhen. Außerdem können während des Analyseprozesses Änderungen durch ökonomische oder ökologische Faktoren auftreten auf die eingegangen werden sollte.

Die Anforderungserhebung durchläuft vier Phasen und wiederholt sich für jede Anforderung die gefunden wird. Diese Phasen sind:

* **Anforderungen entdecken und verstehen**:
  Anforederungen aus interaktion mit Ergebnisbetroffenen oder Dokumentatonen sammeln
* **Klassifierung der Anforderungen**: Die *äußere* Sicht eines Auftraggeber nimmt ein Softwaresystem als Softwareprodukt wahr. 
* **Anforderungen priorisieren und verhandeln**:
  Die *innere* Sicht des Informatikers nimmt Software als Softwaresystem wahr.
* **Anforderungen dokumenieren**: Die *äußere* Sicht eines Auftraggeber nimmt ein Softwaresystem als Softwareprodukt wahr. 
 

### Tabelle

| A          |     B       |           C               | 
|:----------:|:-----------:|:-------------------------:|
| Eins | Zwei | Drei |
| Vier | Fünf | Sechs |

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

![](media/readers.png)

### Audio

[](media/sample.mp3 ':include')

### Video

[](media/sample.mp4 ':include')

## Referenzen

[1]: Ian Sommerville. 2015. Software Engineering (10th. ed.),101 - 137.
