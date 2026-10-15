# React Fundamentals

## By [Mamadou Moussa Balde](https://www.linkedin.com/in/2mb/)

A Vite and React page that shares a light or dark theme through context. From this folder, `npm run dev` starts Vite. This run was Vite 8.2.1 at http://localhost:5173/. The tab title is **react-fundamentals**.

The page starts on the light theme. The list is Home, About, and a button labeled **Dark**. The heading is "React Context API". Under that, a section shows "Section 2" and "Description". Home and About are list items. The page does not set a font or a page background. In this browser the heading is Times New Roman at 32px, and the two paragraphs are Times New Roman at 16px. These shots are on white.

The nav and the section use the theme. On light, both are white with black text. The heading sits outside them, so it stays black either way. The button is the browser's default button, `rgb(240, 240, 240)`.

![Light theme, with the button labeled Dark](docs/screenshots/light.png)

Clicking the button switches the theme. The label becomes **Light**. The nav and the section turn black, `rgb(0, 0, 0)`, and their text turns white. The heading stays black. Clicking **Light** returns the page to the first view, and the button reads **Dark** again.

![Dark theme, with the button labeled Light](docs/screenshots/dark.png)
