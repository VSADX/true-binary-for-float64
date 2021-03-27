export const float_ieee = {
    bits(num = NaN, format = true) {
        let str = new BigInt64Array(
            new Float64Array([num]
        ).buffer)[0]
            .toString(2)

        if(!format) return str
        return str
            .padStart(64, 0)
            .replace(/\d{4}(?!$)/g, "$& ")
    },
    num(str = "") {
        return new Float64Array(
            new BigInt64Array(
                [BigInt(`0b${str.replaceAll(" ","")}`)
            ]).buffer)[0]
    }
}
