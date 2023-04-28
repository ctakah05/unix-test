import health from '../health';
import mat from '../matchers';

const healthObj = [
  [{ name: 'Маг', health: 60 }, 'healthy'],
  [{ name: 'Лучник', health: 35 }, 'wounded'],
  [{ name: 'Мечник', health: 10 }, 'critical'],
];

const handler = test.each(healthObj);

handler('health level for %Unit', (person, expected) => {
  const result = health(person);
  expect(result).toBe(expected);
});


const testing = [
  { name: 'мечник', health: 15 },
  { name: 'маг', health: 60 },
  { name: 'лучник', health: 45 },
];

const handlerM = test.each(testing);

handlerM('sort by health', () => {
  const sorted = [
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 45 },
    { name: 'мечник', health: 15 },
  ];

  const result = mat(testing);
  expect(result).toEqual(sorted);
});