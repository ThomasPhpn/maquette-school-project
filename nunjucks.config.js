const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configuration de nunjucks
const env = nunjucks.configure('src/templates', { autoescape: true });

const pages = [
  { input: 'index.njk', output: 'index.html' }
];

pages.forEach(page => {
  const rendered = env.render(page.input);
  fs.writeFileSync(path.join('dist', page.output), rendered);
});
