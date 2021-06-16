<template>
  <div class="container py-5">
    <ul class="nav justify-content-center align-items-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link">前台產品列表</router-link>
      </li>
      <li class="nav-item"><router-link class="nav-link" to="/cart">前台購物車</router-link></li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">後台購物車列表</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
