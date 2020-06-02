import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="ja">
   <head>
    <meta charset="UTF-8">
    <title>Express TypeScript</title>
   </head>
   <body>
    <article>
     <h1>Dummy Text</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </article>
   </body>
  </html>
    `);
});

app.listen(3000, () => console.log("Server is running!!"));
