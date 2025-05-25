const express = require("express");
const colors = require("colors");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  const techStackMessage = `
    <div style="font-size: 2em; font-family: 'Courier New', monospace; text-align: center; padding: 2rem; background: #f5f5f5; border-radius: 10px; max-width: 600px; margin: 2rem auto; box-shadow: 0 4px 8px rgba(0,0,0,0.1)">
      <p style="color: #e74c3c; font-weight: bold;">Modern</p>
      <p style="color: #f39c12; text-decoration: underline;">Web</p>
      <p style="background: #2ecc71; color: white; padding: 5px;">Development</p>
      <p style="color: #3498db; font-style: italic;">With</p>
      <p style="color: #9b59b6; letter-spacing: 3px;">JavaScript</p>
      <p style="color: #1abc9c; text-shadow: 1px 1px 2px #555;">And</p>
      <p style="color: #e67e22; border-bottom: 2px dashed #e67e22;">Express</p>
    </div>
    <div style="text-align: center; margin-top: 1rem; color: #777">
      Refresh to see colorful animation effects!
    </div>
    <script>
      const colors = ['#e74c3c', '#f39c12', '#2ecc71', '#3498db', '#9b59b6', '#1abc9c', '#e67e22'];
      let current = 0;
      setInterval(() => {
        document.querySelectorAll('p').forEach(p => {
          p.style.color = colors[current % colors.length];
          current++;
        });
      }, 1000);
    </script>
  `;
  res.send(techStackMessage);
});

app.listen(port, () => {
  console.log(colors.green(`Server running at http://localhost:${port}`));
});
