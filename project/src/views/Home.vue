<template>
  <div>
    <section class="hero">
      <div>
        <div class="text-intro">
          <h1>
            Hi, I am Lanre, a web developer and designer based in Lagos,
            Nigeria.
          </h1>
          <p>
            I love making interactive and user-oriented web apps using tools
            such as WordPress and web frameworks like React. I do not mind a
            little challenge and work still perfection.
          </p>
        </div>
        <div class="btns-cta">
          <a href="#"
            >Send me an email
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4596 8.55705L5.53535 2.36779C5.51465 2.35149 5.48976 2.34136 5.46356 2.33856C5.43735 2.33576 5.41089 2.34041 5.38721 2.35198C5.36353 2.36354 5.34359 2.38155 5.32969 2.40394C5.31578 2.42632 5.30847 2.45218 5.3086 2.47853V3.83732C5.3086 3.92345 5.34903 4.00607 5.41582 4.0588L11.7439 9.00002L5.41582 13.9412C5.34727 13.994 5.3086 14.0766 5.3086 14.1627V15.5215C5.3086 15.6393 5.44395 15.7043 5.53535 15.6322L13.4596 9.44299C13.5269 9.39045 13.5814 9.32325 13.6189 9.24649C13.6564 9.16973 13.6758 9.08543 13.6758 9.00002C13.6758 8.9146 13.6564 8.8303 13.6189 8.75355C13.5814 8.67679 13.5269 8.60958 13.4596 8.55705Z"
                fill="#222222"
              />
            </svg>
          </a>
          <a href="#"
            >Check out my work
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4596 8.55705L5.53535 2.36779C5.51465 2.35149 5.48976 2.34136 5.46356 2.33856C5.43735 2.33576 5.41089 2.34041 5.38721 2.35198C5.36353 2.36354 5.34359 2.38155 5.32969 2.40394C5.31578 2.42632 5.30847 2.45218 5.3086 2.47853V3.83732C5.3086 3.92345 5.34903 4.00607 5.41582 4.0588L11.7439 9.00002L5.41582 13.9412C5.34727 13.994 5.3086 14.0766 5.3086 14.1627V15.5215C5.3086 15.6393 5.44395 15.7043 5.53535 15.6322L13.4596 9.44299C13.5269 9.39045 13.5814 9.32325 13.6189 9.24649C13.6564 9.16973 13.6758 9.08543 13.6758 9.00002C13.6758 8.9146 13.6564 8.8303 13.6189 8.75355C13.5814 8.67679 13.5269 8.60958 13.4596 8.55705Z"
                fill="#222222"
              />
            </svg>
          </a>
        </div>
      </div>
      <router-link :to="{'name': 'About'}" class="link-me">
         <img
        src="../assets/hero-img.png"
        alt="Olanrewaju - I'm a Web and App developer"
        class="hero-img"
      />
      </router-link>
     
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style> 
.hero {
  font-family: "Montserrat";
  padding: 0 2em;
}
.hero > div {
  margin-bottom: 2rem;
}
.text-intro {
  user-select: none;
}
.text-intro h1 {
  font-family: "Playfair Display";
  line-height: 150%;
  max-width: 20rem;
  text-align: left;
}
.text-intro p {
  max-width: 350px;
}
.btns-cta > * {
  display: block;
  text-decoration: none;
  color: black;
  padding: 1em;
  max-width: 50%;
  margin: 0.5em 0;
  font-size: 0.8em;
  border-radius: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 30%;
}
.btns-cta > *:hover {
  opacity: .6;
}
.btns-cta > *:first-child {
  background-color: var(--primary);
}
.btns-cta > *:not(:first-child) {
  border: 1px solid var(--primary);
}

.hero-img {
  max-width: 100%;
  max-height: 100%;
  width: 278px;
  height: 278px;
}
@media screen and (min-width: 576px) {
  .hero {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  .hero > div {
    margin: 0;
  }
  .text-intro h1 {
    max-width: 35rem;
  }
  .text-intro p {
    max-width: 500px;
  }
  .btns-cta {
    display: flex;
    align-items: center;
  }
  .btns-cta > * {
    margin-right: 2rem;
    padding-right: .5em;
  }
  .link-me {
    margin-right: 10%;
  }
  
}
</style>