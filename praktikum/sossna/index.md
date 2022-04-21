# Sebastian Sossna

### Thema: Vergleich von Unity und Unreal Engine 5 in bezug auf 3D fluide Simulationen

### Problemstellung
Unity und Unreal Engine sind oft genutzte Tools, um Szenen interaktiv zu machen. 
Es können Kollisionen von verschiedenen Objekten erkannt werden, sodass dadrauf reagiert werden kann. 
So lassen sich Umgebungen erschaffen, welche der realen Welt sehr ähnlich sehen.
Der Simulation von Flüßigkeiten kommt eine besondere Bedeutung zu, da diese in der realen Welt sehr komplex ist.
Eine Flüßigkeit besteht aus unzähligen Teilchen und ist von verschiedenen Naturgesetzen geprägt.
Um Flüßigkeiten mit der heutigen Rechenleistung zu simulieren, muss diese abstrakt dargestellt werden.
Dies kann mit der Größe und Anzahl an Teilchen geschehen und mithilfe von Shadern visuell getarnt werden.
So lässt sich die Flüßigkeitssimulation approximieren. Die Güte der Flüßigkeit hängt vom Szenario und vom Betrachter ab.
Die Auswahl der geeigneten Engine ist in dieser Hinsicht nicht trivial, daher bedarf es einem Vergleich.

### Fragestellungen
 * Wie unterscheiden sich die Ansätze?
 * Wie ist die Performanz der Simulation im Vergleich?
	* Wie kann die Performanz in Unity und Unreal Engine 5 getestet werden?
	* Beeinflussen andere Objekte in der Szene die performance?
 * Welche Simulation ist flüßiger?
 * Welche Simulation sieht realisitischer aus?

### Umsetzung
 * Entwicklung unterschiedlicher Szenen je Engine
 * Implementierung der Flüßigkeitssimulation in die szene
 * Implementierung der Kollision mit anderen Objekten
 * Performanz messen & vergleich aufstellen (Tabelle+ Simulation)
 * Visuelle Auswertung der Simulationen mit selber Szene und Gegenüberstellung(bsp. Video nebeneinander ablaufen lassen)


### Zeitplan
 * Allgemeines 
	* endgültige Deadline ist der 30.6.22 (danach beginnt der Prüfungszeitraum)
	* vom 21.4-30.6 sind es noch 10 Termine (Exklusive 21.4)
	* Jeder Termin ist eine Deadline.
	* Prüfungsordnung 10 cps ==> 300h workload
		* 50% Hausarbeit ==> 150h Workload
			* Scope not defined ==> therefor no estimate
			* Laut den anderen Schätzungen sollte 100h Workload hier sein
		* 25%Forschungsthema ==> 75h Workload
			* meine Schätzung: 150h Workload
		* 17,5% Ausarbeitung ==> 52,5h Workload
			* meine Schätzung: 40 h Workload
		* 7,5% Präsentation ==> 22,5h Workload
			* meine Schätzung: 10 h Workload
 * Zeitplan (Deadlines)
	* 21.04.22 -> Bearbeitung Ausarbeitung & Präsentation, daher sollte der Arbeitsumfang geringer sein
		* Grober Zeitplan steht
		* Problemstellung ist ausformuliert
		* Thema ist vom Professor abgesegnet
	* 28.04.22 -> Bearbeitung Ausarbeitung & Präsentation, daher sollte der Arbeitsumfang geringer sein
		* Feiner Zeitplan steht
		* grobe TODO's sind definiert
		* Recherche für die Implementierungsansätze ist fertig
			* Flüßigkeitssimulation
			* Kollision
	* 05.05.22 -> Bearbeitung Ausarbeitung & Präsentation, daher sollte der Arbeitsumfang geringer sein
		* Implementierungsansätze sind definiert
			* Flüßigkeitssimulation
			* Kollision
		* Einarbeitung in Unreal
			* Mit der Bedienung vertraut machen
			* Mit der Dokumentation vertraut machen
			* Mit den für mich wichtigen Arbeitsbereichen vertraut machen
			* Einstellungen einheitlich setzen 
				* visuelle Länge ist bei beiden gleich (1meter ist auch 1 meter bei Unity)
				* Gravitation bei beiden gleich setzen
				* etc.
	* 12.05.22 -> Deadline Ausarbeitung & Präsentation, daher sollte der Arbeitsumfang geringer sein
		* Puffer primär für die Ausarbeitung & Präsentation
		* Einarbeitung in Unity
			* Mit der Bedienung vertraut machen
			* Mit der Dokumentation vertraut machen
			* Mit den für mich wichtigen Arbeitsbereichen vertraut machen
			* Einstellungen einheitlich setzen 
				* visuelle Länge ist bei beiden gleich (1meter ist auch 1 meter bei unreal)
				* Gravitation bei beiden gleich setzen 
				* etc.
	* 19.05.22 
		* Alle Szenen sind in Unity & Unreal umgesetzt
			* Modellierung ggf. in Blender oder Autodesk Maya (Damit die Simulation in beiden Szenen auch identisch ist)
	* 26.05.22 
		* Puffer
	* 02.06.22 -> im Urlaub, daher sollte der Arbeitsumfang geringer sein
		* Organisatorisches	
			* Zwischenergebnisse überprüfen
			* Zeitplan überdenken
			* TODO's noch einmal umstrukturieren
	* 09.06.22 
		* Alle Simulationen sind in Unity & Unreal implementiert
		* Video der Simulationen ist fertig
			* Video mit Gegenüberstellung der Simulationen
	* 16.06.22 
		* Evaluierung ist abgeschlossen
			* Visuelle Evaluierung mit Testpersonen
			* Performanz messen
	* 23.06.22 
		* Präsentation & alles komplett fertig
			* Konklusion
			* Video von den Simulationen
			* Performanz Tabelle
			* Kurze Zusammenfassung der Ergebnisse
	* 30.06.22 -> Präsentation
		* Puffer