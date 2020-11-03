import json from '@/assets/megami_list.json';

const megamiList: Array<Megami> = json.megamiList;
const megamiCount: number = json.megamiCount;

const pick = (count: number): Array<Megami> => {
  let numbers: Array<number> = [];

  while (numbers.length < count) {
    const n: number = Math.floor(Math.random() * megamiCount) + 1;
    if (! numbers.includes(n)) {
      numbers.push(n);
    }
  }

  numbers = numbers.sort((a, b) => a - b);

  const result: Array<Megami> = [];
  numbers.forEach(n => {
    const found: Megami[] = megamiList.filter(megami => megami.number === n);
    if (found.length > 0) {
      const i = Math.floor(Math.random() * found.length);
      result.push(found[i]);
    }
  });

  return result;
};

export {
  pick,
};
