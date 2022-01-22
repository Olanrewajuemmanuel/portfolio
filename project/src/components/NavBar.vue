<template>
  <nav>
    <a href="/" class="navbar-brand">
      <div class="logo">
        <svg
          width="40"
          height="75"
          viewBox="0 0 63 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9662 52.4L40.0483 2V39.33L60 28.9333L40.0483 74V39.33L14.9662 52.4Z"
            fill="#781D42"
          />
          <path
            d="M1 20.6667C5.78841 13.84 29.0274 5.37778 40.0483 2M40.0483 2L14.9662 52.4L60 28.9333L40.0483 74V2Z"
            stroke="#F0D290"
            stroke-width="2"
          />
        </svg>
        <span id="tagline">{{ logo }}</span>
      </div>
    </a>
    <ul class="nav-list" v-show="isMenuOpen">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">Work</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">Experiments</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About me</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">Blog</router-link>
      </li>
    </ul>
    <div class="menu-icon" @click="toggleMenu()">
      <p>menu</p>
    </div>
  </nav>
</template>

<script>
import { gsap, CSSPlugin } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
export default {
  name: "NavBar",
  props: {
    logo: String,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.animMenu(this.isMenuOpen);
    },
    animMenu(menuStatus) {
      gsap.registerPlugin(CSSRulePlugin, CSSPlugin);
      var rule1 = CSSRulePlugin.getRule(".menu-icon:before");
      var rule2 = CSSRulePlugin.getRule(".menu-icon:after");
      var tl = gsap.timeline({ defaults: { duration: 0.5 } });
      // if menu is open, run this
      if (menuStatus) {
        tl.to(".menu-icon p", { display: "none" })
          .to(rule1, { cssRule: { rotation: 45 } })
          .to(rule2, { cssRule: { rotation: -45, y: -12, x: 0.5 } }, "-=.4")
          .to("ul.nav-list", { opacity: 0.8 }, "-=.3");
      } else {
          // extremely fast return
        tl.to(".menu-icon p", { display: "block" })
          .to(rule1, { cssRule: { rotation: 0 } }, "-=.4")
          .to(rule2, { cssRule: { rotation: 0, x: 0, y: 0 } }, "-=.4")
      }
    },
  },
};
</script>

<style>
.router-link-exact-active {
  color: var(--primary);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  background: var(--white);
  overflow: hidden;
  background-color: var(--white);
}
.navbar-brand {
  width: 80%;
}
#tagline {
  margin-left: 0.5em;
  font-weight: 700;
  color: var(--secondary);
}
.menu-icon {
  position: relative;
  height: 20px;
  margin-right: 1.5em;
  cursor: pointer;
  color: var(--black);
  user-select: none;
}
.menu-icon::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: var(--black);
  top: 20%;
  right: 0;
  left: 105%;
  bottom: 0;
}
.menu-icon::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: var(--black);
  top: 80%;
  right: 0;
  left: 105%;
  bottom: 0;
}
.nav-list li {
  list-style: none;
}
li a {
  text-decoration: none;
  color: var(--black);
}
li a:hover {
  color: var(--primary);
}
@media screen and (max-width: 576px) {
  ul.nav-list {
    position: absolute;
    top: 18%;
    right: 0;
    left: 0;
    height: 350px;
    max-height: 350px;
    background-color: var(--white);
    opacity: 0;
    padding: 1em 2em;

    z-index: 99;
  }
  .nav-list li {
    margin: 1em 0;
    padding: 0.5em 0;
  }
}
</style>