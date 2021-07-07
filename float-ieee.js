export const Binary = {
    /**
     * Convert number to the stringified IEEE binary.
     * @param {number} number 
     * @param {boolean} format Adds spacing every 4 characters.
     */
    stringify(number, format = true) {
        const str = new BigInt64Array(
            new Float64Array([number]
        ).buffer)[0].toString(2)

        if(!format) return str
        return str
            .padStart(64, 0)
            .replace(/\d{4}(?!$)/g, "$& ")
    },
    /**
     * Convert text containing 1s, 0s into a number as raw IEEE binary.
     * @param {string} stringified_binary 
     */
    parse(stringified_binary) {
        return new Float64Array(
            new BigInt64Array(
                [BigInt(`0b${stringified_binary.replaceAll(" ","")}`)
            ]).buffer)[0]
    }
}
