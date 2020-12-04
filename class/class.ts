class ExpandableSuperClass {
    private param2: any;
    private param1: any;

    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }

    ExpandableSuperClassMethod() {
    }
}

class ClassName extends ExpandableSuperClass {
    private param3: any;

    constructor(param1, param2, param3) {
        super(param1, param2);
        this.param3 = param3;
    }

    method() {
    }

    get setGetMethod() {
    }

    set setGetMethod() {
    }

    static staticMethod() {
    }

}
new ClassName("arg1", "arg2", "arg3")
