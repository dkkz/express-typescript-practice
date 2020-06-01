import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(3, 4));

  res.send(`
  <!DOCTYPE html>
  <html lang="ja">
   <head>
    <meta charset="UTF-8">
    <link rel="author" href="mailto:mail@example.com">
    <title lang="en">HyperText Markup Language - Wikipedia</title>
   </head>
   <body>
    <article>
     <h1 lang="en">HyperText Markup Language</h1>
     <p>HTMLは、<a href="http://ja.wikipedia.org/wiki/SGML">SGML</a>
        アプリケーションの一つで、ハイパーテキストを利用してワールド
        ワイドウェブ上で情報を発信するために作られ、
        ワールドワイドウェブの<strong>基幹的役割</strong>をなしている。
        情報を発信するための文書構造を定義するために使われ、
        ある程度機械が理解可能な言語で、
        写真の埋め込みや、フォームの作成、
        ハイパーテキストによるHTML間の連携が可能である。</p>
    </article>
   </body>
  </html>
    `);
});

app.listen(3000, () => console.log("Server is running!!"));
