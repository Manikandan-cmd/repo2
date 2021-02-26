function lookup(val) {
    var result = "";
    var names = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = names[val];
    return result;
}
console.log(lookup(delta));