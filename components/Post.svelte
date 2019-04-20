<script>
export let blog
export let article
</script>
<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/bulma/css/bulma.css">
</svelte:head>

<section class="section">
  <div class="container">
    <a href="/"><h1 class="title">{blog.title}</h1></a>
  </div>
</section>
<section class="section">
  <div class="container">
    <h1 class="title">{article.title}</h1>
    <div class="content">
      {@html article.content}
    </div>
  </div>
</section>
