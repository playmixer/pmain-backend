export const formatDate = (s = "", format="dd.mm.YYYY") => {
    // s = 1998-11-18
    const [year, month, day] = s.split("-")
    let res = []
    const _format = format.split(".")
    _format.map((v) => {
        if (v === "dd") res.push(day)
        if (v === "mm") res.push(month)
        if (v === "YYYY") res.push(year)
    })
    return res.join(".")
}