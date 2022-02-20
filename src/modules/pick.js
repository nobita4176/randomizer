import json from '@/assets/megami_list.json';
const megamiList = json.megamiList;
const megamiCount = json.megamiCount;
const pick = function (count) {
    const numbers = [];
    while (numbers.length < count) {
        const n = Math.floor(Math.random() * megamiCount);
        if (!numbers.includes(n)) {
            numbers.push(n);
        }
    }
    const result = [];
    numbers.forEach(function (n) {
        const found = megamiList.find(function (megami) { return megami.number === n; });
        if (found) {
            result.push(found);
        }
    });
    return result;
};
export { pick, };
//# sourceMappingURL=pick.js.map