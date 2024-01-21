import path from "path";//path 모듈은 폴더와 파일 경로를 지정해주는 모듈
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';
//process.cwd 는 현재 폴더의 경로이다
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {

    // 파일 이름을 가져오기   /posts
    const fileNames = fs.readdirSync(postsDirectory);
    // ['pre-rendering.md', 'ssg-ssr.md]
    console.log(fileNames,"fileNames")
    const allPostsData = fileNames.map(fileName => {

        const id = fileName.replace(/\.md$/, '');
        // pre-rendering, ssg-ssr

        // read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        console.log('fileContents', fileContents);

        const matterResults = matter(fileContents);

        return {
            id,
            ...(matterResults.data as { date: string; title: string; })
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; })
    }
}