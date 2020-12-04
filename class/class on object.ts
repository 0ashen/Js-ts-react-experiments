const ExpandableSuperClass = {
    constructor: function (param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
        return this
    },
    ExpandableSuperClassMethod: function () {
    }
}

const ClassName = Object.create(ExpandableSuperClass);
ClassName.constructor = function (param1, param2, param3) {
    ExpandableSuperClass.constructor.apply(this, arguments);
    this.param3 = param3;
    return this;
}
ClassName.method = function () {
}

Object.defineProperty(ClassName, "setGetMethod", {
    get: function () {
    },
    set: function () {
    }
})

const object = Object.create(ClassName).constructor('arg1', 'arg2', 'arg3');

function staticMethod() {

}
