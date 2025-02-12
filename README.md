Unofficial VS Code extension for abaqus input file support.

---

# Features

- [x] Syntax highlighting
- [x] Custom hover
- [x] Commands accessible by the command palette using "CTRL + SHIFT + P" and searching for: Abaqus: Indent lines, Abaqus: Format, Abaqus: Compact, Abaqus: Remove leading spaces, Abaqus: Remove all comment, Abaqus: Remove empty comments, Abaqus: Remove blank lines, Abaqus: Uppercase.
- [x] If the command "Abaqus: Indent lines" is used then all data lines can be folded using "CTRL + K + 0". To unfold use "CTRL + K + J".

---

# Abaqus Syntax Highlighting VSCode

![DEMO1](https://github.com/MartinHvi/abaqus-syntax-highlighting/blob/main/images/DEMO.gif?raw=true)

The Abaqus Syntax Highlighting extension will add syntax highlighting and make your Abaqus files easier to read. The extension also support custom hover information.

Supported file extensions:

- .inp
- .inc
- .incl
- .pes

---

# How to add custom hover information

Create a .json file with the keys in lowercase and values as a markdown string. An example of a json file with custom hover information can be seem below for the words "default" and "example".

```json
{
  "default": "# Default hover info \n\n This is a **default** hover 🧐",
  "example": "# Example hover info \n\n This is an **example** 🧐"
}
```

![DEMO2](https://github.com/MartinHvi/abaqus-syntax-highlighting/blob/main/images/hoverDemo.PNG?raw=true)

## There are two ways to add the path for the json file.

**Alternative 1.** Follow the steps shown below then restart VSCode.
![DEMO3](https://github.com/MartinHvi/abaqus-syntax-highlighting/blob/main/images/demoHover.gif?raw=true)

**Alternative 2.** CTRL+Shift+P and select "Preferences: Open User Settings (JSON)". Add the line below with the path to your json file then restart VSCode.

```json
{
  "abaqusSyntaxHighlighting.customHover.pathJSON": "C:\\Users\\Username\\Desktop\\customhover.json"
}
```
