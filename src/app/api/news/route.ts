import Parser from "rss-parser";

export async function GET() {
  const parser = new Parser({
    customFields: {
      item: [
        ["media:content", "media", { keepArray: true }],
        ["enclosure", "enclosure"],
        ["content:encoded", "encoded"],
        ["category", "categories", { keepArray: true }]
      ],
    },
  });

  const feed = await parser.parseURL("https://newsroom.spotify.com/feed");

  const items = feed.items.map(item => {

    let image = null;

    if (item.media?.length) {
      image = item.media[0].$.url;
    } else if (item.enclosure?.url) {
      image = item.enclosure.url;
    } else if (item.encoded) {
      const match = item.encoded.match(/<img[^>]+src="([^">]+)"/);
      if (match) image = match[1];
    }

    return {
      title: item.title,
      link: item.link,
      date: item.pubDate,
      categories: item.categories || [],
      image,
    };
  });

  return Response.json(items, {
    headers: {
      "Cache-Control": "s-maxage=600, stale-while-revalidate=3600"
    }
  });
}
