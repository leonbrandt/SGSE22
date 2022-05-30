# Rei Berberi

- Thema: Web-Entwicklung für kommerzielle Content-Websites: PHP vs. JavaScript

- Forschungsfragen:

  - Wie wird WordPress-Themes und PHP verwendet, um kommerzielle Content-Websites im Vergleich zu JavaScript-Frameworks ?
  - Ist es für digitale Marketing- und Webentwicklungunternehmen kostengünstiger, ihren Entwicklungsprozess auf WordPress und PHP statt auf JavaScript-Lösungen zu stützen?

- Gliederung:

  - Einleitung
  - Vergleich PHP vs JavaScript

    - Simplizität (Lernkurve und Syntax)

      - Welche der beiden Skriptsprachen ist einfacher zu erlernen?
      - Wie sind die Syntaxen im Vergleich zueinander?

        Typisierung von Variablen

        PHP und JavaScript sind beides Skriptsprachen, die in der Regel interpretiert und nicht kompiliert werden. Das bedeutet, dass sie nicht direkt, sondern über eine dritte Partei in Maschinencode übersetzt werden. Dies wirkt sich auf ihre Laufzeit aus. Aus diesem Grund sind kompilierte Sprachen in der Regel schneller als interpretierte Sprachen.
        Eine Gemeinsamkeit ist, dass PHP und JavaScript schwach typisiert sind. Das heißt, wenn eine Variable in einer der beiden Sprachen erstellt wird, muss ihr Datentyp nicht zugewiesen werden: Er wird vorausgesetzt.
        Man kann also Folgendes in PHP schreiben:
        `$x = 'Hello world';`
        `$y = 'Goodbye world';`

        Oder in JavaScript:
        `var x = 'Hello world';`
        `let y = 'Goodbye world';`

        In beiden Sprachen werden diese Variablen als Zeichenketten erkannt. Dies steht im Gegensatz zu einer stark typisierten Sprache wie Java, wo Sie bei der Deklaration einer Variablen angeben müssen, welchen Typ Sie verwenden.
        Sowohl PHP als auch JavaScript sind dynamisch typisiert, d. h., der Typ kann leicht geändert werden, indem er im Code neu definiert wird:
        `$x = 5;`
        In PHP ist $x jetzt eine ganze Zahl.
        `x = 3.14195;`
        In JavaScript ist x jetzt eine Zahl.

        Da die Typen in PHP oder JavaScript nicht explizit definiert sind, werden Funktionen benötigt, um zu erkennen, mit welchem Datentyp gearbeitet wird. In JavaScript gibt es dafür die Funktion typeof. In PHP gibt es die Funktion gettype, die den Typ einer Variablen zurückgibt. Eine neue, verbesserte Version von gettype, get_debug_type, ist Teil der PHP 8 Version.

    - Performanz und Geschwindigkeit
      - JavaScript: ereignisgesteuertes, einfädiges, nicht blockierendes E/A-Ausführungsmodell, asynchron
      - PHP: Multithreading, blockierendes E/A-Ausführungsmodell, synchron
    - Integration (Erweiterbarkeit)
      - JavaScript kann mit HTML, XML und Ajax kombiniert werden. Front-end Technologien wie Vue, Angular, React. Node js als server-side framework. NPM als Package Manager.
      - PHP kann nur mit HTML kombiniert werden. Integration mit CMS (z.B. WordPress) und LAMP Stack Technologien wie MySQL und PostgreSQL. PEAR und Composer als Package Managers.
    - Universalität
      - JavaScript: Full Stack
      - PHP: Back End only. LAMP Stack als Nachteil?
    - Community und Arbeitsmarkt

  - Entwicklung von kommerzielle Websites mit WordPress und PHP
    - ...
  - Entwicklung von kommerzielle Websites mit JavaScript und Angular
    - ...
  - WordPress und PHP im Unternehmen

    - Verfügbarkeit von Arbeitskräften
    - Kosten
    - ...

  - Rückblick auf Forschungsfragen
  - Fazit

- ToDo[Progress 1-10]:

  - Theorieteil PHP vs JavaScript ausarbeiten [5]
  - Entwicklung von kommerzielle Website WordPress/Php - JavaScript/Angular [1]
  - Gespräche mit den Arbeitnehmer [3]

- Zeitplan:
  - [+] KW 14: Einführung SGSE Modul
  - [+] KW 15: Themenauswahl
  - [+] Bis KW19: Einarbeitung in PHP und WordPress Themes mit PHP durch Tutorials/Online-Kurse, Selbstlernen und Arbeitsprojekte.
  - [+] KW20: Anpassung der Forschungsfragen, Besprechung mit Herrn Brunsmann, Endgültige Thema der Ausarbeitung steht fest.
  - [] KW21 bis KW24: Ausarbeitung Vergleich PHP-JavaScript mit Theorie und Code Beispiele, Ausarbeitung Entwicklung von kommerzielle Website WordPress/Php - JavaScript/Angular, Gespräche mit dem Arbeitnehmer.
  - [] KW25 bis KW26: Finalisierung/Antwort auf Forschungsfragen, Korrektur, Anpassung Format.
  - [] KW26: Abgabe
