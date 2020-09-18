/**
 * Small components to add keyboard shortcuts to an application
 */
class KeyboardShortcuts{
    constructor(params = {}){
        this.params = {
            eventInCallback : false
        };

        for(let param in params){
            if(param in this.params){
                this.params[param] = params[param];
            }
        }

        this.shortcuts = {};

        document.addEventListener('keyup', e => this.keyupListener(e));
    }

    /**
     * Add a shortcut to the list with its callback
     * @param shortcut
     * @param callback
     */
    add( shortcut, callback ){
        this.shortcuts[shortcut] = callback;
    }

    /**
     * Listen the shortcut and execute the function associated with it
     * @param e
     */
    keyupListener(e){
        let shortcuts = this.shortcuts;

        let keysPressed = '';
        if( e.ctrlKey ){
            keysPressed += 'ctrl+';
        }
        if(e.altKey){
            keysPressed += 'alt+';
        }
        if(e.metaKey){
            keysPressed += 'cmd+';
        }

        keysPressed += e.key;

        if( Object.keys(shortcuts).indexOf( keysPressed ) !== -1 ){
            if( this.params.eventInCallback ){
                shortcuts[keysPressed](e);
            }
            else{
                shortcuts[keysPressed]();
            }
        }
    }
}

export default KeyboardShortcuts;