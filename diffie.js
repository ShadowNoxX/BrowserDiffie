class DH {
    generateCommonKey() {
        (this.generator = this.generateRandom(256)), (this.prime = this.generateRandom(2048));
    }
    generateSecret() {
        this.secret = this.generateRandom(2048);
    }
    inform(e, t) {
        (this.generator = e), (this.prime = t);
    }
    power(e, t, r) {
        e %= r;
        for (var i = BigInt(1), n = e; t > 0; ) {
            var s = t % BigInt(2);
            (t /= BigInt(2)), s == BigInt(1) && ((i *= n), (i %= r)), (n *= n), (n %= r);
        }
        return i;
    }
    generatePublic() {
        if (null == this.secret) return console.log("You didn't generate the secret key!"), !1;
        this.public = this.power(this.generator, this.secret, this.prime);
    }
    generateShared(e) {
        this.shared = this.power(e, this.secret, this.prime);
    }
    generateRandom(e) {
        var t = "0b";
        for (let r = 0; r < e; r++) t += Math.round(Math.random());
        return BigInt(t);
    }
}
