export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('[DomListener] no $root provided');
        }
        this.$root = $root;
    }
}