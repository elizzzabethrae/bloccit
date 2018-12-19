<!DOCTYPE html>
<html>
  <head>
    <% include ../static/partials/head.ejs %>
  </head>
  <body>
    <main class="container">
      <% include ../static/partials/navbar.ejs %>

      <h1>Topics</h1>

      <ul class="list-group">
<!-- #1 -->
        <% advertisement.forEach((advertisement) => { %>
<!-- #2 -->
          <li class="list-group-item">
            <a href="/advertisement/<%= advertisement.id %>"> <%= advertisement.title %> </a>
          </li>
        <% }) %>
      </ul>

    </main>
  </body>
</html>
