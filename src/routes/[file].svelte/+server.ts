// Get Content of svelte file
export async function GET({ params }) {
  console.log(params.file);
  if (params.file.toLowerCase() === "blog") {
    return new Response(
      `<script>
      import {onMount} from 'svelte'
    import BlogItem from "./blogitem.svelte"; 
    export let blogs = []

    // onMount(async() => {
    //    blogs = await fetch('/blogs').then(res => res.json())
    //})

</script>
<div>
    BLOG component 
    {#each blogs as blog}
        <BlogItem {blog} />
    {/each}
</div>`
    );
  }

  if (params.file.toLowerCase() === "blogitem") {
    return new Response(
      `<script> export let blog = {}</script>
<div>
    BLOG item: {blog.title} - {blog.description}
    <button on:click={window.location.href=\`/blogitempage?props={"blog":{"id":\${blog.id},"title":"\${blog.title}","description":"\${blog.description}"}}\`}>Open</button>
</div>`
    );
  }
  if (params.file.toLowerCase() === "blogitempage") {
    return new Response(
      `<script> export let blog = {}</script>
<div>
    BLOG item page: {blog.id} - {blog.title} - {blog.description}
    <button on:click={window.location.href="/blog"}>Back</button>
</div>`
    );
  }

  return new Response(
    `<h1>DEFAULT PAGES <br/> <a href='/blog'>BLOG</a><button on:click={console.log}>CLICK</button></h1>`
  );
}
