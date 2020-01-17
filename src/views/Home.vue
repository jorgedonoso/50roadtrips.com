<template>
  <div
    id="hero"
    class="px-3"
  >
    <div id="overlay"></div>
    <div id="overlay-image"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="display-1">50 Roadtrips</h1>
          <p class="lead text-uppercase">Traveling around the country and the world</p>
          <router-link
            to="/united-states"
            class="btn d-block d-md-inline btn-dark m-1"
            exact
          >United States</router-link>
          <router-link
            to="/international"
            class="btn d-block d-md-inline btn-light m-1"
            exact
          >International</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#overlay-image {
  background: url("/images/hero.jpg");
  background-size: cover;
  background-position: bottom right;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -2;
}

#overlay {
  background: rgba(255, 255, 255, 0.4);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;
}

#hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#hero h1 {
  padding-top: 0 !important;
  font-size: 18vmin;
  color: #222 !important;
}

@media (min-width: 1200px) {
  #hero h1 {
    font-size: 24vmin;
  }
}
</style>