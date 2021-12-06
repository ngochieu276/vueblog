<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account ?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Regiter</router-link
        >
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot your password</router-link
      >
      <button>Sign in</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  components: {
    email,
    password,
  },
};
</script>

<style >
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}

@media (min-width: 900px) {
  .form-wrap {
    width: 100%;
  }
}

form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

@media (min-width: 900px) {
  form {
    padding: 0 50px;
  }
}

form h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}

@media (min-width: 900px) {
  form h2 {
    font-size: 40px;
  }
}

.inputs {
    width: 100%;
    max-width: 350px;
}

.inputs input {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
}

.input input {
    width: 100%;
    border: none;
    background-color: #f2f7f6;
    padding: 4px 4px 4px 30px;
    height: 50px;
}

.input input:focus {
    outline: none;
}

.input .icon {
    width: 12px;
    position: absolute;
    left: 6px;
}

form .forgot-password{
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    margin: 16px 0 32px;
    border-bottom: 1px solid transparent;
    transition: .5 ease all;

}

form .forgot-password:hover {
    border-color: #303030;
}
</style>