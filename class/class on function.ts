const ExpandableSuperClass = function (param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
}
ExpandableSuperClass.prototype.ExpandableSuperClassMethod = function () {
};

const ClassName = function (param1, param2, param3) {
    ExpandableSuperClass.apply(this, arguments)
    this.param3 = param3;
    Object.defineProperty(this, "setGetMethod", {
        get: function () {
        },
        set: function () {
        }
    })

    function staticMethod() {
    }
}

ClassName.prototype = Object.create(ExpandableSuperClass.prototype)
ClassName.prototype.constructor = ClassName;

ClassName.prototype.method = function () {
}

new ClassName('arg1', 'arg2', 'arg3')
