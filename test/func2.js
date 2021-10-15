module.exports = function(firstName, lastName) {
    const badge = {
        firstName,
        lastName,
        get fullName() {
            return `${this.lastName} ${this.firstName}`
        }
    };

    const proxedBadge = new Proxy(badge, {
        set(target, prop, value) {
            if (prop === 'fullName' && value.split(' ').length === 2) {
                target.lastName = value.split(' ')[0];
                target.firstName = value.split(' ')[1];
                return true;
            }
            if (prop in target) {
                target[prop] = value;
            }
            return false;
        }
    });

    return proxedBadge;
}