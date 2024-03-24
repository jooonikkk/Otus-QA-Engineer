// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

//Тесты на функцию nameIsValid
describe("Test name user", () => {
  //Успешная проверка
  it("case 1: successful check", () => {
    const result = nameIsValid("test");
    expect(result).toBe(true);
  });

  //Проверка,что будет ошибка, если ввели пустое значение
  it("case 2: empty value", () => {
    const result = nameIsValid("");
    expect(result).toBe(false);
  });

  //Проверка, что будет ошибка, если ввели менее двух символов
  it("case 3: not many letters", () => {
    const result = nameIsValid("T");
    expect(result).toBe(false);
  });

  //Проверка, что будет ошибка, если используем цифры
  it("case 4: enter numbers", () => {
    const result = nameIsValid("Alexey123");
    expect(result).toBe(false);
  });

  //Проверка, что будет ошибка, если используем буквы верхнего регистра
  it("case 5: big letters", () => {
    const result = nameIsValid("Alexey");
    expect(result).toBe(false);
  });
});

describe("Test full trim", () => {
  //Функция удаляет пробелы из текста
  it("case 1: removing spaces from text", () => {
    const result = fullTrim(" A le xey ");
    expect(result).toBe("Alexey");
  });

  //Функция удаляет пробелы из пустого значения
  it("case 2: removing spaces from empty", () => {
    const result = fullTrim("");
    expect(result).toBe("");
  });

  //Функция обрабатывает undefined
  it("case 3: removing spaces from undefined", () => {
    let a;
    const result = fullTrim(a);
    expect(result).toBe("");
  });
});
