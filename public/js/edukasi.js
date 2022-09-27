function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       let substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return substring;
       }
    }
    return null; 
}

    let arrJenis = [
        'cupang',
        'arwana'
    ]

    let arrCat = [
        'mudah',
        'normal',
        'sulit'
    ]

    let result = containsAny(location.href, arrCat)
    let total = result?.length + 5