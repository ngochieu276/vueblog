<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost v-for="(post,index) in sampleBlogPost" :key="index" :post="post"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
export default {
  name: "Home",
  components: {BlogPost},
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
};
</script>

<style scoped>
 
</style>
