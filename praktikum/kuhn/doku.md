# Design Thinking und User Centered Design - Der Nutzer im Fokus der Entwicklung

Diese Arbeit beschäftigt sich damit, wie sich der Nutzer am besten in den Fokus der Entwicklung einbinden lässt. Zu
diesem Zweck werden zwei Ansätze betrachtet. Einerseits das Design Thinking und zum Anderen das User Centered Design.
Diese Ansätze werden auf zwei Projekte angewendet, um einen möglichst vielseitigen Blick auf die Vor- und Nachteile zu
erlangen. Da beide Ansätze an verschiedenen Punkten der Entwicklung angesetzt werden können, werden sie für das
jeweilige Projekt nacheinander ausgeführt.

## Aufgabenstellung

Für dieses Projekt soll zuerst Design Thinking und User Centered Design ergründet werden. Mit diesem Wissen kann dann
ein Projektplan erstellt werden, nach dem die beiden Anwendungen entwickelt werden. Bei den beiden Anwendungen handelt
es sich um Apps. Abschließend soll eine qualitative Einschätzung der Vor- und Nachteile der beiden Ansätze passieren.

## Grundlagen

Dieses Kapitel soll die Grundlagen für die Arbeit legen. Dafür werden primär die beiden Entwicklungsansätze betrachtet.

### Design Thinking

Design Thinking beschreibt einen Ansatz der Innovationen fördern soll, um Probleme zu lösen. Dabei liegt der Fokus immer
auf dem Nutzer und dessen Probleme, die verstanden werden müssen. Hierbei ist Design Thinking zu aller erst eine
Philosophie aus der verschiedene Methoden abgeleitet werden können.

Der Ansatz baut auf 4 Grundpfeilern auf: Prinzipien, Rahmenbedingungen, Prozess und Team. Bestimmte Prinzipien müssen
immer befolgt werden, dazu zählt zum Beispiel, dass Fehler auf jeden Fall erlaubt sind oder Teammitglieder auf Augenhöhe
kommunizieren. Bevor der eigentliche Prozess gestartet werden kann, müssen Rahmenbedingungen festgelegt werden, die
unter anderem festlegen können, wie die Zielvision aussieht oder in welchem Zeitrahmen gearbeitet wird. Bei der Bildung
eines Teams ist es wichtig darauf zu achten, dass das Team interdisziplinär ist, um möglichst viele Ansichten beachten
zu können und den Nutzer optimal verstehen zu können. Der Prozess des Design Thinkings besteht dann aus mehreren Phasen,
die je nach Lehre variieren können.

Als Beispiel wird der Prozess des Hasso Plattner Instituts vorgestellt, der aus sechs Phasen besteht.

1. Verstehen: Problem verstehen und daraus Aufgabenstellung definieren
2. Beobachten: Nutzerverhalten analysieren, daraus Hindernisse erkennen
3. Standpunkt definieren: Das Problem aus sicht der Nutzer beschreiben
4. Ideen generieren: Möglichst viele (auch unrealistische) Ideen entwickeln
5. Prototyp erstellen: Ideen konkretisieren und daraus Prototyp erstellen
6. Testen: Rückmeldungen zum Prototypen einholen und einarbeiten (Iteration)

### User Centered Design

### Flutter

Flutter ist ein Multiplattform-Framework, dass es ermöglicht mit einer Codebasis viele Plattformen zu bespielen. Als
Programmiersprache wird Dart benutzt, eine als Alternative zu Javascript erdachte Sprache. Das von Google geführte
Projekt konnte zum Start in 2017 nur Android und iOS als Plattformen bedienen. Inzwischen sind mit Web, Windows und
Linux eine große Auswahl an Plattformen hinzugekommen. [Flutter]

Neben der großen Auswahl an Plattformen bietet Flutter die Möglichkeit schnell und einfach ansprechende Anwendungen zu
entwerfen. Hierbei helfen eine Vielzahl von Haus aus verfügbaren Widgets, die im Material Design konzipiert sind.
Außerdem gibt es die Möglichkeit des *Hot Reloads*, der Änderungen am Design direkt in der Anwendung anzeigt, ohne die
App komplett neu bauen zu müssen.

Im Vorfeld zu diesem Projekt wurden bereits gute Erfahrungen mit Flutter gemacht, weshalb beide Anwendungen mit dem
Framework entwickelt werden.

## Projektdesign

Der grundlegende Aufbau des Projekts besteht aus zwei Phasen. Zuerst wird Design Thinking eingesetzt, um die
grundlegenden Anforderungen zu finden und einen Prototyp zu entwerfen. Dieser Prototyp soll dann mithilfe des User
Centered Design weiterentwickelt und umgesetzt werden.

### Phase 1: Design Thinking

In der ersten Phase wird Design Thinking angewendet. Dafür werden die entsprechenden sechs Schritte durchlaufen. Im
Kick-off wir die vorläufige Aufgabenstellung aufgestellt, die dann diskutiert und verfeinert werden soll.

Für das Verstehen sollen Brainstorming und die User Journey map zum Einsatz kommen. Bei der User Journey Map handelt es
sich um eine Methode bei der ein bekannter Ablauf, der mit dem Projekt optimiert werden soll, analysiert wird und
jeder Schritt vom Nutzer eingeschätzt wird. Dadurch kann herausgefunden werden, an welchen Stellen Probleme aufkommen
können und entsprechende Verbesserungen ansetzen können.

Für den Schritt des Beobachtens wird das stille Beobachten genutzt. Dabei wird ein nutzer beobachtet, wie er den
bisherigen Ablauf durchführt. Hierbei soll vor allem auf Details geachtet werden, häufig können Verhaltensweisen erkannt
werden, die ein nutzer selber gar nicht registered. Im Anschluss wird noch ein Interview geführt, das weiteren
Aufschluss über das Verhalten und die dazugehörigen Beweggründe geben soll. Um die Antworten auszuwerten, soll die Dark
Horse zum Einsatz kommen. Dabei werden die Ergebnisse in Paaren nach Bedürfnisse und Hürden eingeteilt, die wiederum in
der nächsten Phase verwendet werden können.

Um einen Standpunkt zu definieren sind Personas ein wichtiges Mittel. Dabei spielen vor allem extreme Nutzer eine große
Rolle. Da die Abbildung dieser helfen kann die Extremen eines Problems zu betrachten. Mithilfe der Personas kann dann
eine neue Challenge aufgestellt werden, auf welcher die Ideenfindung beruht.

Im Nächten Schritt werden Ideen generiert. Um möglichst viele Ideen zu finden, wird die Crazy 8 methode angewendet.
Dabei hat jedes Teammitglied eine Minute Zeit um sich eine Idee auszudenken. Danach muss er zur nächsten idee weiter
gehen. Das wird dann achtmal wiederholt. Mithilfe von Dot Voting werden die besten Ideen ausgesucht. Beim Dot Voting
erhält jedes Teammitglied eine bestimmte Anzahl von Punkten, die dann beliebig verteilt werden können. Die Ideen mit den
meisten Punkten werden dann ausgewählt.

Mithilfe der besten Ideen kann dann ein Prototyp erstellt werden. Zu diesem zweck werden die ideen zuerst konkretisiert
und zu Anforderungen formuliert. Mithilfe der Anforderungen werden dann Mockups erstellt, die die komplette Anwendung
darstellen.

### Phase 2: User Centered Design

In der zweiten Phase wird der Prototyp aus Phase 1 genutzt, um ihn mithilfe von User Centered Design weiterzuentwickeln
und umzusetzen.

Da bereits ein Prototyp besteht, wird mit der Phase der Evaluation begonnen. Zu diesem zweck wird direktes Feedback von
potenziellen Nutzern über ein Fragebogen eingeholt. Das hat den Vorteil, dass möglichst viele Menschen innerhalb von
einem kleinen Zeitraum antworten können. So können trotz der Kürze des Projektzeitraums mehrere Iterationen durchgeführt
werden.

Aus den Antworten des Fragebogens werden die neuen Spezifikationen erstellt. Also welche Punkte konkret anders zum
ersten Prototypen gestaltet werden sollen. mit diesen Anforderungen kann dann eine erste Version der jeweiligen
Anwendung implementiert werden. Mit dieser Version kann dann eine zweite iteration des User Centered Design durchgeführt
werden. Also wieder das Feedback über einen Fragebogen einholen, um daraus neue Anforderungen zu bilden. Je nach
zeitlicher Verfügbarkeit können diese Anforderungen noch einmal umgesetzt werden. 

Diese Iteration können beliebig weiter geführt werden, um eine Anwendung weiter zu optimieren. 

## Durchführung

### Design Thinking

#### Rettungsapp

#### Erweiterung zu Spotify

### User Centered Design

#### Rettungsapp

#### Erweiterung zu Spotify

## Fazit

## Quellen

[Flutter]

[Flutter]: https://flutter.dev/




