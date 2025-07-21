class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '[data-testid="login-field-email"]';
    this.passwordInput = '[data-testid="login-field-password"]';
    this.signInSubmitButton = '[data-testid="login-button-submit"]';
  }

  async goto() {
    await this.page.goto('https://www.welcometothejungle.com/fr/signin');
    await this.page.waitForSelector('[data-testid="modal-content-home"]', { state: 'visible' });
    await this.page.waitForSelector('[data-testid="session-tab-login"][aria-selected="true"]', { state: 'visible' });
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error('Email ou mot de passe non défini. Vérifie ton fichier .env.');
    }

    await this.page.waitForSelector(this.emailInput, { state: 'visible' });
    await this.page.waitForSelector(this.passwordInput, { state: 'visible' });

    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);

    await this.page.waitForSelector(this.signInSubmitButton, { state: 'visible' });

    const isDisabled = await this.page.$eval(this.signInSubmitButton, el => el.disabled);
    if (isDisabled) {
      throw new Error('Le bouton de connexion est désactivé');
  }

  await Promise.all([
    this.page.waitForResponse(resp =>
    resp.url().includes('/api/v1/sessions') && resp.request().method() === 'POST' && resp.status() === 201
    ),
    this.page.waitForURL(url => url.toString().includes('/me/profile'), { timeout: 60000 }),
    this.page.click(this.signInSubmitButton)
    ]);
  }

}

module.exports = LoginPage;
