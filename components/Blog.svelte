<script>
export let meta
export let articles 
</script>
<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/bulma/css/bulma.css">
</svelte:head>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {meta.title} 
      </h1>
      <h2 class="subtitle">
        {meta.description}
      </h2>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <h2 class="title">Articles</h2>
    <ul>
    {#each articles as article}
      <li>
        <a href="/{article.ID}"><h3 class="subtitle">{article.title}</h3></a>
      </li>
    {/each}
    </ul>
  </div>
</section>

<footer class="footer">
  <p>{meta.title}. Built by Markdown Press.</p>
</footer>
