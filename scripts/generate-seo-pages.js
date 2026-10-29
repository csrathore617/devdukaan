import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const outputDirectory = path.resolve(process.cwd(), 'dist');
const homepage = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const pages = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | DevDukaan.in',
    description: 'Read how DevDukaan.in collects, uses and protects information submitted through its website enquiry form.',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | DevDukaan.in',
    description: 'Review the terms for DevDukaan.in website, web application, mobile application and software development services.',
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function updateTag(html, pattern, value, label) {
  let replaced = false;
  const updated = html.replace(pattern, (...matches) => {
    replaced = true;
    return `${matches[1]}${escapeHtml(value)}${matches[2]}`;
  });
  if (!replaced) throw new Error(`Could not find ${label} in the built homepage.`);
  return updated;
}

for (const page of pages) {
  const canonicalUrl = `https://www.devdukaan.in${page.path}`;
  let html = homepage;
  html = updateTag(html, /(<title>)[\s\S]*?(<\/title>)/, page.title, 'page title');
  html = updateTag(html, /(<meta name="description" content=")[^"]*(" \/>)/, page.description, 'description');
  html = updateTag(html, /(<link rel="canonical" href=")[^"]*(" \/>)/, canonicalUrl, 'canonical URL');
  html = updateTag(html, /(<meta property="og:url" content=")[^"]*(" \/>)/, canonicalUrl, 'Open Graph URL');
  html = updateTag(html, /(<meta property="og:title" content=")[^"]*(" \/>)/, page.title, 'Open Graph title');
  html = updateTag(html, /(<meta property="og:description" content=")[^"]*(" \/>)/, page.description, 'Open Graph description');
  html = updateTag(html, /(<meta name="twitter:title" content=")[^"]*(" \/>)/, page.title, 'Twitter title');
  html = updateTag(html, /(<meta name="twitter:description" content=")[^"]*(" \/>)/, page.description, 'Twitter description');

  const pageDirectory = path.join(outputDirectory, page.path.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(path.join(pageDirectory, 'index.html'), html);
}
