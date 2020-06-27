interface Query {
  [key: string]: {
    id: string;
  };
}
export const Get = (
  req: Query,
  res: { status: jest.Mock; send: jest.Mock }
) => {
  if (req.query.id) {
    return res.status(200).send(`Hi! ${req.query.id}`);
  }

  return res.status(400).send('Who are you?');
};
