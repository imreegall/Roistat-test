export function getRainbowColorByNumber(number) {
    const colors = [
        "#ff4646",
        "#ff6f37",
        "#ffff62",
        "#48c948",
        "#5858ff",
        "#7c44a6",
        "#fc90fc",
    ]

    const colorIndex = number % colors.length

    return colors[colorIndex]
}
