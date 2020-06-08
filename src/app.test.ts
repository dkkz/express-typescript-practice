import { Get } from "./root";

describe("greet", (): void => {
  it("status 200 with id", () => {
    const req = {
      query: {
        id: "greet"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    };

    Get(req, res);

    expect(res.status.mock.calls[0][0]).toBe(200);
  });
});
