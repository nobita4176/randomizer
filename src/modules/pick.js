import json from '@/assets/megami_list.json';
var megamiList = json.megamiList;
var megamiCount = json.megamiCount;
var pick = function (count) {
    var numbers = [];
    while (numbers.length < count) {
        var n = Math.floor(Math.random() * megamiCount);
        if (!numbers.includes(n)) {
            numbers.push(n);
        }
    }
    var result = [];
    numbers.forEach(function (n) {
        var found = megamiList.find(function (megami) { return megami.number === n; });
        if (found) {
            result.push(found);
        }
    });
    return result;
};
export { pick, };
//# sourceMappingURL=pick.js.map