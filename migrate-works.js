const fs = require('fs');
const path = require('path');

const worksPath = path.join(__dirname, 'src/data/works.json');
const works = JSON.parse(fs.readFileSync(worksPath, 'utf8'));

works.forEach(work => {
    const slug = work.slug || work.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const filePath = path.join(__dirname, 'src/content/works', `${slug}.mdoc`);

    const frontmatter = {
        title: work.title,
        thumbnail: work.thumbnail,
        duration: work.duration,
        venue: work.venue,
        credits: work.credits,
        ensembles: work.ensembles,
        links: work.links,
        media: work.media
    };

    const yaml = Object.entries(frontmatter)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
        .join('\n');

    const content = `---
${yaml}
---

${work.description || ''}
`;

    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
});
