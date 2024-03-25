import { faker } from "@faker-js/faker";

async function createUser(userName, password) {
  const response = await fetch("https://bookstore.demoqa.com/Account/v1/User", {
    method: "post",
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

async function GenerateToken(userName, password) {
  const token = await fetch(
    "https://bookstore.demoqa.com/Account/v1/GenerateToken",
    {
      method: "post",
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    },
  );
  return token;
}
describe("5 апи-тестов на сервис bookstore", () => {
  const userName = faker.internet.email();
  test("Создание пользователя c ошибкой, логин уже используется", async () => {
    const response = await createUser("Alexey", "Test123@");
    const data = await response.json();
    expect(response.status).toBe(406);
    expect(data.code).toBe("1204");
    expect(data.message).toBe("User exists!");
  });

  test("Создание пользователя c ошибкой, пароль не подходит", async () => {
    const response = await createUser("Alexey", "Test@");
    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.code).toBe("1300");
    expect(data.message).toContain(
      "Passwords must have at least one non alphanumeric character",
    );
  });

  test("Создание пользователя успешно", async () => {
    const response = await createUser(userName, "Alexey12345@");
    const data = await response.json();
    expect(response.status).toBe(201);
    console.log(data);
  });

  test("Генерация токена успешно", async () => {
    const response = await GenerateToken("Test_Alexey123456", "Test123@");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.status).toBe("Success");
    expect(data.result).toBe("User authorized successfully.");
    console.log(data.token);
  });

  test("Генерация токена с ошибкой", async () => {
    const response = await GenerateToken(
      "Test_Alexey123456",
      "неверный_пароль",
    );
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.status).toBe("Failed");
    expect(data.result).toBe("User authorization failed.");
  });
});
