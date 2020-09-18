## KeyboardShortcuts
KeyboardShortcuts is a small ES6 module to add keyboard shortcuts to a web application.

## Instanciation
Like every ES6 module you just need to import it and instanciate it with the new keyword
```javascript
import KeyboardShortcuts from "./components/KeyboardShortcuts.js";

let shortcutsManager = new KeyboardShortcuts({params});
```

## Parameters
* eventInCallback : `boolean` : Default `false`
    * Set this parameter to true if you want to have the event passed in parameters of the callback
    
## Methods
The module has 2 methods but you MUST use only one of them

* add : return `void`
    * Parameters : shortcut `string` callback `callable`
    * Add a shortcut to the list with its callback. To add a combination of keys just separate them with a __+__
* keyupListener : return `void`
    * Paremeters : e `KeyboardEvent`
    * Listen for shortcut added to the list
    
### Author
**Kevin Goyvaerts**
+ [http://github.com/MrDeliK](http://github.com/MrDeliK)