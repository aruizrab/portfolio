import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'content', 'blog');
const OUTPUT_DIR = path.join(ROOT, 'src', 'assets', 'blog');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'index.json');

const ensureDir = async (dir) => {
    await fs.mkdir(dir, { recursive: true });
};

const normalizeTags = (value) => {
    if (!value) {
        return [];
    }

    if (Array.isArray(value)) {
        return value.map(String);
    }

    return String(value)
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);
};

const readPosts = async () => {
    try {
        await fs.access(BLOG_DIR);
    } catch {
        await ensureDir(BLOG_DIR);
        return [];
    }

    const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
    const posts = [];

    for (const entry of entries) {
        if (!entry.isFile() || !entry.name.endsWith('.md')) {
            continue;
        }

        const slug = entry.name.replace(/\.md$/, '');
        const filePath = path.join(BLOG_DIR, entry.name);
        const raw = await fs.readFile(filePath, 'utf8');
        const { data } = matter(raw);

        posts.push({
            slug,
            title: data.title ?? slug,
            description: data.description ?? '',
            date: data.date ?? new Date().toISOString(),
            tags: normalizeTags(data.tags)
        });
    }

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return posts;
};

const writeIndex = async (posts) => {
    await ensureDir(OUTPUT_DIR);
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(posts, null, 2));
};

const main = async () => {
    const posts = await readPosts();
    await writeIndex(posts);
    console.log(`Generated blog index with ${posts.length} entr${posts.length === 1 ? 'y' : 'ies'} at ${OUTPUT_FILE}`);
};

main().catch((error) => {
    console.error('Failed to generate blog index', error);
    process.exitCode = 1;
});
