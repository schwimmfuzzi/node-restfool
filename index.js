function Restfool() {
    // this.bar = bar;
}

Restfool.prototype.index = function index() {
    return 'index';
};
Restfool.prototype.details = function details() {
    return 'details';
};
Restfool.prototype.create = function create() {
    return 'create';
};
Restfool.prototype.update = function update() {
    return 'update';
};
Restfool.prototype.rewrite = function rewrite() {
    return 'rewrite';
};
Restfool.prototype.remove = function remove() {
    return 'remove';
};

module.exports = Restfool;

  