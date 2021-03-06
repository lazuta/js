class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }

        return this.$el.innerHTML.trim();
    }

    clear() {
        this.html('');

        return this;
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }

    closets(selector) {
        return $(this.$el.closest(selector));
    }

    getCoords() {
        return this.$el.getBoundingClientRect();
    }

    get data() {
        return this.$el.dataset;
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    css(style = {}) {
        Object.keys(style).forEach(key => this.$el.style[key] = style[key]);
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }

    return $(el);
}
