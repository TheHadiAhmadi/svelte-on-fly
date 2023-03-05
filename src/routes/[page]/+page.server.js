// render component as ssr
export async function load({ request, params, fetch }) {
    const url = new URL(request.url);
    const props = JSON.parse(url.searchParams.get('props') ?? '{}')

    const mod = await fetch(`/${params.page}.js?ssr`).then(res => res.text())

    let result = null
    eval(mod.replace(`export { Component as default };`, 'result = Component;'))


    const rendered = result.render({ ...props })

    return {
        html: rendered.html,
        name: params.page,
        props
    }

}