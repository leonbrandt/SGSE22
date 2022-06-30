# Gegenüberstellung Meshnetz und traditionelle Architekturen für Drahtlose Netze

## Stand der Technik
Zunächst wird kurz der Unterschied zwischen "traditionellen" und Mesh-Netzen aufgezeigt. Dabei wird außerdem konkret auf das in dieser Arbeit verwendete Protokoll eingegangen.

### Traditionelle Netze
Unter Traditionellen Netzen werden in dieser Arbeit alle Netztopologien verstanden, die für die Drahtlose Datenübertragung verwendet werden, aber kein Meshnetz sind. Wenn man sich verschiedene andere Funkstandards wie z.B. WiFi oder LoRa anschaut, stellt man fest, dass dabei typischerweise die Stern-Topologie verwendet wird [2,3], unter Umständen aber auch Punkt-Zu-Punkt z.B. für Richtfunk über WiFi verwendet werden. Die anderen klassischen Netztopologien wie Baum, Bus oder Ring werden für Drahtlose Übertragungen nicht verwendet - zumindest konnten keine Beispiele gefunden werden. Im Folgenden wird daher die Stern-Topologie als Traditionelle Netztopologie angenommen.

Diese hat folgende Eigenschaften: 
 - Es gibt ein Master-Gerät im Zentrum des Stern-Netzes über das der Datenverkehr von und zu den weiteren Teilnehmer-Geräten gebündelt wird. Der Master übernimmt üblicherweise auch die Koordination des Datenverkehrs, also welcher Teilnehmer wann senden oder empfangen soll, allerdings gibt es hierbei auch Ausnahmen.
 - Die Kommunikation zwischen dem Master und den Teilnehmern kann nur in Funkreichweite stattfinden. Die Maximal erreichbare Distanz zwischen Master und Teilnehmern wird dabei durch sie Sende- und Empfangsleistungen der Geräte bestimmt.
 - Die einzelnen Teilnehmer kommunizieren dabei immer direkt mit dem Master, wenn eine Kommunikation zwischen den Teilnehmern untereinander nötig ist, muss diese über den  Master als Zwischenstation laufen. Dieser muss die Daten dann an den Ziel-Teilnehmer weiterleiten. Dies wird z.B. typischerweise bei WiFi über das IP realisiert. [2]
 - Die maximale Anzahl an Teilnehmern wird durch die Hard- und Software des Masters sowie durch das verwendete Protokoll begrenzt.
 - Die erreichbaren Datenraten und Latenzen sind je nach Standard dabei meist ebenfalls von der Anzahl der Verbundenen Teilnehmer sowie der Signalstärke dieser abhängig, Mehr Geräte und/oder eine geringere Signalstärke führen zu geringeren Datenraten und höheren Latenzen.

[1]
### Mesh-Netze
Eine Alternative zu der Stern-Topologie sind die Mesh-Netze. Diese können dabei Teil- oder Vollvermascht sein. Die beiden Ausführungsarten haben unterschiedliche Eigenschaften, die hier kurz Beschrieben werden:

Vollvermascht:
 - Alle Teilnehmer kommunizieren mit allen anderen Teilnehmern, eine Master-Gerät wie bei der Stern-Topologie ist also nicht notwendig.
 - Die Kommunikation kann, wie bei der Stern-Topologie, nur in Funkreichweite aller anderen Geräte stattfinden. Die erreichbaren Distanzen werden dabei von dem Teilnehmer mit der geringsten Sende- / Empfangsleistung bestimmt.
 - Die maximale Teilnehmerzahl eines Netzes wird dabei von dem Teilnehmer bestimmt, der sich Hard- oder Softwarebedingt mit den wenigsten Geräten kommunizieren kann.
 - Datenraten und Latenzen zwischen den einzelnen Geräten hängen von der Jeweiligen Soft- und Hardware der einzelnen Geräte ab, sind aber ähnlich wie beim Stern-Netz zwischen Master und Slave eher gering, da es sich um direkte Verbindungen handelt.

Teilvermascht:
 - Teilnehmer müssen mit mindestens einem anderem Teilnehmer, können auch mit mehreren bis allen anderen Teilnehmern kommunizieren. Daten anderer Teilnehmer müssen von den einzelnen Teilnehmern in irgendeiner Art und Weise weitergeleitet werden um sicherzustellen, dass diese bei allen Teilnehmern ankommen. Ein Master-Gerät ist genauso wie beim vollvermaschten Netz nicht erforderlich.
 - Den maximal erreichbaren Distanzen sind nur durch die Anzahl und Position der einzelnen Teilnehmer Grenzen gesetzt, da sich jeder Teilnehmer mindestens in Funkreichweite zu einem anderen Teilnehmer befinden muss. Die maximale Anzahl an Teilnehmern wird dabei durch die Hard- und Software aller Teilnehmer begrenzt, z.B. durch die maximale Anzahl gleichzeitig möglicher Verbindungen oder eine Beschränkung der Weiterleitung der Pakete.
 - Die erreichbaren Datenraten / Latenzen werden durch die kürzeste Strecke über das Netz zwischen zwei Teilnehmern beschränkt, die erreichbaren Werte würden dabei erwartungsgemäß kleiner als beim Stern-Netz ausfallen, da die Daten um im Durchschnitt über mehrere Teilnehmer weitergeleitet werden müssen.

[1]
#### Konkret: Verwendeter Standard Bluetooth Mesh
Für die Implementierung wurde der Funkstandard Bluetooth Mesh ausgewählt. Dieser implementiert die teilvermaschte Mesh-Topologie. Technisch basiert Bluetooth Mesh auf Bluetooth Low Energy (BLE), einem Bluetooth-Standard speziell für Geräte, die mit wenig Energie kommunizieren sollen. Bluetooth Mesh (Im folgenden kurz: BLE Mesh) verwendet dabei die sog. Advertising-Packets (also Broadcast-Pakete) von BLE um mit allen anderen Geräten in Reichweite zu Kommunizieren / Daten zu übertragen, da feste Verbindungen von Geräten (z.B. Funkmaus und Computer) in BLE nur in Punkt-zu-Punkt-Verbindungen möglich sind. Diese Advertising-Packets sind dabei eigentlich für das finden anderer Geräte und für die Herstellung der Verbindung gedacht, weswegen man auch davon ausgehen kann, dass Hardware, die BLE unterstützt, auch BLE-Mesh-Pakete senden / empfangen kann. Das Interpretieren / Erzeugen dieser Pakete müsste dann u.U. in Software realisiert werden.

Zum Aufbau eines Netzes wird bei BLE Mesh der sog. Provisioner benötigt. Dies ist im Prinzip das Master-Gerät, das nicht verbundene Geräte zu dem Netz hinzufügen kann. Außer dieser Funktion kann sich der Provisioner aber wie ein normaler Teilnehmer im Netz verhalten. Daten werden im Netz mit dem "Managed flood"-prinzip übertragen, d.h. das eine Nachricht so lange weitergeleitet wird bis diese bei allen Teilnehmern angekommen ist.

Bei BLE Mesh werden die Daten verschlüsselt Übertragen, wobei es dabei 2 Schlüssel gibt. Zum Einen den Network-Key, den alle Geräte im selben Netzwerk besitzen müssen. Mit diesem werden alle Übertragenen Pakete verschlüsselt. Zusätzlich gibt es auch noch den Application-Key, mit dem die Nutzdaten verschlüsselt werden. Damit Teilnehmer Nutzdaten austauschen können müssen diese die gleichen Application-Keys besitzen. Dadurch lassen sich mit verschiedenen Application-Keys unterschiedliche Subnetze in einem BLE Mesh-Netz realisieren, die ihre Daten gegenseitig nicht entschlüsseln können. 

Die Größe eines möglichen BLE-Mesh-Netzes wird dabei hauptsächlich durch den "Time to live"-Wert (TTL) bestimmt, der genauso wie der TTL-Wert bei IP vorgibt, wie oft ein Paket weitergeleitet werden darf, bevor es gedroppt wird. Dadurch können sich in größeren BLE-Mesh-Netzen bei einem zu klein gewähltem TTL mehrere Teilbereiche bilden, die untereinander gar keine Daten austauschen können, da zwischen Ihnen zu viele andere Geräte liegen.

Alle Teilnehmer im BLE Mesh-Netz können individuell adressiert werden, wodurch es auch möglich ist Pakete Unicast und Multicast zu verschicken. Generell werden Daten aber in einem Publish-Subscribe-Schema übertragen. Aufgrund der Begrenzten Anzahl an Adressen können maximal 32767 Teilnehmer in einem Netz eingebunden sein.

Pakete bei BLE Mesh haben eine Paketgröße von 11 Bytes, in denen zusätzlich zu den Nutzdaten außerdem noch der Opcode enthalten ist. Dieser kann 1 - 3 Bytes lang sein, wodurch sich Payload-Größen von 10 bis 8 Byte ergeben. Um Größere Datenmenge zu Übertragen ist es außerdem möglich ein großes Paket zu versenden, dann dann automatisch zerlegt und hintereinander versendet wird. Diese Großen Pakete können maximal 380 Byte groß sein, wodurch sich wiederum Payload-Größen von 379 bis 377 Byte ergeben.

[4]

Da BLE Mesh auf BLE aufbaut sind die gleichen Datenraten wie bei BLE möglich: Die Grund-Symbolrate sind 1 MSymbol/s, wobei dieszu Datenraten von 1 MBaud bis 125 kBaud konfiguriert werden kann. Bei den niedrigeren Datenraten werden die "fehlenden" Symbole mit Paritäts-Bits aufgefüllt, wodurch diese eine höhere Integrität gegenüber Störungen besitzen. [5]

## Mesh-Netze im Automatisierungsbereich
Hier werden nun die teilvermaschte Mesh-Topologie speziell im Hinblick auf den Automatisierungsbereich betrachtet. 

### Eigenschaften von anderen Sensornetzen im Automatisierungsbereich
Generelle Eigenschaften von Sensornetzen für die Automatisierung lassen sich aus den Eigenschaften von bekannten Feldbussystemen wie z.B. Profibus oder CANOpen ableiten. Diese Besitzen folgende Eigenschaften:
 - Datenraten im Bereich von kBaud bis niedrigen MBaud-Bereich, konkret bei Profibus DP z.B. bis zu 12 und bei CAN bis zu 1 MBaud.
 - Die Daten der Einzelnen Teilnehmer werden zyklisch übertragen.
 - Die Netztopologie ist generell Linie, es ist aber möglich Abzweigungen zu schaffen.
 - Minimale Zykluszeiten im einstelligen ms-Bereich, Profibus DP: minimal 2 ms, CAN minimal 10 ms.
 - Die Maximale Buslänge, durch die die Ausdehnung des Netzes eingeschränkt wird, liegt bei hohen Datenraten um die 100 Meter, kann z.B. bei Profibus DP aber bei niedrigeren Datenraten auch vergrößert werden.
 - Die Anzahl der Teilnehmer ist begrenzt, über Profibus DP und CANOpen können maximal 127 / 128 Teilnehmer kommunizieren

[6,7,8]

Aus den Datenraten, den Maximalen Teilnehmern und der Zykluszeit lässt sich berechnen, wie viele Daten jedes einzelne Gerät tatsächlich pro Zyklus versenden darf, Beispielsweise für Profibus: Für alle Geräte: 12 MBaud / 2 ms = 24000 Bits = 3 kByte / Zyklus. Wenn jeder Teilnehmer die gleiche Datenmenge senden möchte dürfen höchsten 3 kByte / 127 Teilnehmer = 23.6 Byte / Teilnehmer pro Zyklus versendet werden. Die effektive Datenrate der einzelnen Teilnehmer wäre in dem Fall also sehr klein. 

### Vor- und Nachteile der Mesh-Architektur
Mit den ermittelten Eigenschaften anderer Feldbussysteme lassen sich eventuelle Vor- und Nachteile eines drahtlosen Sensornetzes auf Basis von BLE Mesh aufzeigen:

Vorteile von BLE Mesh | Nachteile von BLE Mesh
 --- | ---
Durch den Aufbau als Mesh-Netz und erreichbaren Datenraten von bis zu 1 MBaud sind die erreichbaren Datenraten pro Teilnehmer deutlich höher | Das zyklische Abfragen von Daten ist nur sehr schwierig zu realisieren, da Daten durch die erforderliche Weiterleitung nicht gleichzeitig bei allen Teilnehmern ankommen können
Es können bis zu 32767 Teilnehmer angesprochen werden. | Aufgrund der notwendigen Weiterleitung der Nachrichten kann es bei weiten Strecken zu relativ großen Latenzen kommen. Diese sind außerdem von nach Anzahl der Geräte zwischen dem Start und Ziel abhängig und müssen auch nicht konstant bleiben.
Aufgrund der Mesh-Eigenschaft und der großen Teilnehmerzahl können sehr Große Flächen mit BLE Mesh abgedeckt werden | Aufgrund des Publish-Subscribe-Schemas bei der Datenübertragung kann nicht festgestellt werden ob eine Nachricht tatsächlich bei ihrem Empfänger angekommen ist.

### Anwendungsfälle für die Mesh-Architektur
Mit den ermittelten Vor- und Nachteilen von BLE Mesh gegenüber klassischen Feldbussen lassen sich eventuelle Anwendungsfälle ermitteln:
Da es nicht wirklich möglich ist die Daten aller Teilnehmer zyklisch zu übertragen, ist BLE Mesh für anwendungsfälle, wo dies notwendig ist, nicht geeignet. Genauso bei Zeit- oder Sicherheitskritischen Daten, aufgrund der nicht konstanten Latenzzeiten ist BLE Mesh für die Übertragung dieser Daten weniger geeignet. Aufgrund der eventuellen Verzögerung der Daten durch die Weiterleitung ist BLE Mesh auch nicht für Daten mit hohen Sample- und Senderaten geeignet, da dies die Teilnehmer, die die Daten weiterleiten, blockieren könnte sodass diese ihre eigenen Daten nicht versenden können.

Daher bietet sich BLE Mesh eher Bereiche an, in denen die Messwerte keine sehr hohen Sample-Raten benötigen und ein großes Areal abgedeckt werden muss, also z.B. in der Gebäudeautomation oder auch für die Stromerzeugung in Solar- oder Windparks. In Fabrikhallen oder für die Maschinensteueren ist es dagegen eher weniger geeignet, da dort meist wieder zeitkrische Daten oder Daten mit hoher Sample-Rate übertragen werden müssen. Allerdings finden sich dort u.U. hohe EMV-Störungen durch z.B. Umrichter, die drahtlose Verbindungen beeinträchtigen können. In einer solchen Umgebung würde sich BLE Mesh besser eignen als ein Drahtloses Netz mit Stern-Topologie, da die Daten bei BLE Mesh während einer Störung über einen Anderen Teilnehmer weitergeleitet werden können. Dies wird im weiteren Verlauf dieser Arbeit allerdings nicht weiter betrachtet.
