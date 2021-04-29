<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tilte</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">
                Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                Login</router-link>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <select>
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: ["title"],
  data: function () {
    return {
      langs: ["en", "fr"],
    };
  },
};
</script>
