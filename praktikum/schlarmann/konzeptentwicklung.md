# Konzeptentwicklung für ein intelligentes Sensor-Meshnetz mit verteilter Automatisierung

## Vorgaben
Für die Entwicklung dieses intelligenten Sensor-Meshnetzes ist folgendes vorgegeben worden: Zum Einen soll Bluetooth Mesh als Übertragungsstandard verwendet werden. Das Ganze soll auf eingebetteter Hardware, bzw. konkreter auf Mikrocontrollern, funktionieren, wodurch sich einige Beschränkungen bei den verfügbaren Ressourcen wie Arbeits- und Programmspeicher sowie Taktraten ergeben. Wie diese konkret aussehen hängt von der verwendeten Hardware ab. Um die Sensordaten auszuwerten oder Aktoren anzusteuern muss die Hardware über Digitale / Analoge Ein- und Ausgänge, sowie verschiedene Kommunikationsbusse wie z.B. SPI, UART oder I2C verfügen. Da hiermit auch eine Art verteilte Automatisierung realisiert werden soll müssen die einzelnen Teilnehmer konfigurierbar sein. Diese Konfiguration soll fest abgespeichert werden, sodass sie z.B. nach dem Verlust der Betriebsspannung wieder eingelesen werden kann.

## Geräte-Typen
Für ein intelligentes Meshnetz mit verteilter Automatisierung werden verschiedene Gerätetypen benötigt. Diese werden im folgenden detaillierter beschrieben:
### Provisioner
Der Provisioner wird, wie bereits beschrieben, benötigt um das Mesh-Netz aufzubauen. Da ansonsten keine Einschränkungen im Bezug auf die Kommunikation bestehen kann der Provisioner auch z.B. ein Sensor oder Aktor sein. In diesem Fall wird der Provisioner allerdings als separates Gerät belassen. Da der Provisioner sozusagen im Zentrum des Netzes steht und alle Teilnehmer mindestens einmal mit ihm kommuniziert haben, bietet es sich an den Provisioner als zentrale Stelle zum Abgreifen der Daten zu verwenden. Die Daten können dann z.B. mittels Ethernet oder Feldbus an eine SPS oder einen Server weitergeleitet werden und dort zum Monitoren überwacht oder für andere Zwecke ausgewertet werden. Auch kann diese Zentrale Stelle zum Einspielen von Konfigurationen oder weiteren Daten (z.B. Messdaten) verwendet werden.

Ein automatischer Aufbau des Netzes, bei dem sich ein Gerät als Provisioner herauskristallisiert, ist aufgrund der Mesh-Topologie nicht möglich. Bei einigen Kommunikations-Bussen und in Stern-Netzen könnte soetwas z.B. dadurch realisiert werden dass die Geräte nach dem Booten eine gewisse Zeit warten um einem Netz zu finden. Wenn diese Verstrichen ist würde dann ein Zufallsgenenrator eine weitere, zufällige Wartezeit erzeugen. Wenn diese Abgelaufen ist wird das Gerät zum Busmaster. Wenn während der Wartezeiten ein Netz gefunden wird, verbindet sich das Gerät als Slave mit dem Netz. Dadurch würde sich das Gerät, bei dem die durch den Zufallsgenenrator generierte Wartezeit am geringsten ist, zum Busmaster und alle anderen Geräte würden sich mit dem Gerät verbinden. Wenn man eine solche Idee auch bei BLE Mesh anwenden möchte könnte man dabei in das Problem laufen, viele kleine, unabhängige Inselnetze auszubilden, da das Provisioning des ersten Busmasters die Anderen Geräte Aufgrund der Latenz bei der Weiterleitung u.U. nicht rechtzeitig erreicht. Deswegen wird für den Provisioner ein separates Gerät verwendet.

### Sensorik
Sensoren sind die einfachsten Geräte in dem Netz, da ihre einzige Aufgabe das Aufnehmen und Senden von Messwerten ist. Von den üblichen Automatisierungsaufgaben können die Sensoren nur das Aufbereiten der eigenen Messdaten übernehmen, da sie keine Möglichkeit zum Steuern haben. Die Aufbereiteten Messdaten werden via Publish an alle Teilnehmer versendet. So können die Messdaten sowohl vom Provisioner / anderen Bridges empfangen und weitergeleitet werden, aber auch von den Aktoren empfangen und verarbeitet werden.

### Aktorik
Die Aktoren übernehmen den Gegenpart der Sensoren, sie müssen die Maschinen steuern. Sie müssen die Messdaten der Sensoren empfangen, weiter Aufbereiten, Zusammenführen und damit die Maschine steuern. Für das Monitoring müssen die Aktoren die Steuerungsanweisungen wieder versenden. Diese können dann auch von Anderen Aktoren im Zusammenhang mit den Sensormesswerten zur Steuerung verwendet werden.

### Kombi-Geräte
Kombi-Geräte sind Geräte, die sowohl Sensoren als auch Aktoren besitzen. Sie müssen also die Aufgaben beider Gerätetypen erfüllen, zum Einen das Aufnehmen und Aufbereiten von Messwerten als auch das Auswerten von Daten und Steuern. 

### Weiteres
Folgende Weitere Gerätetypen, die für das Messen und Steuern weniger relevant sind, sind ebenfalls denkbar:

 - Repeater, die verschiedene Mesh-Netze miteinander verbinden oder kommunikation über weite Strecken ermöglichen können
 - Bridges, die, ähnlich wie bereits der Provisioner, die Daten abgreifen und über andere Kanäle verfügbar machen, z.B. übers Internet, über Feldbusse

## Verteilte Automatisierung
Die Verteilte Automatisierung wird relativ simpel gestaltet, die Aufbereitung der Messwerte in den Sensoren und die Auswertung in den Aktoren wird separat durchgeführt. 

In den Sensoren selber gibt es 2 Wege zur Aufbereitung von Messwerten. Zum Einen kann ein einfacher Schwellwert festgelegt werden. Je nachdem ob der aktuelle Messwert ober- oder unterhalb dieses Schwellwerts liegt gibt der Sensor dann ein binäres Signal aus. Außerdem können ein Min- und ein Max-Wert festgelegt werden. Dann gibt der Sensor eine Zahl aus, wobei der Wertebereich dieser Zahl dann auf den Messbereich zwischen dem Min- und dem Max-Wert skaliert wird. Es ist auch möglich den Messwert ohne Aufbereitung auszugeben.

Diese Aufbereitung dient dazu die Verarbeitungslogik im Aktor zu vereinfachen. Dieser kann mehrere Sensorwerte verknüpfen, wobei die 4 Mathematischen Grundoperationen sowie die 5 Boolschen Operationen AND, NAND, OR, NOR und XOR verwendet werden können. Die Verknüpfung erfolgt dabei der einfachheit halber immer mit einem Akkumulator, d.h. es muss auf Reihenfolge der Verknüpten Sensorwerte geachtet werden. Dieser Akkumulator wird mit 0 initialisiert. Die Steuerung des Aktors kann dann z.B. mittels Schwellwert oder direkt Binär erfolgen, das ausgeben auf analoge Ausgänge ist aber auch möglich.

## Schnittstellen (Mesh-Netz)
Für die Kommunikation zwischen den einzelnen Teilnehmern müssen Schnittstellen / Protokolle definiert werden, in deren Rahmen die Daten übertragen werden. Ein einzelnes Nachrichten-Paket hat nur eine Größe von 11 Bytes, von der die Größe des verwendeten Opcodes noch abgezogen werden muss. Diese Pakete können zu einem größerem Paket mit maximal 380 Byte zusammengefasst werden, wovon allerdings ebenfalls die Größe des Opcodes abgezogen werden muss. Da die Größeren Pakete aus mehreren Nachrichten bestehen und daher länger für eine Übertragung brauchen, sollten zumindest die regelmäßig übertragenen Daten wie z.B. Messwerte innerhalb dieser 11 Bytes liegen. Für Konfigurationsdaten können die größeren Pakete verwendet werden, da diese nicht so häufig versendet werden müssen. Für die folgenden Schnittstellen werden eigene 2-Byte Opcodes verwendet, wodurch sich effektive maximale Paketgrößen von jeweils 9 und 378 Byte ergeben. Dafür werden Opcodes in dem Bereich 0xB000 - 0xB0FF verwendet, die in der aktuellen Bluetooth Mesh Spezifikation noch nicht vergeben sind.

Die Regelmäßig versendeten Daten werden via Broadcast versendet und können daher von allen Geräten empfangen und verarbeitet werden. Bei allen anderen Nachrichten wie die Konfiguration oder die Identifikation reicht es diese per Unicast direkt an das zugehörige Gerät zu versenden.

### Regelmäßig versendete Nachrichten
Dies sind die Nachrichten, die von den Geräten regelmäßig automatisch versendet werden. Je nach Konfiguration kann dies z.B. Zyklisch passieren oder wenn sich ein Wert geändert hat.

### Messwerte
Regelmäßig verschickte Messwert-Daten, meistens bereits aufbereitet. Werden mit dem Opcode 0xB0A1 versendet und haben folgendes Schema:
```c
struct bleMeshCyclicSensorValues {
   uint16_t srcAddress;
   uint8_t valueNumber;
   uint8_t dataType;
   uint8_t valueBuffer[4];
}
```
 - srcAddress: BLE Mesh-Adresse dieses Geräts
 - valueNumber: Identifikationsnummer für den Sensor des Geräts. Genauere Informationen können über die Sensor-Identifikation erfahren werden. Ist immer fortlaufend
 - dataType: Enumeration für den Datentyp der Daten im ValueBuf. Folgende Werte sind fest definiert:
      - 0x01: Int8
      - 0x01: UInt8
      - 0x03: Int16
      - 0x04: UInt16
      - 0x05: Int32
      - 0x06: UInt32
      - 0x07: float (32-Bit)
      - 0x08: Boolean
 - valueBuffer: 4 Byte, Format der abgespeicherten Daten hängt von DataType ab.

### Aktor-Daten
Regelmäßig verschickte Daten der Aktoren, also z.B. Steuerdaten. Verwendet den Opcode 0xB0A2 und das gleiche Schema wie bei den Messwerten. Bei Kombi-Geräten folgen die valueNumbers der Aktoren nach denen der Sensoren ohne Lücke.
```c
struct bleMeshCyclicActorValues {
   uint16_t srcAddress;
   uint8_t valueNumber;
   uint8_t dataType;
   uint8_t valueBuffer[4];
}
```

### Abfragbare Daten
Abfragbare Daten sind Daten, die häufiger Abgefragt werden könnten um z.B. das Gerät zu identifizieren, aber nicht für den regelmäßigen Datenaustausch benötigt werden. Wie der Name es bereits vermuten lässt müssen diese abgefragt werden

### Geräte-Identifikation
Kurzidentifikation des angefragten Geräts.

Die Anfrage hierfür besteht nur aus dem Opcode: 0xB081, die Payload bleibt leer.

Das Gerät antwortet in folgdendem Schema:
```c
struct bleMeshAcyclicDeviceIdent {
   uint16_t deviceType;
   char deviceName[6];
}
```
 - deviceType: Enumeration für den Gerätetypen. Die Nummern werden eindeutig vergeben und dienen Zur Identifikation der Geräte. Bei allen Geräte des gleichen Typs steht hier der gleiche Wert. Kann z.B. in einer Konfigurationsoberfläche verwendet werden um Artikelbezeichnung / Nummer anzuzeigen.
 - deviceName: Kurzer, benutzerdefinierte Name für das Gerät. Ermöglicht schnellere Zuordnung der Messwerte, wenn entsprechend konfiguriert.

### Geräte-Information
Ausführliche Identifikation des angefragten Geräts. Sendet die Daten der Geräte-Identifikation nicht mit, dafür aber weitere, teilweise Benutzerdefinierte Informationen mit.

Die Anfrage hierfür besteht ebenfalls nur aus dem Opcode: 0xB082, die Payload bleibt auch hier leer.

Das Gerät antwortet in folgdendem Schema:
```c
struct bleMeshAcyclicDeviceInfo {
   uint32_t hwVersion;
   uint32_t swVersion;
   uint32_t serial;

   uint8_t valueCount;

   char deviceLongName[16];
   char location[16];
   char functionInfo[16];
}
```
 - hwVersion: Hardware-Version des Gerätes
 - swVersion: Version der laufenden Software
 - serial: Seriennummer
 - valueCount: Anzahl an Werten / valueNumbers des Geräts. Die Letzte valueNumber ist dementsprechend ValueCount-1.
 - deviceLongName: Langer, benutzerdefinierte Name des Geräts. Für eventuelle Konfigurationsoberfläche o.ä.
 - location: Benutzerdefinierte Ortsangabe. Für eventuelle Konfigurationsoberfläche o.ä.
 - functionInfo: Benutzerdefinierte Angabe zur Funktion des Geräts. Für eventuelle Konfigurationsoberfläche o.ä.

#### Value-Identifikation (Einzeln)
Ermöglicht Zuordnung der einzelnen valueNumbers zu Sensor- / Aktortypen.

Diese Anfrage verwendet den Opcode: 0xB083, die Payload hat folgendes Schema:
```c
struct bleMeshAcyclicValueIdentReq {
   uint8_t valueNumber;
}
```
 - valueNumber: Messwertnummer. Gleicher Wert wie in den regelmäßig verschickten Messwert- / Aktor-Daten.

Das Gerät antwortet in folgendem Schema:
```c
struct bleMeshAcyclicValueIdent {
   uint16_t valueType;
   uint8_t valueTypeNumber;
   char valueName[6];
}
```
 - valueType: Enumeration für den Wert, z.B. könnte ein Stromsensor, der 0-5 Ampere messen kann, dem Wert 0x4711 zugeordnet sein. Kann wie der DevType z.B. in Konfigurationsoberflächen verwendet werden
 - valueTypeNumber: Erlaubt einfachere Identifizierung von mehreren Werten mit gleichem ValueType in einem Gerät - Der Erste Wert des ValueType ist 0x00, der zweite 0x01 usw.
 - valueName: Kurzer, benutzerdefinierte Name für den Wert.

#### Value-Identifikation (Alle)
Verschickt ein großes Paket mit den ValueTypes der Werte eines Geräts.

Hierfür wird der Opcode xB084 verwendet, die Payload bleibt leer.

Das Gerät antwortet in folgendem Schema:
```c
struct bleMeshAcyclicAllValueIdent {
   uint8_t lenTotal;
   uint8_t lenValueTypes;
   uint16_t valueTypes[188];
}
```
 - lenTotal: Equivalent zu ValueCount aus der Geräte-Identifikation. Anzahl der Werte des Geräts.
 - lenValueTypes: Anzahl an ValueTypes in diesem Paket. Da die Großen Pakete maximal 378 Byte Nutzdaten enthalten können nur 188 der maximal möglichen 255 ValueTypes in einem Paket verschickt werden. Wenn CountHere also kleiner als CountTotal ist muss der gleiche Opcode nochmal an das Gerät gesendet werden um die restlichen ValueTypes zu erhalten.
 - valueTypes: Array mit Enumeration für die Werte. Index in diesem Array entspricht der ValueNum (bzw. Index + 188 in der zweiten Anfrage). 

### Konfiguration
Daten zur Konfiguration der Geräte sowie der verteilten Automatisierung. 

### Geräte-Identifikation und Information
Das Setzen der Geräte-Identifikation und Konfiguration erfolgt mit den gleichen Daten wie beim Auslesen, der verwendetet Opcode ist 0xB041 und die Payload folgende:

```c
struct bleMeshConfigDeviceData {
   char deviceName[6];

   char deviceLongName[16];
   char location[16];
   char functionInfo[16];
}
```
 - deviceName: Kurzer, benutzerdefinierte Name für das Gerät. Ermöglicht schnellere Zuordnung der Messwerte, wenn entsprechend konfiguriert.
 - deviceLongName: Langer, benutzerdefinierte Name des Geräts. Für eventuelle Konfigurationsoberfläche o.ä.
 - location: Benutzerdefinierte Ortsangabe. Für eventuelle Konfigurationsoberfläche o.ä.
 - functionInfo: Benutzerdefinierte Angabe zur Funktion des Geräts. Für eventuelle Konfigurationsoberfläche o.ä.
### Value-Identifikation
Bei der Konfiguration der Value-Identifikation werden ebenfalls die gleichen Daten geschrieben. Der Opcode ist 0xB042 und die Payload hat folgendes Schema:

```c
struct bleMeshConfigValueIdent {
   uint8_t valueNumber;
   char valueName[6];
}
```
 - valueNumber: Identifikationsnummer für den Sensor des Geräts. Genauere Informationen können über die Sensor-Identifikation erfahren werden. Ist immer fortlaufend
 - valueName: Kurzer, benutzerdefinierte Name für den Wert.
### Automatisierung
Für die Verteilte Automatisierung müssen Sensor und Aktor separat konfiguriert werden:

Die Sensoren werden über den Opcode 0xB043 konfiguriert, die Konfiguration erfolgt dabei für jede Value separat. Diese Konfiguration kann auch für die Aktor-Daten verwendet werden, falls diese weiter zur Automatisierung genutzt werden sollen. 

Folgendes Schema wird verwendet:
```c
struct bleMeshConfigSensorAutomation {
   uint8_t valueNumber;
   uint8_t automationType;
   uint8_t lowerBound[4];
   uint8_t upperBound[4];
}
```
 - valueNumber: Identifikationsnummer für den Sensor des Geräts. Genauere Informationen können über die Sensor-Identifikation erfahren werden. Ist immer fortlaufend
 - automationType: Enum, beschreibt was mit dem Messwert gemacht wird und welche Bedeutung lowerBound und upperBound haben:
      - 0x00: Keine Aufbereitung des Messwerts, lowerBound und upperBound werden ignoriert
      - 0x01: Einfacher Schwellwert, Wert ist True wenn Messwert oberhalb des Schwellwerts liegt. Der Schwellwert ist in lowerBound gespeichert, upperBound wird ignoriert
      - 0x02: Einfacher Schwellwert, Wert ist True wenn Messwert unterhalb des Schwellwerts liegt. Ansonsten Identisch zu 0x01

      - 0x8X: Mapping des Messwertes. Der Messwert wird anhand von lowerBound und upperBound in den kompletten Wertebereich des von X bestimmten dataType (siehe Messwerte) gemappt. Falls der Messwert kleiner als lowerBound oder größer als upperBound ist wird der Rückgabewert entsprechend auf den Min- oder Max-Wert des dataType gesetzt.
 - lowerBound und upperBound im Datentyp des tatsächlichen Messwertes

Diese Konfiguration kann über den Opcode 0xB044 wieder abgerufen werden, die Payload hat folgendes Schema:
```c
struct bleMeshAcyclicValueIdentReq {
   uint8_t valueNumber;
}
```
Die Antwort hat dann das gleiche Schema wie für das Setzen verwendet wird.

Für den Aktor müssen die Abfragen der einzelnen Sensorwerte konfiguriert werden. Dies Geschieht über den Opcode 0xB045 mit folgender Payload:
```c
struct bleMeshConfigActorAutomation {
   uint16_t srcAddress;
   uint8_t valueNumber;
   uint8_t operationType;
   float constantFactor;
}
```
 - srcAddress: BLE Mesh-Adresse dieses Geräts
 - valueNumber: Identifikationsnummer für den Sensor des Geräts. Genauere Informationen können über die Sensor-Identifikation erfahren werden. Ist immer fortlaufend
 - operationType: Enum, bestimmt welche Operation mit dem Wert und dem Akkumulator ausgeführt wird: Akkumulator _Operation_ Wert:
      - 0x01: +
      - 0x02: -
      - 0x03: *
      - 0x04: /

      - 0x05: AND 
      - 0x06: NAND
      - 0x07: OR
      - 0x08: NOR
      - 0x09: XOR
 - constantFactor: Konstanter Faktor, mit dem Der Wert multipliziert werden kann bevor die Operation mit dem Akkumulator durchgeführt wird.

Zur Konfiguration können mehrere dieser Pakete abgeschickt werden um mehrere Werte miteinander zu verknüpfen. Die Reihenfolge ist dabei wichtig, da die Operationen alle nacheinander mit einem Internen Akkumulator statt direkt mit den anderen Werten durchgeführt werden. Da dadurch nur weitere Operationen hinten angehängt werden können, können alle Operationen mit dem Opcode 0xB046 wieder gelöscht werden. Eine Payload ist dabei nicht erforderlich.

Die Konfiguration kann über den Opcode 0xB047 abgefragt werden, wobei die Payload dabei leer bleibt. Das Gerät antwortet dann in folgendem Schema:
```c
struct bleMeshConfigActorAutomation {
   uint8_t lenConfig;
   bleMeshConfigActorAutomation config[];
}
```
 - lenConfig: Anzahl der Konfigurierten Verknüpfungen
 - config: Array von Verknüpfungen in dem gleichen Schema wie bei der Konfiguration.

Die Konfiguration des Ausgangswertes erfolgt über den Opcode 0xB048, mit einem Ähnlichen Schema wie bei den Messwerten:
```c
struct bleMeshConfigActorOutput {
   uint8_t automationType;
   int32_t lowerBound;
   int32_t upperBound;
}
```
 - automationType: Enum, beschreibt was mit dem Messwert gemacht wird und welche Bedeutung lowerBound und upperBound haben:
      - 0x00: Keine Aufbereitung des Messwerts, lowerBound und upperBound werden ignoriert
      - 0x01: Einfacher Schwellwert, Wert ist True wenn Messwert oberhalb des Schwellwerts liegt. Der Schwellwert ist in lowerBound gespeichert, upperBound wird ignoriert
      - 0x02: Einfacher Schwellwert, Wert ist True wenn Messwert unterhalb des Schwellwerts liegt. Ansonsten Identisch zu 0x01

      - 0x85: Mapping des Messwertes. Der Messwert wird anhand von lowerBound und upperBound in den kompletten Wertebereich des Akkumulators gemappt. Falls der Messwert kleiner als lowerBound oder größer als upperBound ist wird der Rückgabewert entsprechend auf den Min- oder Max-Wert des Akkumulators gesetzt.
 - lowerBound und upperBound im Datentyp Int32, da dieser vom Akkumulator verwendet wird.

Dies kann Wiederum mit dem Opcode 0xB049 abgerufen werden, die Payload bleibt dabei leer. Die Antwort ist in dem gleichen Schema wie bei der Konfiguration verwendet