<a href="/blog">default BLOG</a>
<a
  href={`/blog?props=${JSON.stringify({
    blogs: [
      { title: "ONE", description: "DEFAULT_BLOG_ONE_DESCRIPTION" },
      { title: "TWO", description: "DEFAULT_BLOG_TWO_DESCRIPTION" },
      { title: "THREE", description: "DEFAULT_BLOG_THREE_DESCRIPTION" },
      { title: "FOUR", description: "DEFAULT_BLOG_FOUR_DESCRIPTION" },
    ],
  })}`}>BLOG with props</a
>
<a href="/test">DEFAULT page1</a>
<a href="/another">DEFAULT page2</a>

<a
  href={`/blogitempage?props=${JSON.stringify({
    title: "BLOG ITEM PAGE",
    description: "THIS IS DESCRIPTION",
  })}`}>DEFAULT page2</a
>
