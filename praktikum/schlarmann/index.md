# Paul Schlarmann

## Thema: Konzeptionierung und prototypische Implementierung intelligenter Sensor-Meshnetze mit verteilter Automatisierung

## Hintergrund
In meiner Firma gibt es schon etwas länger die Idee Mess- und Steuerungsdaten nicht nur, wie in der Industrie meist noch üblich, drahtgebunden zu übertragen, 
sondern stattdessen diese Daten auch drahtlos zu Übertragen. Dies bringt verschiedene Vorteile mit sich, so spart man sich den zusätzlichen Verdrahtungsaufwand
sowie die Materialien für die (Daten-)Leitungen zu den Sensoren und Aktoren. Außerdem hat man bei der Platzierung weniger Einschränkungen, da nicht mehr auf
die Positionierung der Leitungen geachtet werden muss. So könnten die Sensoren / Aktoren theoretisch auch an beweglichen / rotierenden Teilen befestigt werden.
Es gibt bereits existierende Produkte, die eine Solches Konzept verfolgen, zu Nennen sind vor allem verschiedene Smart-Home Systeme wie z.B. Philips Hue.

Bei diesen Systemen wird meist über WiFi, ZigBee, Bluetooth (Mesh) u.a. kommuniziert, einige Systeme unterstützen auch gleich mehere dieser Funkstandards. Bei
WAGO wurde sich für Bluetooth Mesh entschieden, da dadurch die Sensoren / Aktoren vielleicht relativ einfach über ein Smartphone per App (fast alle aktuellen
Smartphones haben eine integrierte Bluetooth-Schnittstelle) oder von einem Computer mit Bluetooth-Schnittstelle konfiguriert werden können. Es wurde außerdem 
speziell die Mesh-Variante von Bluetooth gewählt, da dadurch theoretisch (bei gleichbleibender Sendeleistung) deutlich größere Reichweiten erreicht werden
können. 

Die verteilte Automatisierung kann mit simplen Wenn-Dann-Abfragen und Schwellwerten in den einzelnen Sensoren / Aktoren stattfinden, sodass Beispielsweise ein
Rolladen herunter- sowie wieder herauffährt sobald eine gewisse Außen-Helligkeit über- bzw. unterschritten wird. Die Abfragen und Schwellwerten müssen sich 
dabei natürlich von Endnutzer konfigurieren lassen.

## Inhalte
 * [Gegenüberstellung Meshnetz und traditionelle Architekturen für Drahtlose Netze](praktikum/schlarmann/gegenueberstellung.md) 
   * Traditionelle Archiktekturen: Punkt-zu-Punkt, Stern
   * Betrachtung für den Fall Automatisierung, also für Sensor / Aktornetze
   * Vor- & Nachteile des Mesh-Ansatzes 
   * Anwendungsfälle für Meshnetze (z.B.: sinnvoll in Fabrik- / Maschinenhalle mit vielen verteilten Sensoren / Aktoren, wenig Sinnvoll bei wenigen Teilnehmern
        wie Lichtschalter + Beleuchtung)
 * [Konzeptentwicklung des Netzes](praktikum/schlarmann/konzeptentwicklung.md)
   * Sensoren, Aktoren etc.
 * [Prototypische Implementierung und Evaluierung](praktikum/schlarmann/implementierung_evaluierung.md)
   * Evaluierungsgrundlage: Bestehende Systeme - Vergleich mit eigener Implementierung

## Konkrete Fragestellungen
 1. Was speziell muss bei der Entwicklung eines Meshnetzes im Gegensatz zu traditionellen Architekturen für Drahtlose Netze beachtet werden?
    * Automatischer Aufbau des Meshnetzes -> Besonderheit: Nicht alle geräte stehen im direkten Kontakt zueinander, Wie bestimme ich den Busmaster?
    * Wie gehe ich bei der Adressierung vor: Größerer Speicherverbrauch im Vergleich zu Punkt-zu-Punkt / Stern-Netzen?
    * Kommunikation zwischen 2 Teilnehmern (z.B. für Konfigurationsdaten): Wie umsetzbar?
 2. Welche Beurteilungskriterien sind speziell für Sensornetze sinnvoll? Beispiele:
    * Datenrate für Sensornetz weniger relevant (Datenmengen eher im Byte- bis kByte-Bereich, Datenraten im Millisekunden- bis Sekundenbereich)
    * Integrität mehr relevant, vor allem wenn Messdaten zum Steuern verwendet werden (z.B. eine Innenraum-Beleuchtung die nach der (Außen-)Helligkeit geregelt
        ist. Diese sollte nicht aufgrund eines Übertragungsfehlers mitten in der Nacht mit voller Helligkeit angehen)
 3. Wie genau kann das Meshnetz evaluiert werden? (Vergleichskriterien zu Anderen Implementierungen, wie können Metriken erfasst werden & welche sind Sinnvoll)
    * Teilweise Doppelung bei "Welche Metriken sind sinnvoll" mit 2.
    * Andere Implementierungen sind z.B. Smart-Home Systeme wie Philips Hue ... (vgl. Hintergrund)
        * Metriken dabei z.T. im Internet / von den Herstellern direkt verfügbar   
