const path = require('path');

class ProfilePage {
  constructor(page) {
    this.page = page;
    this.editProfileButton = '[data-testid="edit-profile-information-button"]';
    this.importImageButton = 'button:has-text("Importer une image")';
    this.fileInput = 'input[type="file"]';
    this.saveButton = '[data-testid="account-edit-button-submit"]';
  }

  async goto() {
    await this.page.goto('https://www.welcometothejungle.com/fr/me/profile');
    await this.page.waitForLoadState('networkidle');
  }

  async openProfileEdit() {
    await this.page.click(this.editProfileButton);
    await this.page.waitForSelector(this.importImageButton, { state: 'visible' });
    await this.page.click(this.importImageButton);
    await this.page.waitForSelector(this.fileInput, { state: 'attached' });
  }

  async uploadProfilePicture(filename) {
    const filePath = path.resolve(__dirname, '..', 'Uploads', filename);
    await this.page.setInputFiles(this.fileInput, filePath);
  }

  async saveChanges() {
  const [response] = await Promise.all([
    this.page.waitForResponse(resp =>
      resp.url() === 'https://api.welcometothejungle.com/api/v1/registrations' &&
      resp.request().method() === 'PUT' &&
      resp.status() === 200
    ),
    this.page.click(this.saveButton),
  ]);

  const data = await response.json();

  if (!data?.user?.avatar?.url) {
    throw new Error('La sauvegarde de la photo a échoué côté serveur');
  }

  await this.page.waitForLoadState('networkidle');
}


}

module.exports = ProfilePage;
