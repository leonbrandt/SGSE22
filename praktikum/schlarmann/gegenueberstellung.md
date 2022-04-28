# Gegenüberstellung Meshnetz und traditionelle Architekturen für Drahtlose Netze

## Stand der Technik
 - Kurze Erklärung: Was sind Mesh-Netze / Traditionelle Netze für Drahtlose Datenübertragung

### Traditionelle Netze
 - Verschiedene Andere Funkstandards (wie z.B. WiFi, ZigBee, LoRa) angeschaut: typ. Architektur Stern
 - Ein Master-Gerät (im Zentrum des Stern-Netzes) und mehrere Slave-Geräte
 - Kommunikation in Funk-Reichweite
 - Slave-Geräte sprechen direkt mit dem Master-Gerät, nicht untereinander

 - Teilnehmerzahl durch Hard- und Software des Masters beschränkt
 - Datenrate+Latenz je nach Standard meist von Anzahl der verbundenen Geräte und der Signalstärke abhängig
    - Mehr Geräte / geringere Signalstärke -> geringere Datenrate, höhere Latenz
 - Max. Distanz von Signalstärke abhängig

### Mesh-Netze
 - Teilnehmer direkt miteinander in Kommunikation -> Master-Gerät an sich nicht notwendig
 - Teilnehmer-Anzahl durch SW beschränkt -> "Maximale Sprünge"(TTL) 
 - Datenrate / Latenz bestimmt durch Kürzesten Weg zwischen beiden Geräten
    - Typ. : Latenz > Stern-Netz, Datenrate < Stern-Netz
    - Geräteausfall kompensierbar (wenn genug Teilnehmer im Netz), Daten "nehmen einfach anderen Weg durch Mesh"
 - Max. Distanz durch Platzierung anderer Geräte bestimmt (und TTL-Wert)

#### Konkret: Verwendeter Standard Bluetooth Mesh
 - Basiert auf dem Bluetooth Low Energy (BLE) Standard
 - Verwendet sog. Advertising-Packets (quasi Broadcast-Pakete) um mit anderen Geräten in Reichweite zu kommunizieren
 - Für Datenübertragung Standard-BLE gesprochen -> Hardware, die BLE unterstützt kann mit ensprechender Software auch Bluetooth Mesh sprechen
 - ...


## Vor- und Nachteile der Mesh-Architektur im Automatisierungsbereich

### Vorteile
 - ...

### Nachteile
 - ...

### Anwendungsfälle für die Mesh-Architektur
 - Anwendungsfälle die sich aus dieser Gegenüberstellung ergeben
