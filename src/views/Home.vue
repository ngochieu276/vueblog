<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :key="index"
      :post="post"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View mor Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free acount today</h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: " Hello my friend",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "this is a Filter title",
          blogHtml: "This is a filler blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "this is a Filter title",
          blogHtml: "This is a filler blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],

    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
      return this.$store.state.user
    }
  }
};
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}

.updates .container {
  padding: 100px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 800px) {
  .updates .container {
    padding: 125px 25px;
    flex-direction: row;
  }
}

.updates .router-button {
  display: flex;
  font-size: 14px;
  text-decoration: none;
}

@media (min-width: 800px) {
  .updates .router-button {
    margin-left: auto;
  }
}

h2 {
  font-weight: 300;
  font-size: 32px;
  max-width: 425px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

@media (min-width: 800px) {
  h2 {
    text-align: initial;
    font-size: 40px;
  }
}
</style>
