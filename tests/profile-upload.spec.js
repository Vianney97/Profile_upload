const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProfilePage = require('../pages/profilePage');
require('dotenv').config();

test('Upload photo de profil après connexion', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.goto();
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

  await profilePage.goto();
  await profilePage.openProfileEdit();
  await profilePage.uploadProfilePicture('photo.png');
  await profilePage.saveChanges();
});
