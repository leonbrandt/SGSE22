# Konzeptentwicklung für ein intelligentes Sensor-Meshnetz mit verteilter Automatisierung

## Vorgaben
 - Verwendung von Bluetooth Mesh als Übertragungsstandard
 - Einsatz auf eingebetteter Hardware / µC -> Einschränkungen bei Speicher / Taktraten etc.!

## Geräte-Typen

### Busmaster / Provisioner
 - Zum Aufbau des Mesh-Netzes wird ein sog. Provisioner benötigt
    - Eigenes Gerät? oder soll sich automatisch ein Gerät 

### Sensorik
 - ...

### Aktorik
 - ...

### Weiteres
 - z.B. Repeater, Bridges etc.

## Schnittstellen (Mesh-Netz)
 - Zur Kommunikation zwischen Geräten
 - Über verschiedene Endpoints etc. realisierbar
 - z.B. Konfiguration, Geräteinformationen, Rohdaten etc.

## Schnittstellen (Hardware)
 - Viel Automatisierungs-Hardware (Sensoren, PSU, Messwert-Wandler) von WAGO bereits mit Kommunikations-Schnittstellen ausgestattet
    - (typischerweise Modbus, aber auch eigene Service-Schnittstelle)
 - Vielleicht eine generische Bridge Modbus <-> Bluetooth Mesh möglich?

## Verteilte Automatisierung
 - Wie simpel / Komplex gestaltet
 - Zuordnung / Zugriff Messwerte Anderer Geräte
 - Wie Konfigurierbar?
