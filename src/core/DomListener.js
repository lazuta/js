import {capitalize} from '@core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('[DomListener] no $root provided');
        }

        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            if (!this[method]) {
                throw new Error(`Method ${method} not in  ${this.name || ''} component`);
            }

            this.$root.on(listener, this[method].bind(this));
        })
    }

    removeDOMListeners() {

    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}
