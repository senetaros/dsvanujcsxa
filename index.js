import _ from 'lodash';

export default function solution(content) {
  const arr = content.split('\r\n');
  const countCars = arr.slice(1, arr.length - 1);
  console.log(`Количество автомобилей: ${countCars.length}`);

  const arr2 = countCars.map((r) => r.split(','));
  const probeg = arr2.map((r) => r[4]);
  const toNum = probeg.map((r) => Number(r));
  const sum = _.sum(toNum);
  const srZnach = sum / countCars.length;
  console.log(`Средний пробег: ${srZnach}`);

  const price = arr2.map((r) => r[7]);
  const toNum2 = price.map((r) => Number(r));
  const max = _.max(toNum2);
  console.log(`Стоимость самой дорогой машины: ${max}`);

  const year = arr2.map((r) => r[2]);
  const toNum3 = year.map((r) => Number(r));
  const old = _.min(toNum3);
  const oldCar = arr2.filter((r) => r[2] === old.toString());
  const nameCar = oldCar.map((r) => r[0]);
  const modelCar = oldCar.map((r) => r[1]);
  const k = nameCar.join('');
  const l = modelCar.join('');
  console.log(`Самый старый автомобиль: ${k} ${l}`);

  const color = arr2.map((r) => r[8]);
  const uniq = _.uniq(color);
  let red = 0;
  let black = 0;
  let white = 0;
  let gray = 0;
  let yellow = 0;
  let blue = 0;
  let green = 0;
  let bblue = 0;
  for (let i = 0; i < color.length; i += 1) {
    if (color[i] === uniq[0]) {
      red += 1;
    }
    if (color[i] === uniq[1]) {
      black += 1;
    }
    if (color[i] === uniq[2]) {
      white += 1;
    }
    if (color[i] === uniq[3]) {
      gray += 1;
    }
    if (color[i] === uniq[4]) {
      yellow += 1;
      bblue += 1;
    }
    if (color[i] === uniq[5] && uniq[5] !== undefined) {
      blue += 1;
    }
    if (color[i] === uniq[6] && uniq[6]) {
      green += 1;
    }
  }
  if (uniq[6] === undefined) {
    console.log(`Все цвета: ${uniq[0]}: ${red}, ${uniq[1]}: ${black}, ${uniq[2]}: ${white}, ${uniq[3]}: ${gray}, ${uniq[4]}: ${bblue}`);
  } else {
    console.log(`Все цвета: ${uniq[0]}: ${red}, ${uniq[1]}: ${black}, ${uniq[2]}: ${white}, ${uniq[3]}: ${gray}, ${uniq[4]}: ${yellow}, ${uniq[5]}: ${blue}, ${uniq[6]}: ${green}`);
  }
}
