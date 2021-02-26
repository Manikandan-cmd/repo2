var count = 0;

function cc(card) {
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "K":
        case "J":
        case "Q":
        case "A":
            count--;
            break;

    }
    if (0 < count) {
        return count + "Bet";
    } else {
        return count + "Hold";
    }

}