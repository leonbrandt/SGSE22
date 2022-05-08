# Safety engineering

**Autor:** Rafael Berger

Zu der Eigenschaft Zuverlässigkeit gehört Sicherheit mit zu den wichtigsten. Damit ein System als sicher eingestuft werden kann, darf es während der Benutzung zu keinen schwerwiegenden Ausfällen kommen. Durch diese Ausfälle dürfen somit keine Menschenleben riskiert werden. Aber auch schlimme Verletzungen von Personen müssen dabei ausgeschlossen werden. Zusätzlich müssen Umweltschäden vermieden werden, da diese ebenfalls schlimme Folgen für die Menschen haben können. <br>
Es gibt zwei verschiedene Möglichkeiten wie Software in einem sicherheitskritischen System zu betrachten ist:
1. **Softwaregesteuertes System**
   * Die Software hat einen direkten Einfluss auf die Gesamtsicherheit des Systems.
2. **Software zum Überprüfen und Überwachen eines Systems**
   * Die Software wird eingesetzt, um kritische Komponenten eines System zu Überwachen, da der Ausfall dieser Komponenten zu einem erhöhten Risiko führt.

Wenn ein System als zuverlässig eingestuft werden kann, heißt dies nicht automatisch das dies ebenfalls sicher ist. Es gibt vier verschiedene Gründe warum eine zuverlässiges Softwaresystem nicht sicher sein kann:
1. Es gibt keine Garantie, dass ein Softwaresystem fehlerfrei funktioniert.
2. Die Spezifikation ist fehlerhaft und/oder unvollständig, wodurch wichtige kritische Szenarien nicht berücksichtigt wurden.
3. Es können Fehler bei der Hardware entstehen, wodurch diese nicht mehr funktionieren.
4. Bei der Verwendung eines System werden falsche Eingaben getätigt, die zu einen Fehler führen.

Aufgrund dieser genannten Punkte muss ein System nicht nur zuverlässig sein, sondern auch die Sicherheit muss berücksichtigt werden.

## Sicherheitskritische Systeme

Unter einem Sicherheitskritischen System ist zu verstehen, dass das System unter keinen Umständen einem Menschen oder der Umwelt schädigen darf und das unabhängig davon, ob sie sich wie in der Spezifikation definiert verhält oder dies nicht tut. Es gibt zwei unterschiedliche Typen von sicherheitskritische Software:
1. **Primär sicherheitskritische Software**:
   * Hierbei handelt es sich um eine Software, wo ein Fehler dazu führen kann, das die Hardware nicht mehr ordnungsgemäß funktioniert und somit ein Mensch oder die Umwelt verletzt werden kann
2. **Sekundär sicherheitskritische Software**:
   * Bei dieser Art von Software führt ein Fehlverhalten nicht direkt zu einem Problem, sondern es besteht die Möglichkeit das nachfolgende Operationen aufgrunddessen zu einem Fehler führen.

Wichtig hierbei ist die Unterscheidung zwischen einer Gefahr und einen Unfall wichtig. Eine Gefahr ist ein Zustand eines System, wodurch ein Unfall entstehen kann. Somit sind diese beiden Begriffe nicht gleichzusetzen. Das heißt jedoch, dass die Reduzierung einer Gefahr ebenfalls dazu führt, dass die Anzahl an Unfälle reduziert werden. In der folgenden Tabelle sind die verschiedenen Definitionen der einzelnen Begriffe nach Sommerville [1] aufgeführt.

Begriff                    | Definition
---------------------------|-----------
Unfall(Missgeschick)       | Ein ungeplantes Ereignis oder eine Abfolge von Ereignissen, die zu Tod oder Verletzung von Menschen, Sach- oder Umweltschäden führen.
Schaden                    | Ein Maß für den Verlust, der aus einem Missgeschick resultiert. Die Schäden können von vielen Toten durch einen Unfall bis hin zu leichten Verletzungen oder Sachschäden reichen.
Gefahr                     | Ein Zustand, der einen Unfall verursachen oder dazu beitragen kann.
Gefahrenwahrscheinlichkeit | Die Wahrscheinlichkeit des Eintretens von Ereignissen, die eine Gefährdung erzeugen. Wahrscheinlichkeitswerte sind in der Regel willkürlich, reichen aber von „wahrscheinlich“ (z. B. 1/100 Wahrscheinlichkeit, dass eine Gefahr eintritt) bis „unglaubwürdig“ (es sind keine denkbaren Situationen wahrscheinlich, in denen die Gefahr auftreten könnte).
Schweregrad der Gefahr     | Eine Einschätzung des größtmöglichen Schadens, der durch eine bestimmte Gefährdung entstehen könnte. Die Schwere der Gefährdung kann von katastrophal, bei der viele Menschen getötet werden, bis zu gering, bei der nur geringfügige Schäden entstehen, reichen.
Risiko                     | Ein Maß für die Wahrscheinlichkeit, dass das System einen Unfall verursacht. Das Risiko wird bewertet, indem die Gefährdungswahrscheinlichkeit, die Gefährdungsschwere und die Wahrscheinlichkeit, dass die Gefährdung zu einem Unfall führt, berücksichtigt werden.

Bei der Entwicklung von sicherheitskritischen Systemen gibt es eine gefahrengesteuerte Technik, wodurch mögliche Unfälle berücksichtigt werden. Für diese Technik gibt es drei Ansätze:
1. **Vermeidung von Gefahren**:
   * Das System ist so angepasst, dass eine mögliche Gefahr nicht auftreten kann.
2. **Erkennung und Beseitigung von Gefahren**:
   * Das System kann Gefahren frühzeitig erkennen und Maßnahmen einleiten, bevor ein Unfall entsteht.
3. **Schadenbegrenzung**:
   * Das System versucht den Schaden, der ein Fehler verursacht, zu minimieren.

Laut Perrow [2] lassen sich fast alle Unfälle auf die Kombination von Fehlern aus unterschiedlichen Subsystemen zurückführen. Er erklärte, dass es in komplexen Systemen es unmöglich ist alle Kombinationen von Fehler vorherzusehen. Vorallem werden die Systeme immer komplexer, wodurch die Übersicht über die möglichen Fehler immer schwieriger wird. Perrow war der Meinung, dass es "normale Unfälle" gibt, da nicht alle Unfälle zu vermeiden sind und somit diese bei dem Konstruieren von komplexen sicherheitskritischen Systemen als unvermeidlich betrachtet werden müssen.

## Sicherheitsanforderungen

### Gefährdungsermittlung

### Gefährdungsbeurteilung

### Gefahrenanalyse

### Risikominderung

## Sicherheitstechnische Prozesse

### Sicherheitsgewährleistungsprozesse

### Formale Verifizierung

### Modellprüfung

### Statische Programmanalyse

## Sicherheitsfälle

### Strukturierte Argumente

### Software-Sicherheitsargumente

## Referenzen

[1]: Ian Sommerville, Software Engineering, 10. Aufl., Kapitel 12 339-372. <br>
[2]: Perrow, C. 1984. Normal Accidents: Living with High-Risk Technology. New York: Basic Books.
