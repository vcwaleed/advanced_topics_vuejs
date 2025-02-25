<template>
    <h1 class="page-title">Home Page</h1>
    <div class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/ProfilePage" class="nav-link">Profile</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/ProfilePage/talha" class="nav-link">Talha Profile</router-link>
      <router-link to="/ProfilePage/Waleed" class="nav-link">Waleed Profile</router-link>
      <router-link to="/ProfilePage/ali" class="nav-link">Ali Profile</router-link>
      <router-link to="CreateForm" class="nav-link">CreateForm</router-link>
    </div>
  
    <div class="user-list">
      <p class="list-item" v-for="item in list" :key="item.id">
        <span class="item-field">{{ item.id }}</span>
        <span class="item-field">{{ item.first_name }}</span>
        <span class="item-field">{{ item.last_name }}</span>
        <span class="item-field">{{ item.email }}</span>
      </p>
    </div>
  
    <div class="user-details">
      <ul v-for="item in list" :key="item.id" class="user-item">
        <li><img :src="item.avatar"/></li>
        <li class="user-info">{{ item.id }}</li>
        <li class="user-info">{{ item.first_name }}</li>
        <li class="user-info">{{ item.last_name }}</li>
        <li class="user-info">{{ item.email }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'HomePageComponent',
    data() {
      return {
        list: []
      };
    },
    async mounted() {
      let result = await axios.get("https://reqres.in/api/users?page=1");
      this.list = result.data.data;
      console.log(this.list);
    }
  }
  </script>
  
  <style scoped>
  /* General styling */
  .page-title {
    text-align: center;
    color: #333;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
  }
  
  .nav {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .nav-link {
    text-decoration: none;
    padding: 12px 20px;
    margin: 0 15px;
    font-size: 16px;
    color: #333;
    background-color: #f0f0f0;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #5C6BC0;
    color: white;
  }
  
  .user-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .list-item {
    border: 1px solid #ccc;
    padding: 12px;
    margin: 8px 0;
    width: 80%;
    border-radius: 8px;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }
  
  .list-item:hover {
    background-color: #e9ecef;
  }
  
  .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .user-item {
    list-style: none;
    margin: 10px;
    padding: 15px;
    width: 250px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .user-item:hover {
    transform: translateY(-5px);
    background-color: #f1f1f1;
  }
  
  .user-info {
    font-size: 14px;
    margin: 5px 0;
    color: #555;
  }
  
  .item-field {
    font-size: 14px;
    margin-right: 10px;
    color: #444;
    padding: 3px;
    border-radius: 4px;
  }
  
  </style>
  