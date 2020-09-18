import KeyboardShortcuts from "./components/KeyboardShortcuts.js";

let shortcutsManager = new KeyboardShortcuts();
shortcutsManager.add( 'ctrl+z', () => alert('CTRL + Z pressed'));
shortcutsManager.add( 'ctrl+alt+z', () => alert('CTRL + ALT + Z pressed'));
shortcutsManager.add( 'ctrl+d', () => alert('CTRL + D pressed'));