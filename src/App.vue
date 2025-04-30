<template>
  <div>
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">BookClub</div>
        <ul class="nav-list">
          <li><router-link to="/">Главное</router-link></li>
          <li><router-link to="/library">Моя библиотека</router-link></li>
          <li><router-link to="/blog">Блог</router-link></li>
        </ul>
        <div class="auth-buttons">
          <a href="#" class="auth-link">Вход</a>
          <a href="#" class="auth-link">Регистрация</a>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  padding: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 32px;
  padding: 0;
  margin: 0;
}

.nav-list li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-list li a:hover {
  color: #007bff;
}

.auth-buttons {
  display: flex;
  gap: 16px;
}

.auth-link {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  font-size: 15px;
  transition: opacity 0.2s;
}

.auth-link:hover {
  opacity: 0.8;
}
</style>
