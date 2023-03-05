<script>
  import { onMount, tick } from "svelte/internal";

  export let data;

  let element;
  onMount(async () => {
    // render component as csr
    const component = await import(`/${data.name}.js`);
    element.innerHTML = "";

    console.log(data.props);
    await tick();
    new component.default({
      target: element,
      props: data.props,
    });
  });
</script>

<div bind:this={element}>
  {@html data.html}
</div>
