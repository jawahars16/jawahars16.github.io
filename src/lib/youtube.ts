export interface Video {
  id: string;
  title: string;
  description: string;
  published: string;
  formattedDate: string;
  thumbnail: string;
  url: string;
}

export const CHANNEL_ID = 'UCmMu15DUGT3klr0M6RBQqbg';
export const CHANNEL_URL = 'https://www.youtube.com/channel/UCmMu15DUGT3klr0M6RBQqbg/videos';

const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const FALLBACK_VIDEOS: Video[] = [
  {
    id: 'sazlAqVbaW8',
    title: 'Symmetric vs Asymmetric Encryption in a nutshell',
    description: 'A simple explanation of symmetric encryption, asymmetric encryption, public keys, private keys, and why modern systems use both.',
    published: '2026-01-05',
    formattedDate: 'Jan 5, 2026',
    thumbnail: 'https://i.ytimg.com/vi/sazlAqVbaW8/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=sazlAqVbaW8',
  },
  {
    id: 'WaPwqazon9Q',
    title: 'What is Checksum: The Easiest Explanation You will Ever See',
    description: 'Checksums explained with a simple analogy, including why they exist and how they help detect changed or corrupted data.',
    published: '2025-12-01',
    formattedDate: 'Dec 1, 2025',
    thumbnail: 'https://i.ytimg.com/vi/WaPwqazon9Q/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=WaPwqazon9Q',
  },
  {
    id: 'JiPUo2wM9DQ',
    title: 'CQRS explained in a Nutshell',
    description: 'A simple developer guide to Command Query Responsibility Segregation and when it helps backend systems.',
    published: '2025-10-27',
    formattedDate: 'Oct 27, 2025',
    thumbnail: 'https://i.ytimg.com/vi/JiPUo2wM9DQ/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=JiPUo2wM9DQ',
  },
  {
    id: 'BVuxHlUbvyE',
    title: 'JWT vs Sessions',
    description: 'Session authentication and JWT authentication compared through control, scalability, logout, revocation, and security tradeoffs.',
    published: '2025-07-14',
    formattedDate: 'Jul 14, 2025',
    thumbnail: 'https://i.ytimg.com/vi/BVuxHlUbvyE/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=BVuxHlUbvyE',
  },
  {
    id: 'iwJt6hqWfTE',
    title: 'Mutex vs Semaphore Explained',
    description: 'Mutexes and semaphores explained with practical concurrency examples and simple mental models.',
    published: '2025-07-07',
    formattedDate: 'Jul 7, 2025',
    thumbnail: 'https://i.ytimg.com/vi/iwJt6hqWfTE/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=iwJt6hqWfTE',
  },
  {
    id: 'XH_KVNGsKpA',
    title: 'What Is a Race Condition?',
    description: 'Race conditions explained with a real-world analogy, the check-then-act pattern, and how synchronization fixes it.',
    published: '2025-06-30',
    formattedDate: 'Jun 30, 2025',
    thumbnail: 'https://i.ytimg.com/vi/XH_KVNGsKpA/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=XH_KVNGsKpA',
  },
];

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function formatDate(value: string): string {
  const date = new Date(value);

  return isNaN(date.getTime())
    ? value.slice(0, 10)
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function parseVideos(xml: string): Video[] {
  const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) ?? [];

  return entries
    .map(entry => {
      const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? '';
      const title = decodeEntities(entry.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '');
      const pub = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? '';
      const desc = decodeEntities((entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? '').trim()).slice(0, 140);
      const href = entry.match(/<link rel="alternate" href="(.*?)"\/>/)?.[1] ?? '';

      return {
        id,
        title,
        description: desc,
        published: pub.slice(0, 10),
        formattedDate: formatDate(pub),
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        url: href || `https://www.youtube.com/watch?v=${id}`,
        isShort: href.includes('/shorts/'),
      };
    })
    .filter(video => video.id && !video.isShort)
    .map(({ isShort, ...video }) => video);
}

export async function getYouTubeVideos(limit?: number): Promise<Video[]> {
  try {
    const response = await fetch(RSS_URL);

    if (!response.ok) {
      throw new Error(`YouTube RSS returned ${response.status}`);
    }

    const videos = parseVideos(await response.text());

    return videos.length > 0 ? videos.slice(0, limit) : FALLBACK_VIDEOS.slice(0, limit);
  } catch {
    return FALLBACK_VIDEOS.slice(0, limit);
  }
}
