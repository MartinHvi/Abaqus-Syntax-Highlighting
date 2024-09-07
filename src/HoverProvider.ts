import * as vscode from 'vscode';
import * as fs from 'fs';

// Define a type for the hover information
interface HoverInfo {
  [key: string]: string;
}

// Dynamic Import for custom hover settings
const jsonPath: string =
  vscode.workspace
    .getConfiguration()
    .get<string>('abaqusSyntaxHighlighting.customHover.pathJSON') ?? '';

// Catch invalid path to .json
function readJSON(jsonPath: string): HoverInfo {
  let data: HoverInfo;
  try {
    data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  } catch (err) {
    data = {
      default: 'default hover',
    };
  }
  return data;
}

const hoverInfo = readJSON(jsonPath);

export class HoverProvider implements vscode.HoverProvider {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
  ): vscode.Hover {
    // Get word range
    const wordRange = document.getWordRangeAtPosition(
      position,
      /[A-Za-z0-9*-_\s]+/gm,
    );
    if (!wordRange) {
      return { contents: [] };
    }

    // Get the word and turn it to lowercase in order to match the hoverInfo.json
    const word = document.getText(wordRange).toLowerCase();

    // The markdownstring returned from the hover
    const content = new vscode.MarkdownString(
      hoverInfo[word] || 'No information available',
    );
    console.log(hoverInfo[word]);
    return {
      contents: [content],
    };
  }
}
